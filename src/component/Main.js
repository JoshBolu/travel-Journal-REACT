import React from "react";

function Main(props){
    return(
        <div className="single-travel-cont">
            <img src={`${props.item.imageUrl}`}></img>
            <div className="info-cont">
                <div className="info-title-cont">
                    <div className="top-title">
                        <div>                       
                            <i className="ri-map-pin-2-fill"></i>
                            <p>{props.item.location}</p>
                        </div>

                        <a href={`${props.item.googleMapsUrl}`} target="blank">View on Google Maps</a>
                    </div>

                    <h1>{props.item.title}</h1>
                </div>

                <div className="info-desc-cont">
                    <p>{props.item.startDate} - {props.item.endDate}</p>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Main