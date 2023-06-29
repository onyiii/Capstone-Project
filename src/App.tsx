import Home from "@/scenes/home";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/login";
import Signup from "./scenes/signup";
import LoginPage from "./scenes/loginpage";
import Register from "./scenes/register";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />}>
          <Route path="login-page" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
