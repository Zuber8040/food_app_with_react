import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_API } from '../utiles/constant';
import useRestrauntMenu from '../utiles/useRestrauntMenu';

const RestrauantMenu = () => {


    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId);
    if (resInfo === null) return (<Shimmer />);


    const { cuisines, id
        , name,
        costForTwoMessage,
        cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info

    // console.log()

    const { itemCards } = resInfo?.cards[4]?.
        groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)

    return (
        <div className='menu'>
            <h1 className=' spaceAround nameofRes'>{name}</h1>
            <h2 className=' spaceAround cusines'>{cuisines.join(',')} </h2>
            <h2 className='spaceAround' >{costForTwoMessage}</h2>
            <h3 className=' spaceAround'>Menu</h3>
            <ul className='spaceAround'>
                {itemCards.map(item => <li id={item.card.info.id}> {item.card.info.name}  -  {'Rs'}{item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>)}
            </ul>
        </div>
    )

}

export default RestrauantMenu;