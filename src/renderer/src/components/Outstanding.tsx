import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'

const Outstanding = (): JSX.Element => {
  return (
    <div className=" ml-16 h-screen w-screen pr-16">
      <div className="flex justify-between pb-2 pt-1 pl-2 px-4">
        <h1 className="text-2xl font-semibold">Outstanding Balance</h1>
        <button className="btn btn-sm btn-outline btn-accent">Print</button>
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
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
          </tr>
          <tr>
            <th>28,July 2024</th>
            <td>Bolu bkstore</td>
            <td>#120,000</td>
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

export default Outstanding
