const CustomerModal = (): JSX.Element => {
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
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
                />
              </div>
              <button className="my-4 btn btn-accent w-full max-w-xs">Save Customer</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default CustomerModal
