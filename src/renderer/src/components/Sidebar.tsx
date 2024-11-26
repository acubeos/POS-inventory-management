import logo from '../assets/image/logo.png'
import home from '../assets/image/home.png'
import order from '../assets/image/order.png'
import history from '../assets/image/history.png'
import customers from '../assets/image/customers.png'
import inventory from '../assets/image/inventory.png'
import sales from '../assets/image/sales.png'
import login from '../assets/image/login.png'
import logoutImg from '../assets/image/logout.png'
import { Link, NavLink } from 'react-router-dom'
import { apiService } from '@renderer/services/apiService'
const Sidebar = (): JSX.Element => {
  return (
    <aside className="w-16 bg-[#003849] h-screen">
      <img src={logo} alt="logo" className="mb-12" />
      <ul className="menu p-0">
        <li>
          <NavLink to="/" className="tooltip tooltip-right rounded-none z-50" data-tip="Home">
            <img src={home} alt="home" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" className="tooltip tooltip-right rounded-none z-50" data-tip="Order">
            <img src={order} alt="order" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customers"
            className="tooltip tooltip-right rounded-none z-50"
            data-tip="Customers"
          >
            <img src={customers} alt="customers" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/outstanding"
            className="tooltip tooltip-right rounded-none z-50"
            data-tip="Outstanding"
          >
            <img src={history} alt="Outstanding" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales" className="tooltip tooltip-right rounded-none z-50" data-tip="Sales">
            <img src={sales} alt="sales" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className="tooltip tooltip-right rounded-none z-50"
            data-tip="Inventory"
          >
            <img src={inventory} alt="inventory" />
          </NavLink>
        </li>

        {/* authorization */}
        <li className="mt-24">
          <Link to="/auth" className="tooltip tooltip-right rounded-none z-50" data-tip="Logout" onClick={() => apiService.logout() }>
            <img src={logoutImg} alt="logout" />
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
