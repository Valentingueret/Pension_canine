import Contact from "@components/Contact";
import APropos from "@components/APropos";
import Pensions from "@components/Pensions/Pensions";
import Prestations from "@components/Prestations/Prestations";
import NavBar from "@components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a-propos-de-moi" element={<APropos />} />
        <Route path="/pensions" element={<Pensions />} />
        <Route path="/prestations" element={<Prestations />} />
      </Routes>
    </div>
  );
}

export default App;
