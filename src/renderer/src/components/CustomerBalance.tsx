import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'

const CustomerBalance = (): JSX.Element => {
  return (
    <div className=" pl-16 h-screen">
      <div className="pb-4 pt-1">
        <h1 className="text-2xl">Dues</h1>
      </div>
      <hr></hr>
      <table className="table table-zebra">
        {/* head */}
        <thead className="bg-accent">
          <tr>
            <th>Last Updated</th>
            <th>Customer</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>27,July 2024</th>
            <td>Aweni</td>
            <td>#40,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Awero bkstore</td>
            <td>#80,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
          </tr>
        </tbody>
      </table>
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

export default CustomerBalance
