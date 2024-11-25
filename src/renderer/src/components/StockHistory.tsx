import { formatDate } from '@renderer/helpers/general';
import { apiService } from '@renderer/services/apiService';
import { AllStock, Product } from '@renderer/types/api.types';
import { useEffect, useState } from 'react';
import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'

const StockHistory = (): JSX.Element => {
  const [stocks, setStocks] = useState<AllStock>({ stock: [], total: 0 });
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    limit: 10,
    page: 1,
  });
  const fetchProducts = async () => {
    try {
      const products = await apiService.getStockHistory(filters);
      console.log(products)
      if (products.data) {
        setStocks(products.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [filters]);

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
  return (
    <div className=" ml-16 h-screen w-screen">
      <div className="pb-4 pt-1 pl-2">
        <h1 className="text-2xl font-semibold">Stock History</h1>
      </div>
      <hr></hr>
      <div className="max-h-screen">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-accent">
            <tr>
              <th>Product</th>
              <th>Transaction Type</th>
              <th>Quantity</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {stocks.stock.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.Product.name}</td>
                <td>{stock.type}</td>
                <td>{stock.quantity}</td>
                <td>{formatDate(stock.created_at, true)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
          disabled={stocks.stock.length < filters.limit}
        >
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default StockHistory
