import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Tv from "./pages/Tv/Tv";
import Error404 from "./pages/Error404/Error404";




function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tv" element={<Tv />}/>
        <Route path="/movie/:id" element={<MovieDetail />}/>
        <Route path='*'element={<Error404 />}/>
    </Routes>  

  </BrowserRouter>
  );
}

export default App;
