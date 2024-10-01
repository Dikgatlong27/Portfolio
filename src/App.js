import { Navbar, Footer } from './components';
import { Home, About, Projects, Contact } from './pages';

import { Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
