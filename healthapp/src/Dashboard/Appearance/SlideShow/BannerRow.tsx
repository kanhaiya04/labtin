import React from 'react';


const BannerRow: React.FC<any> = ({ banner }) => {
    const { _id, title, secondaryTitle, bannerImg, description } = banner;
    return (
        <tr>
            <td><img src={bannerImg} height="50px" width="80px" alt="" /></td>
            <td>{title}</td>
            <td>{secondaryTitle}</td>
            <td>{description}</td>
            <td><button className='delete-btn'>Delete</button></td>
        </tr>
    );
};

export default BannerRow;