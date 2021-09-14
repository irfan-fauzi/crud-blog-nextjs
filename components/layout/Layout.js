import { Header, Footer } from '../../components'

const Layout = ({children}) => {
  return (
    <>
    <Header />
      <div className="font-raleway min-h-screen">
        {children}
      </div>
    <Footer/>
    </>
  )
}

export default Layout
