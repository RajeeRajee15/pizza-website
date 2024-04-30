import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import Fooder from './components/Fooder';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    
    <>
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Fooder/>
   
   </BrowserRouter>
    </>
  );
}

export default App;
