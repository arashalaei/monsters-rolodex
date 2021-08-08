import React from 'react';
import "./card.styles.css";

export const Card = (props) => (
    <div className="card">
        <img src={`https://robohash.org/${props.id}?set=set2`} alt={`card photo ${props.key}`} className="card__photo"/>
        <h2 className="card__heading">{props.name}</h2>
        <span className="card__text">{props.email}</span>
    </div>
)