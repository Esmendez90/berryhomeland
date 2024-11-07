import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navigationbar from './Navigationbar';
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navigationbar/>
      <Routes>
        <Route path="/berryhomeland/home" element={<Home/>}></Route>
        <Route path="/berryhomeland/about" element={<About/>}></Route>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
