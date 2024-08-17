import logo from '../src/assets/image/logo.png'
import home from '../src/assets/image/home.png'
import order from '../src/assets/image/order.png'
import history from '../src/assets/image/history.png'
import customers from '../src/assets/image/customers.png'
import inventory from '../src/assets/image/inventory.png'
import sales from '../src/assets/image/sales.png'
import login from '../src/assets/image/login.png'
import logout from '../src/assets/image/logout.png'
import { useState } from 'react'

const Layout = (): JSX.Element => {
  const [auth, setAuth] = useState(false)

  return (
    <aside className="w-16 bg-[#003849] h-screen">
      <img src={logo} alt="logo" className="mb-12" />
      <ul className="menu p-0">
        <li>
          <a className="tooltip tooltip-right rounded-none" data-tip="Home">
            <img src={home} alt="home" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right rounded-none" data-tip="Order">
            <img src={order} alt="order" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right rounded-none" data-tip="Customers">
            <img src={customers} alt="customers" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right rounded-none" data-tip="invoice">
            <img src={history} alt="invoice" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right rounded-none" data-tip="Sales">
            <img src={sales} alt="sales" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right rounded-none" data-tip="Inventory">
            <img src={inventory} alt="inventory" />
          </a>
        </li>

        {/* authorization */}
        <li className="mt-24">
          <button
            onClick={() => setAuth(!auth)}
            className="tooltip tooltip-right rounded-none"
            data-tip={auth ? 'Logout' : 'Login'}
          >
            {auth ? <img src={login} alt="login" /> : <img src={logout} alt="logout" />}
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default Layout
