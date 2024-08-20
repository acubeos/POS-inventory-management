import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const Layout = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <div className="fixed top-0">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
