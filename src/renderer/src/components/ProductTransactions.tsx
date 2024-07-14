const ProductTransactions = (): JSX.Element => {
  return (
    <div className=" pl-16 h-screen">
      <div className="pb-4 pt-1">
        <h1 className="text-2xl">Transactions</h1>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductTransactions
