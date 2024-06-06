import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/imagens" element={<imagens />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
