import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'
import DatePickerC from './DatePickerC'

const SalesHistory = (): JSX.Element => {
  return (
    <div className="bg-slate-100 pl-16 h-screen">
      <div className="pb-4 pt-1">
        <h1 className="text-2xl">All Sales</h1>
        <p className="text-xs text-gray-400">200 Transactions</p>
      </div>
      <hr></hr>
      {/* Check if form is necessary */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-row justify-between">
          <div className="my-4 flex flex-nowrap">
            <input
              className="input input-bordered input-accent input-sm w-64 mr-4"
              placeholder="Search..."
            />

            <details className="dropdown">
              <summary className="btn btn-sm btn-accent btn-outline ">Sort by</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[64] w-48 p-2 shadow">
                <li>
                  <a>Date Ascending</a>
                </li>
                <li>
                  <a>Name Ascending</a>
                </li>
              </ul>
            </details>
          </div>
          <div className="mr-6 my-3 h-8 w-60">
            <DatePickerC />
          </div>
        </div>

        <div className="overflow-x-auto max-h-[420px]">
          <table className="table table-sm table-pin-rows">
            {/* head */}
            <thead className="bg-accent">
              <tr>
                <th>Date</th>
                <th>Invoice id</th>
                <th>Customer name</th>
                <th>Total paid</th>
                <th>Outstanding</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0002</td>
                <td>Olawumi Bookshop</td>
                <td>#180,000</td>
                <td>#10,000</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>28,July 2024</td>
                <td>0003</td>
                <td>Divine Bookshop</td>
                <td>#20,000</td>
                <td>#5,000</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>27,July 2024</td>
                <td>0001</td>
                <td>Oluwaseyi Bookshop</td>
                <td>#80,000</td>
                <td>#0</td>
                <td>
                  <a
                    className="link link-accent"
                    onClick={() => {
                      const modal = document.getElementById('add_product') as HTMLDialogElement
                      modal.showModal()
                    }}
                  >
                    Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      <div className="flex flex-row mt-2 ml-2">
        <button className="btn btn-xs btn-ghost btn-square">
          <img src={left} alt="btn" />
        </button>
        <button className="btn btn-xs btn-ghost btn-square">
          <img src={right} alt="btn" />
        </button>
      </div>
    </div>
  )
}

export default SalesHistory
