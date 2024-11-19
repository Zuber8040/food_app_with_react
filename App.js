import React from "react";
import ReactDOM from "react-dom/client";



const Headers = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                    alt="food logo app"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        "card": {
            "id": "363818",
            "name": "Mani's Cafe",
            "cloudinaryImageId": "607d383d03e670225c633c125d0973b2",
            "locality": "Breach Candy",
            "areaName": "Matunga Sion",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Biryani"
            ],
            "avgRating": 4.6,
            "parentId": "131857",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=21493096~p=2~adgrpid=21493096#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=363818~eid=9a602466-1e6d-4ea0-a805-3255c7c9893d~srvts=1731894093026~collid=80424",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 7.8,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },

        }
    },
    {
        "card": {
            "id": "555803",
            "name": "Ayyappan Pure Veg",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/5/7b5f291b-9c4a-4002-802e-8983b122a5a3_e3db988a-ca94-4871-a6e9-551e57dd67fb.JPG",
            "locality": "Opp Sai Infotech Park",
            "areaName": "Ghatkopar Vikhroli",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "334392",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.4K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
        }
    },
    {

        "card": {
            "id": "64396",
            "name": "Sai Sunder",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/17/abdff1d7-7929-4324-8ec0-341d262d3e5c_e6befd45-b53b-47f5-804d-1bee63eed787.jpg",
            "locality": "Matunga East",
            "areaName": "Matunga",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.5,
            "parentId": "175529",
            "avgRatingString": "4.5",
            "totalRatingsString": "6.8K+",
            "promoted": true,
            "adTrackingId": "cid=21492053~p=3~adgrpid=21492053#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=64396~eid=9cc6b0ba-86a3-4b1f-9b31-9b1db77e96e9~srvts=1731894093026~collid=80424",
            "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 8.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "8.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
        }
    },
    {

        "card": {
            "id": "11952",
            "name": "Maharana Kamath",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a632f22-6eff-4bd0-a8d6-ac521b40437e_6b578918-64d8-4c01-a49d-7403da263736.jpg",
            "locality": "Mumbai CST Area",
            "areaName": "Mumbai CST Area",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Street Food",
                "North Indian",
                "Chinese",
                "Gujarati",
                "South Indian",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "129954",
            "avgRatingString": "4.5",
            "totalRatingsString": "39K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },

        },

    },
    {

        "card": {
            "id": "408891",
            "name": "Sainath Dosa Centre",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/29/81eacb23-d424-4921-9aa8-8ad14f4e2d32_ff584e78-f589-4000-afc8-d44928e5a344.JPG",
            "locality": "Bhandarkar Road",
            "areaName": "Matunga Wadala",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Chinese",
                "South Indian",
                "Snacks"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "175689",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.0K+",
            "promoted": true,
            "adTrackingId": "cid=21492019~p=4~adgrpid=21492019#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=408891~eid=1cb1edb6-41d6-4be3-9513-f9e59a8d90ba~srvts=1731894093026~collid=80424",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 8.1,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "8.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
        },

    },
    {

        "card": {
            "id": "11240",
            "name": "Thambbi",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/28/d8c070a1-31e6-4f67-a2a4-f2201079d410_86a01a3a-e97f-4c70-9cfd-4cd96102e5f0.jpg",
            "locality": "Near Smokin Joes",
            "areaName": "Ghatkopar West",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "South Indian",
                "Snacks",
                "Thalis"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "2527",
            "avgRatingString": "4.4",
            "totalRatingsString": "12K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },

        },
    },
    {

        "card": {
            "id": "57825",
            "name": "Vihara- International By Tunga",
            "cloudinaryImageId": "rhuw9uquktbhqbw7jzmj",
            "locality": "M.I.D.C",
            "areaName": "Andheri East",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Indian",
                "South Indian",
                "Beverages"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "472900",
            "avgRatingString": "4.5",
            "totalRatingsString": "27K+",
            "promoted": true,
            "adTrackingId": "cid=21492370~p=5~adgrpid=21492370#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=57825~eid=b7c0dad7-9785-4e56-b9f4-763e9de4a80e~srvts=1731894093026~collid=80424",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },

        },

    },
    {

        "card": {
            "id": "479493",
            "name": "R S Mani Cafe",
            "cloudinaryImageId": "xafft6p3mjd24jcp8w1c",
            "locality": "Govandi Railway Station",
            "areaName": "GOVANDI MUMBAI, Greater Mumbai Ward-M/ E",
            "costForTwo": "₹149 for two",
            "cuisines": [
                "South Indian",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "253181",
            "avgRatingString": "4.2",
            "totalRatingsString": "249",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
        },
    },
    {

        "card": {
            "id": "637571",
            "name": "Annavel Hotel",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/28/887a3474-2630-43b7-a81f-0957568126d2_2d219d01-e130-4b43-8d2e-90ae0372a5d6.JPG",
            "locality": "Mukund nagar",
            "areaName": "Matunga Wadala",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Biryani",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "384888",
            "avgRatingString": "4.4",
            "totalRatingsString": "50",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 6.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },

        },

    },
    {

        "card": {
            "id": "67037",
            "name": "Ayyappan Idli",
            "cloudinaryImageId": "f9mmpwaif5rgwl2egyw0",
            "locality": "Matunga East",
            "areaName": "Matunga",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "South Indian",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "431058",
            "avgRatingString": "4.4",
            "totalRatingsString": "13K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },

        },

    }
];

console.log(resList[0]);



const ResturantCardComponent = (props) => {
    console.log(props);
    const { resData } = props;

    return (
        <div className="res_card" >

            <img className="res_logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.cloudinaryImageId
            } />
            <h3>{resData.card.name}</h3>
            <h4>{resData.card.cuisines}</h4>
            <h4>{resData.card.avgRating}</h4>
            <h4>{resData.card.deliveryTime}</h4>
            <h4>{resData.card.costForTwo}</h4>



        </div>
    )
}
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
const AppLayout = () => {
    return (
        <div className="app">
            <Headers />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout />);