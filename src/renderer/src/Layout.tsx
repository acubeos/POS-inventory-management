import logo from '../assets/image/logo.png'

const Layout = (): JSX.Element => {
  return (
    <aside className="w-16 bg-base-200 h-screen">
      <img src={logo} alt="logo" className="p-1" />
      <ul className="menu"></ul>
    </aside>
  )
}

export default Layout
