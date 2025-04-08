import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
function App() {
  return (
   <div className="min-w-screen min-h-screen bg-richblack-900">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
   </div>
  );
}

export default App;