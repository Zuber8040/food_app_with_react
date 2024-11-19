import { CARD_LOGO_URL } from "../utiles/constant";

const ResturantCardComponent = (props) => {
    // console.log(props);
    const { resData } = props;

    return (
        <div className="res_card" >

            <img className="res_logo" src={CARD_LOGO_URL + resData.card.cloudinaryImageId
            } />
            <h3>{resData.card.name}</h3>
            <h4>{resData.card.cuisines}</h4>
            <h4>{resData.card.avgRating}</h4>
            <h4>{resData.card.deliveryTime}</h4>
            <h4>{resData.card.costForTwo}</h4>
        </div>
    )
}

export default ResturantCardComponent;