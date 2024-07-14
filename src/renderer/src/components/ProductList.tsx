import deleteIcon from '../assets/icons/deleteIcon.png'
import updateIcon from '../assets/icons/update.png'
import ProductModal from './ProductModal'

const ProductList = (): JSX.Element => {
  return (
    <div className="bg-slate-100 pl-16 h-screen">
      <div className="pb-4 pt-1">
        <h1 className="text-2xl">Inventory</h1>
        <p className="text-xs text-gray-400">3 Product</p>
      </div>
      <hr></hr>

      <form onSubmit={(e) => e.preventDefault()}>
        <button
          className="btn btn-accent btn-sm my-4"
          onClick={() => {
            const modal = document.getElementById('add_product') as HTMLDialogElement
            modal.showModal()
          }}
        >
          Add Products
        </button>
        <button className="btn btn-outline btn-accent btn-sm my-4 ml-4">Transaction Details</button>
        <ProductModal />
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
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={updateIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Bece State Agent</th>
                <td>#2,000</td>
                <td>500</td>
                <td>27,July 2024</td>
                <td>4,000</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={updateIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Neco Agent texts</th>
                <td>#3,000</td>
                <td>2,000</td>
                <td>27,July 2024</td>
                <td>2,000</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={updateIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
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
