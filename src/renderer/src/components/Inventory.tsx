import { formatDate } from '@renderer/helpers/general'
import { apiService } from '@renderer/services/apiService'
import { Product, SingleProduct } from '@renderer/types/api.types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import deleteIcon from '../assets/icons/deleteIcon.png'
import ProductModal from './ProductModal'
import ProductUpdateModal from './ProductUpdateModal'
import toast from "react-hot-toast";
import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'
import { useAuth } from '@renderer/hooks/useAuth'

const Inventory = (): JSX.Element => {
  const { isAuthenticated} = useAuth();
  const [products, setProducts] = useState<Product>({ product: [], total: 0 });
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    limit: 10,
    page: 1,
    sort: '',
    name: '',
  });
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlePageChange = (direction: 'next' | 'prev') => {
    setFilters((prev) => ({
      ...prev,
      page: direction === 'next' ? prev.page + 1 : Math.max(prev.page - 1, 1),
    }));
  };
  const fetchProducts = async () => {
    try {
      const products = await apiService.getProducts(filters);
      if (products.data) {
        setProducts(products.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [filters.page, filters.limit]);
  
  const deleteProduct = async (id: string) => {
    try {
      const response = await apiService.deleteProduct(id);
      if (response?.data && !response.error) {
        toast.success("Product deleted successfully!");
        fetchProducts();
      } else {
        console.error(response);
        toast.error(response?.msg || "Product deletion failed");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div className="bg-slate-100 ml-16 h-screen w-screen pr-16">
      <div className="pb-4 pt-1 pl-2">
        <h1 className="text-2xl font-semibold">Inventory</h1>
        <p className="text-xs text-gray-400">{products.total} Product(s)</p>
      </div>
      <hr></hr>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-row justify-between pl-2">
          <div>
            <button
              className="btn btn-accent btn-sm my-4"
              onClick={() => {
                if (!isAuthenticated) {
                  toast.error('Please login to modify product')
                  window.location.href = '/auth'
                } else {
                  const modal = document.getElementById('add_product') as HTMLDialogElement
                  modal.showModal()
                }
              }}
            >
              Add Product
            </button>
            {/* <button className="btn btn-outline btn-accent btn-sm my-4 ml-4"> */}
            <Link className="btn btn-outline btn-accent btn-sm my-4 ml-4" to="/stockHistory">
              Stock History
            </Link>
            {/* </button> */}
          </div>
          <button
            className="btn btn-outline btn-error btn-sm my-4 mr-4"
            onClick={() => {
              if (!isAuthenticated) {
                toast.error('Please login to modify product')
                window.location.href = '/auth'
              } else {
                const modal = document.getElementById('modify_product') as HTMLDialogElement
                modal.showModal()
              }
            }}
          >
            Update Product
          </button>
        </div>
        <ProductModal />
        <ProductUpdateModal productData={products.product} />
        <div className="overflow-x-auto max-h-[420px]">
          <table className="table table-pin-rows">
            {/* head */}
            <thead className="bg-accent">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Available</th>
                <th>Modified</th>
                <th>Total Sale</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products.product.map((product) => (
                <tr key={product.uuid}>
                  <th>{product.name}</th>
                  <td># {product.price.toLocaleString()}</td>
                  <td>{product.stock.available}</td>
                  <td>{formatDate(product.last_updated)}</td>
                  <td>{product.stock.amountSold}</td>
                  <td>
                    <button className="btn btn-sm btn-square btn-error" onClick={() => deleteProduct(product.uuid)}>
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
      <div className="flex flex-row mt-2 ml-2 gap-x-2 align-center items-center">
        <button
          className="btn btn-xs btn-ghost btn-square"
          onClick={() => handlePageChange('prev')}
          disabled={filters.page === 1}
        >
          <img src={left} alt="Previous" />
        </button>
        <div className="flex flex-row gap-x-2 items-center ml-4">
          <label htmlFor="page" className="block text-sm font-medium">
            Page: {filters.page}
          </label>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <label htmlFor="limit" className="block text-sm font-medium">
            Limit:
          </label>
          <select
            id="limit"
            name="limit"
            className="select select-bordered w-full max-w-xs"
            onChange={handleFilterChange}
            value={filters.limit}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <button
          className="btn btn-xs btn-ghost btn-square"
          onClick={() => handlePageChange('next')}
          disabled={products.product.length < filters.limit}
        >
          <img src={right} alt="Next" />
        </button>
      </div>

    </div>
  )
}

export default Inventory
