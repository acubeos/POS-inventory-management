import RevenueCharts from './RevenueCharts'
import sale from '../assets/icons/outstanding-icon.png'
import customer from '../assets/icons/customer-icon.png'
import Outstanding from '../assets/icons/sale-icon.png'

const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-slate-100 h-screen ml-16">
      <div className="flex gap-x-2 pt-1">
        <div className="border bg-white rounded-lg p-2 ml-4 ">
          <h2 className="pl-2 font-semibold pb-2">Revenue</h2>
          <RevenueCharts />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Daily Sale</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold">#2,000,000</p>
              <div className="rounded-full overflow-hidden w-6 bg-slate-200">
                <img src={sale} alt="icon1" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Customers</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold">500</p>
              <div className="rounded-full overflow-hidden w-6 bg-slate-200">
                <img src={customer} alt="icon1" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Outstanding</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold">#400,000</p>
              <div className="rounded-full overflow-hidden border w-6 bg-slate-200">
                <img src={Outstanding} alt="icon1" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Product Details</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold">Low stock</p>
              <button className="btn btn-xs badge-secondary">02</button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction history  */}
      <div className="px-4 pt-4 pb-2 font-semibold">Recent Transactions</div>
      <div className="overflow-x-auto h-[250px] border rounded-lg bg-white ml-4 mr-9">
        <table className="table table-sm table-pin-rows">
          <thead className="bg-accent">
            <tr>
              <th>Invoice id</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Total paid</th>
              <th>Outstanding</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
            <tr>
              <td>0002</td>
              <td>Olawumi Bookshop</td>
              <td>27,July 2024</td>
              <td>#180,000</td>
              <td>#10,000</td>
            </tr>
            <tr>
              <td>0003</td>
              <td>Divine Bookshop</td>
              <td>28,July 2024</td>
              <td>#20,000</td>
              <td>#5,000</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Oluwaseyi Bookshop</td>
              <td>27,July 2024</td>
              <td>#80,000</td>
              <td>#0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
