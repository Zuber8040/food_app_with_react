import { CARD_LOGO_URL } from "../utiles/constant";

const ResturantCardComponent = (props) => {
    // console.log("Proopss", props);
    const { resData } = props;

    return (
        <div className="res_card" >

            <img className="res_logo" src={CARD_LOGO_URL + resData.info.cloudinaryImageId
            } />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.deliveryTime}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}

export default ResturantCardComponent;