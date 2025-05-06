import { Route,Routes,useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
import Footer from "./components/common/Footer";
function App() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/signup"];
  return (
   <div className="min-w-screen min-h-screen bg-richblack-900">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/update-password/:id" element={<UpdatePassword/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    {/* To hide the Footer only on the login and signup pages */}
    {!hideFooterRoutes.includes(location.pathname) && <Footer />}
   </div>
  );
}

export default App;