import Contact from "@components/Contact";
import APropos from "@components/APropos";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/a-propos-de-moi" element={<APropos />} />
      </Routes>
    </div>
  );
}

export default App;
