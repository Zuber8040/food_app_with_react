import ResturantCardComponent from "./ResturantCard";
import resList from '../utiles/mockData'
const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {/* Restruacnt Card */}
                {
                    resList.map((res) => (
                        <ResturantCardComponent key={res.card.id} resData={res} />
                    ))
                }

            </div>
        </div>
    )
}
export default Body;