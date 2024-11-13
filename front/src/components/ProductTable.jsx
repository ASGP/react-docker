import { FaEdit, FaSearch, FaTrash, FaPlus } from "react-icons/fa";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
	// Additional products for testing pagination
	{ id: 6, name: "Laptop", category: "Electronics", price: 999.99, stock: 34, sales: 200 },
	{ id: 7, name: "Gaming Mouse", category: "Accessories", price: 49.99, stock: 150, sales: 500 },
	{ id: 8, name: "Office Chair", category: "Furniture", price: 150.0, stock: 50, sales: 400 },
	{ id: 9, name: "Smartphone", category: "Electronics", price: 799.99, stock: 25, sales: 800 },
	{ id: 10, name: "Tablet", category: "Electronics", price: 399.99, stock: 75, sales: 300 },
];

const ProductTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 5; // Number of products per page

	// Filter Products
	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) =>
				product.name.toLowerCase().includes(term) ||
				product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
		setCurrentPage(1); // Reset to the first page on search
	};

	// Handler for Add Product Button
	const handleAddProduct = () => {
		alert("Add Product button clicked!");
	};

	// Pagination Calculations
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const handlePrevPage = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	return (
		<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-white'>Product List</h2>
				<div className='flex items-center gap-4'>
					{/* Add Product Button with Plus Icon */}
					<button
						onClick={handleAddProduct}
						className='flex items-center gap-1 bg-blue-800 hover:bg-blue-700 text-gray-300 px-3 py-2 rounded-lg'
					>
						<FaPlus />
					</button>

					{/* Search Input */}
					<div className='relative'>
						<input
							type='text'
							placeholder='Search products...'
							className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={handleSearch}
							value={searchTerm}
						/>
						<FaSearch className='absolute left-3 top-3 text-gray-400' size={16} />
					</div>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{currentProducts.map((product) => (
							<tr key={product.id}>
								<td className='px-6 py-4 text-sm font-medium text-gray-100'>
									{product.name}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300'>
									{product.category}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300'>
									${product.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300'>
									{product.stock}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300'>
									{product.sales}
								</td>
								<td className='px-6 py-4 text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<FaEdit size={16} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<FaTrash size={16} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination Controls */}
			<div className='flex justify-between items-center mt-4'>
				<button
					onClick={handlePrevPage}
					className='px-4 py-2 bg-blue-900 text-gray-200 rounded hover:bg-blue-700 disabled:bg-gray-500'
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<span className='text-gray-300'>
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={handleNextPage}
					className='px-4 py-2 bg-blue-900 text-gray-200 rounded hover:bg-blue-700 disabled:bg-gray-500'
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProductTable;
