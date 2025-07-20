import { Routes, Route } from 'react-router-dom'
import Home from './views/index'
import Blogs from './views/blogs'
import About from './views/about'
import Contact from './views/contact'
import Layout from './components/layout'


function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
