import Home from "@/scenes/home";
import { Routes, Route } from "react-router-dom";
import Auth from "./scenes/Auth";

import LoginPage from "./scenes/loginpage";
import Register from "./scenes/register";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="auth" element={<Auth />}>
          <Route path="login-page" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
