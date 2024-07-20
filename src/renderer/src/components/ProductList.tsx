import deleteIcon from '../assets/icons/deleteIcon.png'
import ProductModal from './ProductModal'
import ProductUpdateModal from './ProductUpdateModal'

const ProductList = (): JSX.Element => {
  return (
    <div className="bg-slate-100 pl-16 h-screen">
      <div className="pb-4 pt-1">
        <h1 className="text-2xl">Inventory</h1>
        <p className="text-xs text-gray-400">3 Product</p>
      </div>
      <hr></hr>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-row justify-between">
          <div>
            <button
              className="btn btn-accent btn-sm my-4"
              onClick={() => {
                const modal = document.getElementById('add_product') as HTMLDialogElement
                modal.showModal()
              }}
            >
              Add Product
            </button>
            <button className="btn btn-outline btn-accent btn-sm my-4 ml-4">Stock History</button>
          </div>
          <button
            className="btn btn-outline btn-error btn-sm my-4 mr-4"
            onClick={() => {
              const modal = document.getElementById('modify_product') as HTMLDialogElement
              modal.showModal()
            }}
          >
            Update Product
          </button>
        </div>
        <ProductModal />
        <ProductUpdateModal />
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
              <tr>
                <th>Bece State texts</th>
                <td>#2,100</td>
                <td>4,100</td>
                <td>27,July 2024</td>
                <td>6,000</td>
                <td>
                  <button className="btn btn-sm btn-square btn-error">
                    <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                  </button>
                </td>
              </tr>
              <tr>
                <th>Bece State Agent</th>
                <td>#2,000</td>
                <td>500</td>
                <td>27,July 2024</td>
                <td>4,000</td>
                <td>
                  <button className="btn btn-sm btn-square btn-error">
                    <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                  </button>
                </td>
              </tr>
              <tr>
                <th>Neco Agent texts</th>
                <td>#3,000</td>
                <td>2,000</td>
                <td>27,July 2024</td>
                <td>2,000</td>
                <td>
                  <button className="btn btn-sm btn-square btn-error">
                    <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  )
}

export default ProductList
