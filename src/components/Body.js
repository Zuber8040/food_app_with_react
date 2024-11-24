import ResturantCardComponent from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
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

    return restrauntList.length === 0 ? <Shimmer /> : (
        <div className="body"   >
            <div className="filter">
                <div className="search">
                    <input type="text" className="search_box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="btn" onClick={() => {
                        const searchedRestruant = restrauntList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterestrauant(searchedRestruant)
                    }}>Search</button>
                </div>
                <button className="btn" onClick={() => {
                    const cusinesFilter = restrauntList.filter((res) => res.info.cuisines.includes("Beverages"));
                    // cusinesFilter.length === 6 ? setrestrauntList(cusinesFilter) : setrestrauntList(restrauntList)
                    setrestrauntList(cusinesFilter)
                }} >Cuines</button>
            </div>
            <div className="res-container">
                {/* Restruacnt Card */}
                {
                    filterestrauant.map((res) => (
                        <ResturantCardComponent key={res.info.id} resData={res} />
                    ))
                }

            </div>
        </div >
    )
}
export default Body;