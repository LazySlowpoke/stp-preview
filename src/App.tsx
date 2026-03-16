import LandingPage from "../src/pages/LandingPage"
import DashboardPage from "./pages/DashboardPage"
import GalleryPage from "../src/pages/GalleryPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path='/dashboard' element={<DashboardPage/>} />
    <Route path="/gallery/:folderName" element={<GalleryPage/>} />
  </Routes>;
}

export default App;
