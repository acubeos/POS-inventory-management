import { apiService } from "@renderer/services/apiService";
import { CreateCustomerData } from "@renderer/types/api.types";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CustomerModal = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateCustomerData>({ mode: "onChange" }); // Add 'mode' for real-time validation
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateCustomerData> = async (data) => {
    setLoading(true);
    const loadingToast = toast.loading("Creating customer...");
    try {
      const response = await apiService.createCustomer(data);

      toast.dismiss(loadingToast);

      if (response?.data && !response.error) {
        toast.success("Customer created successfully!");
        navigate(0);
      } else {
        console.error(response);
        toast.error(response?.msg || "Customer creation failed");
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
      <dialog id="add_customer" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
            onClick={() =>
              (document.getElementById("add_customer") as HTMLDialogElement)?.close()
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
                  {...register("name", { required: "Customer name is required" })}
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
                  {...register("address", { required: "Customer address is required" })}
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
                  {...register("phone", { required: "Customer phone number is required" })}
                />
              </div>
              <button
                type="submit"
                className="my-4 btn btn-accent w-full max-w-xs"
                disabled={!isValid || loading}
                onClick={handleSubmit(onSubmit)}
              >
                {loading ? "Saving Customer..." : "Save Customer"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default CustomerModal
