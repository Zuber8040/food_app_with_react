import { CARD_LOGO_URL } from "../utiles/constant";

const ResturantCardComponent = (props) => {
    // console.log("Proopss", props);
    const { resData } = props;

    // console.log(resData.info)
    return (
        <div className="res_card  m-4 p-4 w-[250px] rounded  bg-gray-200 hover:bg-gray-900  hover:text-white  "  >
            <img className="rounded-lg w-full h-40 object-cover" src={CARD_LOGO_URL + resData.info.cloudinaryImageId
            } />
            <h3 className="font-bold py-4" >{resData.info.name}</h3>
            <h4>{resData.info.cuisines}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.deliveryTime}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}

console.log()

export const withPromotedLable = (ResturantCardComponent) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <ResturantCardComponent {...props} />
            </div>
        )
    }

}

export default ResturantCardComponent;