import left from '../assets/icons/icon-left.png'
import right from '../assets/icons/icon-right.png'

const StockHistory = (): JSX.Element => {
  return (
    <div className=" ml-16 h-screen w-screen">
      <div className="pb-4 pt-1 pl-2">
        <h1 className="text-2xl font-semibold">Stock History</h1>
      </div>
      <hr></hr>
      <div className="max-h-screen">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-accent">
            <tr>
              <th>Product</th>
              <th>Transaction Type</th>
              <th>Quantity</th>
              <th>Transaction Date</th>
              <th>Transaction Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>Bece State texts</th>
              <td>Stock</td>
              <td>4,000</td>
              <td>27,July 2024</td>
              <td>11:30:00</td>
            </tr>
            <tr>
              <th>Bece State Agent</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:35:00</td>
            </tr>
            <tr>
              <th>Neco Agent texts</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:40:00</td>
            </tr>
            <tr>
              <th>Bece State Agent</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:35:00</td>
            </tr>
            <tr>
              <th>Neco Agent texts</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:40:00</td>
            </tr>
            <tr>
              <th>Bece State Agent</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:35:00</td>
            </tr>
            <tr>
              <th>Neco Agent texts</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:40:00</td>
            </tr>
            <tr>
              <th>Bece State Agent</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:35:00</td>
            </tr>
            <tr>
              <th>Neco Agent texts</th>
              <td>Stock</td>
              <td>2,000</td>
              <td>27,July 2024</td>
              <td>11:40:00</td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default StockHistory
