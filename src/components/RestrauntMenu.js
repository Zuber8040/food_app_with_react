import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestrauantMenu = () => {
    const params = useParams();
    console.log(params.resId)
    useEffect(() => {
        const data = {
            'https://www.swiggy.com/city/mumbai/ganga-paradise-by-tunga-m-i-d-c-rest54662?restaurant_id='+param
        }
    }, []);
    return (
        <div className='menu'>
            <h1 className=' spaceAround nameofRes'>Hotel Name</h1>
            <h2 className=' spaceAround cusines'>Cusinesins </h2>
            <h2 className='spaceAround' >Price</h2>
            <h3 className=' spaceAround'>Menu</h3>
            <ul className='spaceAround'>
                <li>Menu with price </li>
                <li>Menu with price </li>
                <li>Menu with price </li>
                <li>Menu with price </li>

            </ul>
        </div>
    )

}

export default RestrauantMenu;