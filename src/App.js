import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Nav from "./Pages/Nav";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Nav />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path=':id' element={<Movies />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
