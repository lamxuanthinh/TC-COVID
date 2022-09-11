import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Loader from "./components/Loader";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import VaccinationRegister from "./components/VaccinationRegister";
import DownloadImageScanner from "./components/VaccinationRegister/DownloadImageScanner";
import Home from "./pages";
import Security from "./pages/Security";

function App() {
  const a = false;
  if (a) {
    return <Login />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/1" element={<Loader />} />
        <Route path="/vaccinationRegister" element={<VaccinationRegister />} />
        <Route path="/downloadImageScanner" element={<DownloadImageScanner/>} />
        <Route path="*" element={<Security />} />    
      </Routes>
    </div>
  );
}

export default App;
