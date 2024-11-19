import ResturantCardComponent from "./ResturantCard";
import resList from '../utiles/mockData'
import { useState } from "react";
const Body = () => {
    const [restrauntList, setrestrauntList] = useState(resList);
    return (
        <div className="body">
            <button className="btn" onClick={() => {
                const cusinesFilter = restrauntList.filter((res) => res.card.cuisines.includes("Beverages"));
                setrestrauntList(cusinesFilter)
            }} >Cuines</button>
            <div className="res-container">
                {/* Restruacnt Card */}
                {
                    restrauntList.map((res) => (
                        <ResturantCardComponent key={res.card.id} resData={res} />
                    ))
                }

            </div>
        </div >
    )
}
export default Body;