import RevenueCharts from './RevenueCharts'
import { useEffect, useState } from 'react'
import sale from '../assets/icons/outstanding-icon.png'
import customer from '../assets/icons/customer-icon.png'
import Outstanding from '../assets/icons/sale-icon.png'
import { apiService } from '@renderer/services/apiService'
import { formatDate } from '@renderer/helpers/general'

const Dashboard = (): JSX.Element => {
  const emptyDashbordData = {
    customers: 0,
    productInfo: {
      allProducts: 0,
      lowStock: 0,
    },
    salesInfo: {
      dailySales: 0,
      allOutstanding: 0,
    },
    recentTransactions: [],
  };
  const [dashboardData, setDashboardData] = useState<any>(emptyDashbordData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      const response = await apiService.getDashboardData();
      if (response.data) {
        setDashboardData(response.data);
        console.log(response.data);
      }
      setLoading(false);
    };
    fetchDashboardData();
  }, []);
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
              <p className="font-semibold"># {dashboardData.salesInfo.dailySales}</p>
              <div className="rounded-full overflow-hidden w-6 bg-slate-200">
                <img src={sale} alt="icon1" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Customers</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold">{dashboardData.customers}</p>
              <div className="rounded-full overflow-hidden w-6 bg-slate-200">
                <img src={customer} alt="icon1" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Outstanding</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold"># {dashboardData.salesInfo.allOutstanding}</p>
              <div className="rounded-full overflow-hidden border w-6 bg-slate-200">
                <img src={Outstanding} alt="icon1" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border bg-white rounded-lg w-52 h-32 p-3">
            <h2 className="font-bold">Product Details</h2>
            <div className="flex flex-row gap-x-4">
              <p className="font-semibold">Product Count</p>
              <button className="btn btn-xs badge-secondary">{dashboardData.productInfo.allProducts}</button>
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
            {dashboardData.recentTransactions.map((sale): any => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.Customer.name}</td>
                <td>{formatDate(sale.last_updated)}</td>
                <td># {sale.total}</td>
                <td># {sale.outstanding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
