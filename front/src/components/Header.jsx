import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
	// Manually set the username for now
	const userName = "John Doe";

	return (
		<header className='bg-gray-700 bg-opacity-20 backdrop-blur-md border-b border-blue-900'>
			<div className='py-4 px-5 flex justify-between items-center'>
				{/* Title */}
				<h1 className='text-2xl font-semibold text-white'>{title}</h1>

				{/* User Info */}
				<div className='flex items-center space-x-2'>
					<span className='text-white text-sm font-medium'>{userName}</span>
					<Link to='/profile'>
						<FaUserCircle size={28} className='text-white cursor-pointer' />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
