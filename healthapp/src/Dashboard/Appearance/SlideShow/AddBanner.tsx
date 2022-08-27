import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink';
import FormHeading from '../../../components/FormHeading';
import './AddBanner.css';

const AddBanner = () => {
    const [imgName, setImgName] = useState<string>("");

    const handleAddBanner = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <div className='add_banner'>
            <CustomLink title={'Back to Slide Show'} />
            <FormHeading>Add Banner</FormHeading>
            <form onSubmit={handleAddBanner}>
                <input type="text" name="title" placeholder='Title' />
                <input type="text" name="secondaryTitle" placeholder='Secondary Title' />
                <textarea name="description" placeholder='Description' />
                <label htmlFor="bannerImage" className='banner_input'>
                    {imgName ? "" : "Browse Image..."}
                    <input onChange={e => {
                        e.target.files && setImgName(e.target.files[0].name)
                    }} style={{ display: 'none' }} type="file" name="bannerImage" id='bannerImage' />
                    {imgName && <span className='img_name'>{imgName}</span>}
                </label>
                <button type="submit" className='add_package_btn'>Add Banner</button>
            </form>
        </div>
    );
};

export default AddBanner;