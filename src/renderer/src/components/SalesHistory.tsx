import { formatDate } from '@renderer/helpers/general';
import { apiService } from '@renderer/services/apiService';
import { AllSales, Sale } from '@renderer/types/api.types';
import { useEffect, useState } from 'react';
import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'
import DatePickerC from './DatePickerC'

const SalesHistory = (): JSX.Element => {
  const [sale, setSale] = useState<Partial<Sale>>({ id: 0, customer_id: 0, total: 0, outstanding: 0, products: {} });
  const [sales, setSales] = useState<AllSales>({ sales: [], total: 0 });
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
  const handleSortChange = (sortKey: 'date' | 'name') => {
    setFilters((prev) => ({
      ...prev,
      sort: sortKey,
    }));
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSales(); // Trigger the API call with updated filters
  };
  const fetchSales = async () => {
    try {
      const sales = await apiService.getSales(filters);
      console.log(sales)
      if (sales.data) {
        setSales(sales.data);
      }
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };
  const handleDateChange = (dateRange: { startDate: string | null; endDate: string | null }) => {
    setFilters((prev) => ({
      ...prev,
      from: dateRange.startDate || '',
      to: dateRange.endDate || '',
    }));
  };
  useEffect(() => {
    fetchSales();
  }, [filters.page, filters.limit]);
  
  return (
    <div className="bg-slate-100 ml-16 pr-16 h-screen w-screen">
      <div className="pb-4 pt-1 pl-2">
        <h1 className="text-2xl font-semibold">All Sales</h1>
        <p className="text-xs text-gray-400">{sales.total} Transactions</p>
      </div>
      <hr></hr>
      {/* Check if form is necessary */}
      <form onSubmit={handleSearch}>
        <div className="flex flex-row justify-between">
          <div className="mr-6 my-3 h-8 w-60 pl-2">
            <DatePickerC  onDateChange={handleDateChange} />
          </div>

          <div className="my-4 flex flex-nowrap gap-x-2">
            <input
              name='name'
              className="input input-bordered input-accent input-sm w-64 mr-4"
              placeholder="Search..."
              onChange={handleFilterChange}
              value={filters.name}
            />
            {/* <details className="dropdown dropdown-end mr-3">
              <summary className="btn btn-sm btn-accent btn-outline">Sort by</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[64] w-44 shadow">
                <li>
                  <button onClick={() => handleSortChange('date')}>Date Ascending</button>
                </li>
                <li>
                  <a  onClick={() => handleSortChange('name')}>Name Ascending</a>
                </li>
              </ul>
            </details> */}
            <button type="submit" className="btn btn-sm btn-accent btn-outline">
              Filter
            </button>
          </div>
          
        </div>

        <div className="overflow-x-auto max-h-[420px]">
          <table className="table table-sm table-pin-rows">
            {/* head */}
            <thead className="bg-accent">
              <tr>
                <th>Date</th>
                <th>Invoice id</th>
                <th>Customer name</th>
                <th>Total paid</th>
                <th>Outstanding</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {sales && sales.sales.map((sale) => (
                <tr key={sale.id}>
                  <td>{formatDate(sale.last_updated)}</td>
                  <td>{sale.id}</td>
                  <td>{sale.Customer.name}</td>
                  <td># {sale.total}</td>
                  <td># {sale.outstanding}</td>
                  <td>
                    <a className="link link-accent" onClick={() => {
                      setSale(sale);
                      const modal = document.getElementById('single_sale') as HTMLDialogElement
                      modal.showModal()
                    }}>Details</a>
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
          disabled={sales.sales.length < filters.limit}
        >
          <img src={right} alt="Next" />
        </button>
      </div>
      <dialog id="single_sale" className="modal">
        <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() =>
                (document.getElementById("single_sale") as HTMLDialogElement)?.close()
              }>✕</button>
          <table className="table table-sm table-pin-rows">
            <thead>
              <tr>
                <th>Books</th>
                <th>Quantity</th>
                <th>Sub-total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sale.id! > 0 && sale.products.map((product) => (
                <tr key={product.product_id}>
                  <td>{product.name}</td>
                  <td>
                    {product.quantity}
                  </td>
                  <td>#{(product.price! * product.quantity).toFixed(2)}</td>
                  
                </tr>
              ))}
              {/* Total Price Row */}
              <tr>
                <td className="font-bold">Total</td>
                <td></td>
                <td className="font-bold">
                  #{ sale.total }
                </td>
              </tr>
              {/* Outstanding Row */}
              <tr>
                <td className="font-bold">Total Paid</td>
                <td></td>
                <td className="text-500">
                  #{sale.total_paid}
                </td>
                <td></td>
                <td></td>
              </tr>

              {/* Total Paid Row */}
              <tr>
                <td className="font-bold">Outstanding</td>
                <td></td>
                <td className="text-500">
                  #{sale.outstanding}
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

          </table>
        </div>
      </dialog>
    </div>
  )
}

export default SalesHistory
