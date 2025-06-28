import { Route, Routes } from "react-router-dom"
import Home from "./views/home"
import About from "./views/about"
import Services from "./views/services"
import Testimonials from "./views/testimonials"
import Fqs from "./views/fqs"
import Layout from "./components/layout"


function App() {

  return (
    <div className="m-0 p-0 box-border">
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/fqs" element={<Fqs />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      </Layout>
    </div>
  )
}

export default App
