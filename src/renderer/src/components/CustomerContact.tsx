import CustomerModal from './CustomerModal'
import deleteIcon from '../assets/icons/deleteIcon.png'
import editIcon from '../assets/icons/editIcon.png'
import { useEffect, useState } from 'react';
import { AllCustomers, Customer } from '@renderer/types/api.types';
import { apiService } from '@renderer/services/apiService';
import left from '../assets/icons/icon-left.png';
import right from '../assets/icons/icon-right.png';
import toast from "react-hot-toast";
import CustomerUpdateModal from './CustomerUpdateModal';

const CustomerContact = (): JSX.Element => {
  const [customers, setCustomers] = useState<AllCustomers>({ customers: [], total: 0 });
  const [selectedCustomer, setSelectedCustomer] = useState<Partial<Customer> | null>(null); // Track selected customer
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
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCustomers(); // Trigger the API call with updated filters
  };
  const fetchCustomers = async () => {
    try {
      const customers = await apiService.getCustomers(filters);
      console.log(customers)
      if (customers.data) {
        setCustomers(customers.data);
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };
  useEffect(() => {
    fetchCustomers();
  }, [filters.page, filters.limit]);

  const deleteCustomer = async (id: string) => {
    try {
      const response = await apiService.deleteCustomer(id);
      if (response?.data && !response.error) {
        toast.success("Customer deleted successfully!");
        fetchCustomers();
      } else {
        console.error(response);
        toast.error(response?.msg || "Customer deletion failed");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    }
  };
  return (
    <div className="bg-slate-100 ml-16 h-screen w-screen pr-16">
      <div className="pb-4 pt-1 pl-2">
        <h1 className="text-2xl font-semibold">Customer</h1>
        <p className="text-xs text-gray-400">{customers.total} Customer(s)</p>
      </div>
      <hr></hr>

      <form onSubmit={handleSearch}>
        <button
          className="btn btn-accent btn-sm my-4 ml-2"
          onClick={() => {
            setSelectedCustomer(null); // Reset selected customer when clicking on Add New
            const modal = document.getElementById('add_customer') as HTMLDialogElement
            modal.showModal()
          }}
        >
          Add New
        </button>
        <input
          name='name'
          type="text"
          placeholder="search..."
          className="input input-bordered input-sm w-full max-w-xs ml-4"
          onChange={handleFilterChange}
          value={filters.name}
        />
        <button type="submit" className="mx-4 btn btn-sm btn-accent btn-outline">
          Filter
        </button>
        <CustomerModal />
        <CustomerUpdateModal customerData={selectedCustomer} />
        <div className="overflow-x-auto max-h-[420px]">
          <table className="table table-pin-rows">
            {/* head */}
            <thead className="bg-accent">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {customers.customers.map((customer) => (
                <tr key={customer.id}>
                  <th>{customer.id}</th>
                  <th>{customer.name}</th>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td>
                    <div className="flex gap-x-2">
                      <button className="btn btn-sm btn-square btn-outline btn-accent" onClick={(e) => {
                        e.preventDefault();
                        setSelectedCustomer(customer);
                        const modal = document.getElementById('modify_customer') as HTMLDialogElement
                        modal.showModal()
                      }}>
                        <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                      </button>
                      <button className="btn btn-sm btn-square btn-error" onClick={() => deleteCustomer(customer.uuid)}>
                        <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                      </button>
                    </div>
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
          disabled={customers.customers.length < filters.limit}
        >
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default CustomerContact
