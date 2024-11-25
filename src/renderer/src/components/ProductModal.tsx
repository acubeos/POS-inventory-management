import { apiService } from "@renderer/services/apiService";
import { CreateProductData } from "@renderer/types/api.types";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductModal = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateProductData>({ mode: "onChange" }); // Add 'mode' for real-time validation
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateProductData> = async (data) => {
    setLoading(true);
    const loadingToast = toast.loading("Creating product...");
    try {
      const response = await apiService.createProduct(data);

      toast.dismiss(loadingToast);

      if (response?.data && !response.error) {
        toast.success("Product created successfully!");
        navigate(0);
      } else {
        console.error(response);
        toast.error(response?.msg || "Product creation failed");
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
      <dialog id="add_product" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={() =>
                (document.getElementById("add_product") as HTMLDialogElement)?.close()
              }
            >
              ✕
            </button>
            <h3 className="font-bold text-lg text-center">Add New Product</h3>

            <div className="mt-5 flex flex-col justify-center items-center">
              <div className="flex flex-col pb-2 w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="name">
                  Product Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Product Name"
                  className="input input-bordered"
                  {...register("name", { required: "Product name is required" })}
                />
              </div>
              <div className="flex items-center pb-2 max-w-xs gap-x-2">
                <div>
                  <label className="font-semibold pb-1" htmlFor="sp">
                    Price
                  </label>
                  <input
                    type="number"
                    id="sp"
                    placeholder="Price"
                    className="input input-bordered"
                    {...register("price", {
                      required: "Price is required",
                      valueAsNumber: true,
                    })}
                  />
                </div>
                <div>
                  <label className="font-semibold pb-1" htmlFor="qty">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="qty"
                    placeholder="0"
                    className="input input-bordered w-11/12"
                    {...register("quantity", {
                      required: "Quantity is required",
                      valueAsNumber: true,
                    })}
                  />
                </div>
              </div>
              <div className="flex flex-col pb-2 w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="transaction">
                  Transaction Type
                </label>
                <select
                  id="transaction"
                  className="select select-bordered"
                  {...register("type", { required: "Transaction type is required" })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pick one
                  </option>
                  <option value="stock">New Stock</option>
                  <option value="return">Return</option>
                </select>
              </div>
              <button
                type="submit"
                className="my-4 btn btn-accent w-full max-w-xs"
                disabled={!isValid || loading}
                onClick={handleSubmit(onSubmit)}
              >
                {loading ? "Saving Product..." : "Save Product"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ProductModal;
