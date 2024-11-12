import React, { useState } from "react";
import { GrOverview } from "react-icons/gr";
import { FaSearch, FaUsers, FaShoppingCart, FaShoppingBag, FaDollarSign } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div
            className={`${isSidebarOpen ? "w-60" : "w-20"
                } transition-all bg-gray-800 h-screen text-white p-4 fixed left-0 top-0 z-10`}
        >
            {/* Toggle button (Menu icon) */}
            <div className="flex justify-between items-center mb-6 ml-2">
                <AiOutlineMenu
                    size={30}
                    onClick={toggleSidebar}
                    className="cursor-pointer rounded p-1 hover:bg-gray-600 hover:text-gray-300 transition-colors"
                />
            </div>

            {/* Sidebar links with icons */}
            <div className="flex flex-col space-y-12">
                <Link to="/" className="flex mt-10 hover:bg-gray-100 hover:text-black transition-colors p-2 rounded">
                    <div className="ml-1">
                        <GrOverview size={25} />
                    </div>
                    <div className={`ml-7 text-xl transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        <span>Overview</span>
                    </div>
                </Link>

                <Link to="/products" className="flex mt-10 hover:bg-gray-100 hover:text-black transition-colors p-2 rounded">
                    <div className=" ml-1">
                        <FaShoppingBag size={25} />
                    </div>
                    <div className={`ml-7 text-xl transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        <span>Products</span>
                    </div>
                </Link>

                <Link to="/search" className="flex items-center mt-10 hover:bg-gray-100 hover:text-black transition-colors p-2 rounded">
                    <div className="ml-1">
                        <FaShoppingCart size={25} />
                    </div>
                    <div className={`ml-7 text-xl transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        <span>Orders</span>
                    </div>
                </Link>

                <Link to="/users" className="flex items-center mt-10 hover:bg-gray-100 hover:text-black transition-colors p-2 rounded">
                    <div className="ml-1">
                        <FaUsers size={25} />
                    </div>
                    <div className={`ml-7 text-xl transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        <span>Users</span>
                    </div>
                </Link>

                <Link to="/settings" className="flex items-center mt-10 hover:bg-gray-100 hover:text-black transition-colors p-2 rounded">
                    <div className="ml-1">
                        <FaDollarSign size={25} />
                    </div>
                    <div className={`ml-7 text-xl transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
                        <span>Sales</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
