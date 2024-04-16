import { Route, Routes } from "react-router-dom";
import "./App.css";

import Index from "./pages/Index";
import NotFound from "./Components/NotFound/NotFound";
import Product from "./pages/Product";
import Signup from './pages/Auth/Signup'
import Login from "./pages/Auth/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path "/cart" element={<Product/>}/> */}
      </Routes>
    </>
  );
}

export default App;
