import "./App.css";
import Detalhes from "./Components/Pages/Detalhes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detalhes" element={<Detalhes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
