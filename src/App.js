import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Moviesinfo from "./Pages/Moviesinfo";


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path=':Title'  element={<Movies />}></Route>
            <Route path=':Title/:imdbID' element={<Moviesinfo />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
