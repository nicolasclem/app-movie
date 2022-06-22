import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>  

  </BrowserRouter>
  );
}

export default App;
