import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Error from "./pages/pageNotFound";
import Navbars from "./pages/navBar";
import Contact from "./pages/contact";
import Company from "./pages/company";
import Career from "./pages/career";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/*" element={<Error />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="company" element={<Company />}>
              <Route path="career" element={<Career />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
