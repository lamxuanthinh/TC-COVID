import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Account01 from "./components/Account01";
import Account02 from "./components/Account02";
import HomeAccount from "./components/HomeAccount";
import Loader from "./components/Loader";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homeAccount" element={<HomeAccount />} />
        <Route path="/1" element={<Loader />} />
        <Route path="/01" element={<Account01/>} />
        <Route path="/02" element={<Account02/>} />
      </Routes>
    </div>
  );
}

export default App;
