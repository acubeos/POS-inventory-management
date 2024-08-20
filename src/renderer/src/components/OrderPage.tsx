import book from '../assets/image/open-book.png'
import CustomerModal from './CustomerModal'

const OrderPage = (): JSX.Element => {
  return (
    <div className="bg-slate-100 ml-16 pt-2 pl-4 pr-16 grid grid-cols-2 w-screen gap-x-1 h-screen">
      <div>
        <h1 className="font-bold">Select Books</h1>
        <div className="flex flex-wrap gap-2 max-w-md py-4 text-center">
          <div className="card bg-base-100 w-28 h-fit shadow-md">
            <figure className="px-6 pt-0">
              <img src={book} alt="book" />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <h2>STATE BECE</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-28 h-fit shadow-md">
            <figure className="px-6 pt-0">
              <img src={book} alt="book" />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <h2>NECO BECE</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-28 h-fit shadow-md">
            <figure className="px-6 pt-0">
              <img src={book} alt="book" />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <h2>NECO BECE</h2>
            </div>
          </div>
          <div className="card bg-base-100 w-28 h-fit shadow-md">
            <figure className="px-6 pt-0">
              <img src={book} alt="book" />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <h2>STATE AGENT</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-md">
        <h1 className="font-bold">Current Order</h1>
        <div className="py-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-x-2">
              <input
                placeholder="Search Customer"
                list="select"
                name="select"
                className="input input-bordered w-full max-w-xs"
              />
              <datalist id="select">
                <option>Olawumi Agent</option>
                <option>Mr Olajide</option>
                <option>Wonsebolatan bks</option>
              </datalist>
              <button
                className="btn btn-accent"
                onClick={() => {
                  const modal = document.getElementById('add_customer') as HTMLDialogElement
                  modal.showModal()
                }}
              >
                +
              </button>
              <CustomerModal />
            </div>

            <div className="mt-6 max-h-80 overflow-x-auto">
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
                  <tr>
                    <td>Bece Neco</td>
                    <td>
                      <input
                        className="input input-bordered input-accent h-8 w-16"
                        type="number"
                        placeholder="0"
                      />
                    </td>
                    <td>#40,000</td>
                    <td>
                      <button className="btn text-red-600 btn-square btn-xs">X</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bece Neco</td>
                    <td>
                      <input
                        className="input input-bordered input-accent h-8 w-16"
                        type="number"
                        placeholder="0"
                      />
                    </td>
                    <td>#40,000</td>
                    <td>
                      <button className="btn text-red-600 btn-square btn-xs">X</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bece Neco</td>
                    <td>
                      <input
                        className="input input-bordered input-accent h-8 w-16"
                        type="number"
                        placeholder="0"
                      />
                    </td>
                    <td>#40,000</td>
                    <td>
                      <button className="btn text-red-600 btn-square btn-xs">X</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bece Neco</td>
                    <td>
                      <input
                        className="input input-bordered input-accent h-8 w-16"
                        type="number"
                        placeholder="0"
                      />
                    </td>
                    <td>#40,000</td>
                    <td>
                      <button className="btn text-red-600 btn-square btn-xs">X</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bece Neco</td>
                    <td>
                      <input
                        className="input input-bordered input-accent h-8 w-16"
                        type="number"
                        placeholder="0"
                      />
                    </td>
                    <td>#40,000</td>
                    <td>
                      <button className="btn text-red-600 btn-square btn-xs">X</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Total</td>
                    <td>
                      <input
                        className="input input-bordered input-accent h-8 w-32"
                        type="number"
                        placeholder="Amount paid"
                      />
                    </td>
                    <td className="font-bold">#150,000</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Due</td>
                    <td></td>
                    <td className="text-red-500">#10,0000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col pt-4 gap-y-2">
              <button className="btn btn-accent w-3/6">Complete Order</button>
              <button className="btn btn-accent btn-outline w-3/6">Clear Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
