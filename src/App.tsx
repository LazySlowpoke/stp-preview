import LandingPage from "../src/pages/LandingPage"
import Dashboard from "../src/pages/Dashboard"
import GalleryPage from "../src/pages/GalleryPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path="/gallery/:folderName" element={<GalleryPage/>} />
  </Routes>;
}

export default App;
