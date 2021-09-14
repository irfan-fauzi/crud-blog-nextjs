import { Header, Footer } from '../../components'

const Layout = ({children}) => {
  return (
    <>
    <Header />
      <div className="font-raleway min-h-screen max-w-[1200px] px-1 mx-auto">
        {children}
      </div>
    <Footer/>
    </>
  )
}

export default Layout
