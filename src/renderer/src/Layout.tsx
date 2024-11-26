import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import NotificationBar from './components/NotificationBar';

const Layout = (): JSX.Element => {
  return (
    <>
      <NotificationBar />
      <Sidebar />
      <div className="fixed top-0">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
