import { useState } from "react";

import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import MainBoard from "./components/Dashboard/Mainboard";
import Order from "./components/Order";
import Products from "./Components/Products";
import Profile from "./components/Profile";
import SalesReport from "./Components/SalesReport";
import Sidebar from "./components/SideBar";
import Errors from "./Components/Error/Error";

import "./App.css"; // Assuming you have a CSS file for styles
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary1 md:p-5 md:mx-19 my-5">
      <div className="container bg-primary1 flex mx-auto min-h-screen ">
        <div
          className={`absolute top-0 transition-all duration-200 ${
            isOpen ? "left-[0%]" : "left-[-100%]"
          } md:static`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <Routes>
          <Route path="/" element={<MainBoard toggleSidebar={toggleSidebar} />}>
            <Route path="/" index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Products />} />
            <Route path="sales" element={<SalesReport />} />
          </Route>
          <Route path="*" element={<Errors />}
            
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
