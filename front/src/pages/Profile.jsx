import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaCamera } from 'react-icons/fa';

const Profile = () => {
    const [editing, setEditing] = useState({ name: false, email: false, phone: false });
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
    });
    const [selectedOrder, setSelectedOrder] = useState('processing');

    // Hardcoded order data
    const ordersData = {
        processing: [
            { id: 1, item: 'Gaming Laptop', quantity: 1, date: '2024-11-10' },
        ],
        shipped: [
            { id: 2, item: 'Wireless Mouse', quantity: 2, date: '2024-11-09' },
        ],
        delivered: [
            { id: 3, item: 'Mechanical Keyboard', quantity: 1, date: '2024-11-08' },
        ],
        canceled: [
            { id: 4, item: 'Graphics Card', quantity: 1, date: '2024-11-07' },
        ],
    };

    // Hardcoded messages
    const messages = [
        { id: 1, content: 'Your order for Gaming Laptop is being processed.' },
        { id: 2, content: 'The Wireless Mouse has been shipped.' },
        { id: 3, content: 'Mechanical Keyboard delivered successfully.' },
        { id: 4, content: 'Your order for Graphics Card was canceled.' },
    ];

    // Toggle input edit mode
    const handleEditToggle = (field) => {
        setEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle order status selection
    const handleOrderChange = (status) => {
        setSelectedOrder(status);
    };

    return (
        <div className='flex-auto overflow-auto relative'>
            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                {/* Profile Picture Section */}
                <div className='flex flex-col items-center'>
                    <div className='relative w-32 h-32'>
                        <img
                            src='https://via.placeholder.com/150'
                            alt='Profile'
                            className='w-full h-full rounded-full object-cover'
                        />
                        {/* Change and Delete Icons */}
                        <button className='absolute bottom-0 right-0 bg-white p-1 rounded-full'>
                            <FaCamera className='text-blue-500' />
                        </button>
                        <button className='absolute top-0 right-0 bg-white p-1 rounded-full'>
                            <FaTrashAlt className='text-red-500' />
                        </button>
                    </div>
                </div>

                {/* User Info Section */}
                <div className='mt-6'>
                    {['name', 'email', 'phone'].map((field) => (
                        <div className='flex items-center justify-between mb-4' key={field}>
                            {editing[field] ? (
                                <input
                                    type='text'
                                    name={field}
                                    value={profileData[field]}
                                    onChange={handleInputChange}
                                    className='bg-gray-200 p-2 rounded w-2/3 text-gray-800'
                                />
                            ) : (
                                <p className='w-2/3'>
                                    <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {profileData[field]}
                                </p>
                            )}
                            <button onClick={() => handleEditToggle(field)}>
                                <FaEdit className='text-blue-500 cursor-pointer' />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Status Section */}
                <div className='mt-6'>
                    <h2 className='text-lg font-bold mb-4'>Order Status</h2>
                    <div className='flex justify-between'>
                        {['processing', 'shipped', 'delivered', 'canceled'].map((status) => (
                            <button
                                key={status}
                                className={`px-4 py-2 rounded-full mx-1 text-sm ${
                                    selectedOrder === status
                                        ? 'bg-black text-white'
                                        : 'bg-blue-900 text-gray-100'
                                }`}
                                onClick={() => handleOrderChange(status)}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)} Orders
                            </button>
                        ))}
                    </div>

                    {/* Display Orders */}
                    <div className='mt-4 rounded-lg'>
                        <h3 className='text-md font-semibold mb-2 capitalize'>
                            {selectedOrder} Orders
                        </h3>
                        {ordersData[selectedOrder].length === 0 ? (
                            <p>No orders available.</p>
                        ) : (
                            <ul className='bg-gray-800 p-4 rounded-lg'>
                                {ordersData[selectedOrder].map((order) => (
                                    <li key={order.id} className='mb-2'>
                                        {order.item} - Qty: {order.quantity} (Ordered on: {order.date})
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Messages Section */}
                <div className='mt-6'>
                    <h2 className='text-lg font-bold mb-4'>Messages</h2>
                    <div className='bg-gray-800 p-4 rounded-lg'>
                        {messages.length === 0 ? (
                            <p>No messages available.</p>
                        ) : (
                            <ul>
                                {messages.map((message) => (
                                    <li key={message.id} className='mb-2'>
                                        {message.content}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
