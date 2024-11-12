import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  // State to track the sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800 backdrop-blur-sm" />
      </div>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}
      >
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
