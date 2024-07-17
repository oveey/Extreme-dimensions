import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './component/Footer';
import { Aboutus } from './pages/Aboutus';
import { Service } from './pages/Service';
import { Portfolio} from './pages/Portfolio';
import { Architectural } from './pages/Architectural';
import { Engineering } from './pages/Engineering';
import { Remodelling } from './pages/Remodelling';
import { Landscaping } from './pages/Landscaping';
import { Contact } from './pages/Contact';
import Form from './component/form';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about-us' element={<Aboutus/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/architectural' element={<Architectural/>}/>
          <Route path='/engineering' element={<Engineering/>}/>
          <Route path='/remodeling' element={<Remodelling/>}/>
          <Route path='/landscaping' element={<Landscaping/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/form' element={<Form/>}/>



        </Routes>
      </Router>
    
    </>
  );
};

export default App;

