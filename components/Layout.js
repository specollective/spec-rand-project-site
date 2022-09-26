import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'
import Footer from '../components/Footer'
function Layout({ children }) {
  return (
    <>
      <MobileNav />
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout