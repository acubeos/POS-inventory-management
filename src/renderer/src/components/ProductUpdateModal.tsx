import React from "react";
import { apiService } from "@renderer/services/apiService";
import { CreateProductData, SingleProduct } from "@renderer/types/api.types";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface ProductModalProps {
  productData: Partial<SingleProduct>[];
}
const ProductUpdateModal: React.FC<ProductModalProps> = ({ productData }) => {
  const [product, setProduct] = useState<Partial<SingleProduct>>();
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const updateProduct = async () => {
    setIsLoading(true);
    const id = product?.uuid;
    console.log(product);
    const data: Partial<CreateProductData> = {
      name: product?.name,
      price: product?.price,
      quantity: quantity,
    };
    try {
      const response = await apiService.updateProduct(String(id), data);
      if (!response.error) {
        toast.success("Product updated successfully!");
        navigate(0);
      } else {
        console.error(response);
        toast.error(response?.msg || "Product update failed");
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const changeValue = (e: any) => {
    const { value, id } = e.target;
    if(id == "book"){
      setProduct(JSON.parse(value));
    }
  };
  return (
    <>
      <dialog id="modify_product" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={updateProduct}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() =>
                (document.getElementById("modify_product") as HTMLDialogElement)?.close()
              }>✕</button>
            <h3 className="font-bold text-lg text-center">Update Product</h3>

            <div className="mt-5 flex flex-col justify-center items-center">
              <div className="flex flex-col pb-2  w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="book">
                  Books
                </label>
                <select id="book" className="select select-bordered" onChange={(e) => changeValue(e)}>
                  <option disabled selected>
                    Pick one
                  </option>
                  {productData.map((product) => (
                    <option key={product.uuid} value={JSON.stringify(product)}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col pb-2 w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="qty">
                  Quantity
                </label>
                <input
                  id="qty"
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered "
                  onChange={(evt) => setQuantity(Number(evt.target.value))}
                  required
                />
              </div>
              <button type="submit" onClick={updateProduct} className="my-4 btn btn-accent w-full max-w-xs">
                {isLoading ? "Updating Product..." : "Update Product"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ProductUpdateModal
