import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Home from "./pages/Home/Home";




function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tv" element={<Home />}/>
    </Routes>  

  </BrowserRouter>
  );
}

export default App;
