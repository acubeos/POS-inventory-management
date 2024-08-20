import CustomerModal from './CustomerModal'
import deleteIcon from '../assets/icons/deleteIcon.png'
import editIcon from '../assets/icons/editIcon.png'

const CustomerContact = (): JSX.Element => {
  return (
    <div className="bg-slate-100 ml-16 h-screen w-screen pr-16">
      <div className="pb-4 pt-1 pl-2">
        <h1 className="text-2xl font-semibold">Customer</h1>
        <p className="text-xs text-gray-400">345 Customer</p>
      </div>
      <hr></hr>

      <form onSubmit={(e) => e.preventDefault()}>
        <button
          className="btn btn-accent btn-sm my-4 ml-2"
          onClick={() => {
            const modal = document.getElementById('add_customer') as HTMLDialogElement
            modal.showModal()
          }}
        >
          Add New
        </button>
        <input
          type="text"
          placeholder="search..."
          className="input input-bordered input-sm w-full max-w-xs ml-4"
        />
        <CustomerModal />

        <div className="overflow-x-auto max-h-[420px]">
          <table className="table table-pin-rows">
            {/* head */}
            <thead className="bg-accent">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>4</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>5</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>6</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>7</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>8</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>9</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>10</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>11</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>12</th>
                <td>Cy Ganderton</td>
                <td>08082451012</td>
                <td>Challenge, Ibadan.</td>
                <td>
                  <div className="flex gap-x-2">
                    <button className="btn btn-sm btn-square btn-outline btn-accent">
                      <img src={editIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                    <button className="btn btn-sm btn-square btn-error">
                      <img src={deleteIcon} alt="icon" className="mx-auto w-1/2" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>08082345664</td>
                <td>Bere, Ibadan.</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>09039391022</td>
                <td>Ikorodu, Lagos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  )
}

export default CustomerContact
