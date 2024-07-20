const ProductUpdateModal = (): JSX.Element => {
  return (
    <>
      <dialog id="modify_product" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg text-center">Update Product</h3>

            <div className="mt-5 flex flex-col justify-center items-center">
              <div className="flex flex-col pb-2  w-full max-w-xs">
                <label className="font-semibold pb-1" htmlFor="book">
                  Books
                </label>
                <select id="book" className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Bece oyo</option>
                  <option>Neco Bece</option>
                  <option>Bece Lagos</option>
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
                />
              </div>
              <button className="my-4 btn btn-accent w-full max-w-xs">Add Product</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ProductUpdateModal
