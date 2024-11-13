import { useState } from "react";
import { FaSearch, FaPlus ,FaEdit,FaTrash} from "react-icons/fa";

const userData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
    { id: 6, name: "David Miller", email: "david@example.com", role: "Customer", status: "Inactive" },
    { id: 7, name: "Sarah Connor", email: "sarah@example.com", role: "Admin", status: "Active" },
    { id: 8, name: "Kyle Reese", email: "kyle@example.com", role: "Customer", status: "Active" },
    { id: 9, name: "Ellen Ripley", email: "ellen@example.com", role: "Moderator", status: "Active" },
    { id: 10, name: "Peter Parker", email: "peter@example.com", role: "Customer", status: "Active" },
    { id: 7, name: "Sarah Connor", email: "sarah@example.com", role: "Admin", status: "Active" },
    { id: 8, name: "Kyle Reese", email: "kyle@example.com", role: "Customer", status: "Active" },
    { id: 9, name: "Ellen Ripley", email: "ellen@example.com", role: "Moderator", status: "Active" },
    { id: 10, name: "Peter Parker", email: "peter@example.com", role: "Customer", status: "Active" },
];

const UserTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(userData);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const handleAddProduct = () => {
		alert("Add Product button clicked!");
	};
    // Handle search
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = userData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
        setCurrentPage(1); // Reset to first page on new search
    };

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    // Handle page change
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className='bg-gray-800 bg-opacity-50 mb-8 backdrop-blur-md shadow-xl rounded-xl p-5 '>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
                <div className='flex items-center space-x-2'>
                    <button
                        onClick={handleAddProduct}
                        className='flex items-center gap-1 mr-2 bg-blue-800 hover:bg-blue-700 text-gray-300 px-3 py-2 rounded-lg'
                    >
                        <FaPlus />
                    </button>
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='Search users...'
                            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={searchTerm}
                            onChange={handleSearch}
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
                                Email
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Role
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Status
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-700'>
                        {currentUsers.map((user) => (
                            <tr key={user.id}>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center'>
                                        <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className='ml-4'>
                                            <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-300'>{user.email}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                                        {user.role}
                                    </span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${user.status === "Active"
                                            ? "bg-green-800 text-green-100"
                                            : "bg-red-800 text-red-100"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
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
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className='px-4 py-2 bg-blue-900 text-gray-200 rounded hover:bg-blue-700 disabled:bg-gray-500'
                >
                    Previous
                </button>
                <span className='text-gray-400'>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 bg-blue-900 text-gray-200 rounded hover:bg-blue-700 disabled:bg-gray-500'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserTable;

