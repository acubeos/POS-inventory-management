import { formatDate } from '@renderer/helpers/general';
import { apiService } from '@renderer/services/apiService';
import { AllSales } from '@renderer/types/api.types';
import { useEffect, useState } from 'react';
import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'

const Outstanding = (): JSX.Element => {
  const [sales, setSales] = useState<AllSales>({ sales: [], total: 0 });
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    limit: 10,
    page: 1,
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
  const fetchSales = async () => {
    try {
      const sales = await apiService.getOutstandingSales(filters);
      console.log(sales)
      if (sales.data) {
        setSales(sales.data);
      }
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };
  useEffect(() => {
    fetchSales();
  }, [filters]);
  return (
    <div className=" ml-16 h-screen w-screen pr-16">
      <div className="flex justify-between pb-2 pt-1 pl-2 px-4">
        <h1 className="text-2xl font-semibold">Outstanding Balance</h1>
        <button className="btn btn-sm btn-outline btn-accent">Print</button>
      </div>
      <hr></hr>

      <table className="table table-zebra">
        {/* head */}
        <thead className="bg-accent">
          <tr>
            <th>Last Updated</th>
            <th>Customer</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {sales && sales.sales.map((sale) => (
            <tr key={sale.id}>
              <th>{formatDate(sale.last_updated)}</th>
              <td>{sale.Customer.name}</td>
              <td># {sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>
  )
}

export default Outstanding
