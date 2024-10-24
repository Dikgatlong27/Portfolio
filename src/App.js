import { Home, AboutUs, ProjectsPage, Contact } from './pages';

import { Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './components';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
