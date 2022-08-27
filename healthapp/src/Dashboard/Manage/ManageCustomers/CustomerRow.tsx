import React from 'react';
import '../../../App.css';

const CustomerRow: React.FC<any> = ({ customer }) => {
    const { _id, name, email, bookings, address, reports } = customer;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    bookings.map((booking: string[]) => <span
                        style={{ display: 'block', border: '1px solid black' }}>
                        {booking}
                    </span>)
                }
            </td>
            <td>{address}</td>
            <td>{reports}</td>
            <td>
                <button className='delete-btn'>Delete</button>
            </td>
        </tr>
    );
};

export default CustomerRow;