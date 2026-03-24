import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import {Toaster} from "react-hot-toast";
import Filter from "./pages/Filter";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category" element={<Category />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;