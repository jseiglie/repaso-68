import React from "react";

export const Card = ({src, name}) => {

    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={src} alt={name} />
            <h3>{name}</h3>
        </div>

    )
}