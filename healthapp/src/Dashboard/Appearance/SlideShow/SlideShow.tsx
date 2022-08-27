import React from 'react';
import './SlideShow.css';
import '../../../App.css';
import BannerRow from './BannerRow';
import { useNavigate } from 'react-router-dom';

const SlideShow = () => {

    const navigate = useNavigate();

    const banners = [
        { _id: 1, title: 'banner 1', secondaryTitle: 'secondary title secondary title', bannerImg: 'https://i.ibb.co/Z2GqcJr/first-Icon-3.png', description: 'description description description description description description description description description description description description description description' },
        { _id: 2, title: 'banner 2', secondaryTitle: 'secondary title secondary title', bannerImg: 'https://i.ibb.co/W6W8k8X/Free-Sample.png', description: 'description description description description description description description description description description description description description description' },
        { _id: 3, title: 'banner 3', secondaryTitle: 'secondary title secondary title', bannerImg: 'https://i.ibb.co/hVpTCty/slide1.png', description: 'description description description description description description description description description description description description description description' },
        { _id: 4, title: 'banner 4', secondaryTitle: 'secondary title secondary title', bannerImg: 'https://i.ibb.co/Z2GqcJr/first-Icon-3.png', description: 'description description description description description description description description description description description description description description' },
        { _id: 5, title: 'banner 5', secondaryTitle: 'secondary title secondary title', bannerImg: 'https://i.ibb.co/W6W8k8X/Free-Sample.png', description: 'description description description description description description description description description description description description description description' },
    ]


    return (
        <div className='slide-show'>
            {/* <AddPackage /> */}
            <p className='btn-container'>
                <button onClick={() => navigate('/dashboard/addBanner')} className='add-btn'>+ Add Banner</button>
            </p>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Banner</th>
                            <th>Title</th>
                            <th>Secondary Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            banners && banners.map(banner => <BannerRow banner={banner} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SlideShow;