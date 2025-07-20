
import Navbar from '../shared/navbar'
import Footer from '../shared/footer'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout