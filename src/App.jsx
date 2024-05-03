import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Rewards from "./components/rewards/Rewards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LogPage from "./components/log/LogPage";
import SingUp from "./components/log/SingUp";
import Login from "./components/log/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="accaunt/*" element={<LogPage />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
