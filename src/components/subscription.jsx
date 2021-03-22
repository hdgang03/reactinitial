import React, { useState, useEffect} from "react";

function Subscription (props){

    const [data, setData] = useState("");
    
    const handleClick = (e) => {
    
            fetch('api/hotels/subscription', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: {
                  "email": `${e.target.parentNode.firstChild.value}`,
                  "hotel": `${props.hotel.name}`
              }
            })
            .then(function(res){ return res.json(); })
            .then((json) => setData(json));
            console.log(data);
    }


    return(
        <form>
            <input type="email"/>
            <button onClick={(e)=>handleClick}>Submit</button>
        </form>
    )
}

export default Subscription;