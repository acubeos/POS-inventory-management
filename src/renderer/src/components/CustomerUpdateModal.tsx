import { apiService } from "@renderer/services/apiService";
import { CreateCustomerData, Customer } from "@renderer/types/api.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface CustomerModalProps {
  customerData: Partial<Customer> | null;
}
const CustomerUpdateModal: React.FC<CustomerModalProps> = ({ customerData }) => {
  const [customer, setCustomer] = useState<Partial<Customer>>({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (customerData) {
      setCustomer(customerData); // Update local state when customerData changes
    }
  }, [customerData]);

  const updateCustomer = async () => {
    setLoading(true);
    const loadingToast = toast.loading("Updating customer...");
    const id = customer?.uuid;
    const data: Partial<CreateCustomerData> = {
      name: customer?.name,
      phone: customer?.phone,
      address: customer?.address,
    };
    try {
      const response = await apiService.updateCustomer(String(id), data);

      toast.dismiss(loadingToast);

      if (response?.updated && !response.error) {
        toast.success("Customer updated successfully!");
        navigate(0);
      } else {
        console.error(response);
        toast.error(response?.msg || "Customer update failed");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <button
        className="btn mx-4 my-4"
        onClick={() => {
          const modal = document.getElementById('my_modal_3') as HTMLDialogElement
          modal.showModal()
        }}
      >
        open modal
      </button> */}
      <dialog id="modify_customer" className="modal">
        <div className="modal-box">
          <form onSubmit={(e) => { e.preventDefault(); updateCustomer(); }}>
            {/* if there is a button in form, it will close the modal */}
            <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
            onClick={() =>
              (document.getElementById("modify_customer") as HTMLDialogElement)?.close()
            }>✕</button>
            <h3 className="font-bold text-lg text-center">Add New Customer</h3>

            <div className="mt-5 flex flex-col justify-center items-center">
              <div className="flex flex-col pb-2 w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  className="input input-bordered "
                  value={customer.name}
                  onChange={(evt) => setCustomer({ ...customer, name: evt.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col pb-2  w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  className="input input-bordered"
                  value={customer.address}
                  onChange={(evt) => setCustomer({ ...customer, address: evt.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col pb-2  w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="contact">
                  Contact
                </label>
                <input
                  type="number"
                  id="contact"
                  placeholder="Enter phone number"
                  className="input input-bordered"
                  value={customer.phone}
                  onChange={(evt) => setCustomer({ ...customer, phone: evt.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="my-4 btn btn-accent w-full max-w-xs"
                disabled={loading}
                onClick={updateCustomer}
              >
                {loading ? "Updating Customer..." : "Update Customer"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default CustomerUpdateModal
