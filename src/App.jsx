// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Succes";
import Eror from "./pages/Eror";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Eror />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
