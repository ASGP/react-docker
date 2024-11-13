import { Route, Routes, useLocation } from "react-router-dom";
import Overview from "./pages/Overview";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar";
import UsersPage from "./pages/UsersPage";
import Sales from "./pages/Sales";
import { useState } from "react";
import Orders from "./pages/Orders";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";

function App() {
  const location = useLocation(); // Get current route

  // Check if current route is the login page
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800 backdrop-blur-sm" />
      </div>

      {/* Conditionally render Sidebar */}
      {!isLoginPage && <Sidebar />}

      {/* Main Content */}
      <div className={`flex-auto overflow-auto ${isLoginPage ? "w-full" : ""}`}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
