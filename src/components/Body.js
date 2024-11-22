import ResturantCardComponent from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restrauntList, setrestrauntList] = useState([]);
    // const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setrestrauntList(jsonData?.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.restaurants)
    }

    return restrauntList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <button className="btn" onClick={() => {
                const cusinesFilter = restrauntList.filter((res) => res.info.cuisines.includes("Beverages"));
                setrestrauntList(cusinesFilter)
            }} >Cuines</button>
            <div className="res-container">
                {/* Restruacnt Card */}
                {
                    restrauntList.map((res) => (
                        <ResturantCardComponent key={res.id} resData={res} />
                    ))
                }

            </div>
        </div >
    )
}
export default Body;