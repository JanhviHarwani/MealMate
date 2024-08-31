import React from 'react';
import './Card.css'; // Include the above CSS in this file

function Card(props) {
    return (
        <div className="card">
            {props.children}
            {/* <img src={imgSrc} alt="Recipe Image" className="card-img" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <button className="card-button" onClick={onClick}>View Recipe</button>
            </div> */}
        </div>
    );
}

export default Card;
