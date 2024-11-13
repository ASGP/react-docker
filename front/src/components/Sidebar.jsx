import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUsers, FaShoppingBag, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { FiTrendingUp } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{ name: "Overview", icon: <GrOverview size={20} />, href: "/" },
	{ name: "Products", icon: <FaShoppingBag size={20} />, href: "/products" },
	{ name: "Users", icon: <FaUsers size={20} />, href: "/users" },
	{ name: "Sales", icon: <FaDollarSign size={20} />, href: "/sales" },
	{ name: "Orders", icon: <FaShoppingCart size={20} />, href: "/orders" },
	{ name: "Analytics", icon: <FiTrendingUp size={20} />, href: "/analytics" },
	{ name: "Settings", icon: <MdSettings size={20} />, href: "/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div
			className={`relative z-10 transition-all duration-300 flex-shrink-0 ${
				isSidebarOpen ? "w-60" : "w-20"
			}`}
		>
			<div className='h-full bg-gray-800 p-4 flex flex-col border-r border-gray-700'>
				{/* Toggle Button */}
				<button
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 ml-1 rounded-md hover:bg-gray-500 max-w-fit'
				>
					<AiOutlineMenu size={24} />
				</button>

				{/* Navigation Links */}
				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<div
								className='flex items-center p-4 text-m font-medium rounded-lg hover:bg-gray-700 mb-2'
							>
								{/* Icon */}
								<div className='min-w-[20px]'>{item.icon}</div>
								{/* Name */}
								{isSidebarOpen && (
									<span className='ml-4 whitespace-nowrap'>{item.name}</span>
								)}
							</div>
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
