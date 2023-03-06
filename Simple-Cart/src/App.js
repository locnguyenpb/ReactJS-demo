import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Register from "./component/Register";
import Login from "./component/Login";
import { createContext, useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import StripeContainer from "./component/StripeContainer";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/cart" element={<StripeContainer />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
