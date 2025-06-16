import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Layout from './components/layout';
import About from './views/about';
import Testimonials from './views/testimonials';
import Faqs from './views/faqs';
import Services from './views/services';



function App() {

  return (
    <>
      <Layout>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/services' element={<Services />} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
