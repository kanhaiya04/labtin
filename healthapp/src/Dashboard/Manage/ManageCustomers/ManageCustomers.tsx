import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerRow from './CustomerRow';

const ManageCustomers = () => {
    const navigate = useNavigate();
    const customers = [
        { _id: 1, name: 'Customer 1', email: 'user1@gmail.com', bookings: ['booking1', 'booking2'], reports: 'reports reports reports reports reports reports', address: 'address, address, address, address' },
        { _id: 2, name: 'Customer 2', email: 'user1@gmail.com', bookings: ['booking1', 'booking2'], reports: 'reports reports reports reports reports reports', address: 'address, address, address, address' },
        { _id: 3, name: 'Customer 3', email: 'user1@gmail.com', bookings: ['booking1', 'booking2'], reports: 'reports reports reports reports reports reports', address: 'address, address, address, address' },
        { _id: 4, name: 'Customer 4', email: 'user1@gmail.com', bookings: ['booking1', 'booking2'], reports: 'reports reports reports reports reports reports', address: 'address, address, address, address' },
        { _id: 5, name: 'Customer 5', email: 'user1@gmail.com', bookings: ['booking1', 'booking2'], reports: 'reports reports reports reports reports reports', address: 'address, address, address, address' },
    ];
    return (
        <div className='manage-package'>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Bookings</th>
                            <th>Address</th>
                            <th>Reports</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers &&
                            customers.map(customer => <CustomerRow customer={customer} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCustomers;