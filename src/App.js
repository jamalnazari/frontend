import './App.css';
import {BrowserRouter as Router , Routes ,Route,Link } from "react-router-dom"
import { Home } from './Pages/Home';
import UsEf from './practice2.js';
import { Contact } from './Pages/Contact';
import { Nav } from './Pages/Nav.js';

function App() {
  return (
    <div>
         
      <Router>
        <div>jimifx</div>
          <Nav/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UsEf" element={<UsEf/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Not Found;</p>} />

         </Routes>
         <div>this is footer</div>
      </Router>
    
    </div>
  );
}

export default App;