import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
function App() {
  return (
   <div className="min-w-screen min-h-screen bg-richblack-900">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </div>
  );
}

export default App;