import React, {useState} from "react";
import Subscription from "./subscription";

function Hotel (props) {

    const [clicked, setClicked] = useState(false);
    const [needInfo, setNeedInfo] = useState(false);

    if (props.data !== "") {
return (
    <div className="hotels-container">
         {props.data.map((hotel) => (
        <div className="hotel-container" key={hotel.id}>
            <h2>{hotel.name}</h2>
            <button onClick={()=>setClicked(clicked === false? hotel.id : false)}>{clicked === hotel.id ? "Show less" : "Show more"}</button>
            <div className="hotel-details">{clicked === hotel.id ? `${hotel.city} (${hotel.stars})` : "" }</div>
            <div className="hotel-subcription-btn">{clicked === hotel.id ?  <button onClick={()=> setNeedInfo(needInfo === false? hotel.id : false)}>Request more info</button>  : "" }</div>
            <div className="hotel-subcription-container">{needInfo === hotel.id ?  <Subscription hotel={hotel}/>  : "" }</div>
            </div>
      ))}
      
    </div>
)
    }
    

}

export default Hotel;