import { Home, AboutUs, ProjectsPage, Contact } from './pages';

import { Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
