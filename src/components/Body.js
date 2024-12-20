import ResturantCardComponent, { withPromotedLable } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";

const Body = () => {
    const [restrauntList, setrestrauntList] = useState([]);
    const [filterestrauant, setFilterestrauant] = useState([]);
    // const [data, setData] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setrestrauntList(jsonData?.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.restaurants)
        setFilterestrauant(jsonData?.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.restaurants)
    }
    const PromotedLable = withPromotedLable(ResturantCardComponent);

    const onelineStatus = useOnlineStatus();
    if (onelineStatus === false)
        return <h1>Looks like you're offline || Please check your internet check</h1>

    return restrauntList.length === 0 ? <Shimmer /> : (
        <div className="body"   >
            <div className="flex">
                <div className="search p-4 m-4 ">
                    <input type="text" className="border border-solid border-black " value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="btn bg-green-100 m-4 px-4 py-2  rounded-lg" onClick={() => {
                        const searchedRestruant = restrauntList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterestrauant(searchedRestruant)
                    }}>Search</button>
                </div>
                <div className="search p-4 m-4 flex items-center ">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const cusinesFilter = restrauntList.filter((res) => res.info.cuisines.includes("Beverages"));
                        // cusinesFilter.length === 6 ? setrestrauntList(cusinesFilter) : setrestrauntList(restrauntList)
                        setrestrauntList(cusinesFilter)
                    }} >Cuines</button>
                </div>

            </div>
            <div className="res-container flex flex-wrap" >
                {/* Restruacnt Card */}
                {
                    filterestrauant.map((res) => (
                        <Link to={"/restraunt/" + res.info.id} key={res.info.id}>

                            {/* If the restruant is promoted above below 4.5 rating will be tagrte as promoted label */}

                            {
                                res.info.avgRating <= 4.5 ? (<PromotedLable resData={res} />) : (<ResturantCardComponent resData={res} />)
                            }
                        </Link>

                    ))

                }

            </div>
        </div >
    )
}
export default Body;