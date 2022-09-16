import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Loader from "./components/Loader";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import VaccinationRegister from "./components/VaccinationRegister";
import DownloadImageScanner from "./components/VaccinationRegister/DownloadImageScanner";
import Home from "./pages";
import Security from "./pages/Security";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFKbjT8IPu_iMh9FX9tD_5p6ehgNypD7o",
  authDomain: "tc-covid.firebaseapp.com",
  projectId: "tc-covid",
  storageBucket: "tc-covid.appspot.com",
  messagingSenderId: "341411145095",
  appId: "1:341411145095:web:5c2d6e20b46ad73a43df22",
  measurementId: "G-W7TN18J2KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
