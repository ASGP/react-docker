import { useState } from "react";
import { FaSearch, FaEye, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const orderData = [
    { id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
    { id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
    { id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
    { id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
    { id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
    { id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
    { id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
    { id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

const OrdersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 7;

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
    };

    const handleAddOrder = () => {
		alert("Add Product button clicked!");
	};
    // Pagination logic
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mt-7">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Order List</h2>
                <div className='flex items-center gap-4'>
					{/* Add Product Button with Plus Icon */}
					<button
						onClick={handleAddOrder}
						className='flex items-center gap-1 bg-blue-800 hover:bg-blue-700 text-gray-300 px-3 py-2 rounded-lg'
					>
						<FaPlus />
					</button>

					{/* Search Input */}
					<div className='relative'>
						<input
							type='text'
							placeholder='Search orders...'
							className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={handleSearch}
							value={searchTerm}
						/>
						<FaSearch className='absolute left-3 top-3 text-gray-400' size={16} />
					</div>
				</div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Order ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Customer
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Total
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide divide-gray-700">
                        {currentOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                    {order.customer}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-regular text-white">
                                    ${order.total.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === "Delivered"
                                                ? "bg-green-800 text-white"
                                                : order.status === "Processing"
                                                    ? "bg-yellow-700 text-white"
                                                    : order.status === "Shipped"
                                                        ? "bg-blue-700 text-white"
                                                        : "bg-red-600 text-white"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{order.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                                        <FaEye size={18} />
                                    </button>
                                    <button className="text-yellow-400 hover:text-yellow-300 mr-2">
                                        <FaEdit size={18} />
                                    </button>
                                    <button className="text-red-400 hover:text-red-300">
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-900 text-gray-200 rounded hover:bg-blue-700 disabled:bg-gray-500"
                    >
                        Previous
                    </button>
                </div>
                <div className="text-gray-100">
                    Page {currentPage} of {Math.ceil(filteredOrders.length / ordersPerPage)}
                </div>
                <div>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(filteredOrders.length / ordersPerPage)}
                        className="px-4 py-2 bg-blue-900 text-gray-200 rounded hover:bg-blue-700 disabled:bg-gray-500"
                    >
                        Next
                    </button>
                </div>
            </div>


        </div>
    );
};

export default OrdersTable;
