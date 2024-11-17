import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import Dashboard from '@renderer/components/Dashboard'
import Invoice from '@renderer/components/Invoice'
import OrderPage from '@renderer/components/OrderPage'
import CustomerContact from '@renderer/components/CustomerContact'
import ProductList from '@renderer/components/Inventory'
import SalesHistory from '@renderer/components/SalesHistory'
import Outstanding from '@renderer/components/Outstanding'
import Inventory from '@renderer/components/Inventory'
import StockHistory from '@renderer/components/StockHistory'
import AuthPage from '@renderer/components/AuthPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'invoice', element: <Invoice /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'customers', element: <CustomerContact /> },
      { path: 'products', element: <ProductList /> },
      { path: 'sales', element: <SalesHistory /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'outstanding', element: <Outstanding /> },
      { path: 'stockHistory', element: <StockHistory /> },
      { path: 'auth', element: <AuthPage /> }
    ]
  }
])

export default router
