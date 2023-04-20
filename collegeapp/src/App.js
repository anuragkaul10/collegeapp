import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddRecipes from "./components/AddRecipes";

const App = () => {
  let user = localStorage.getItem("user");
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />

          {user ? (
            <Route path="/addrecipes" element={<AddRecipes />} />
          ) : (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
