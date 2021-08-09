import React from 'react';
import {Card} from './../card/card.component';
import './cardList.styles.css';

export const CardList = (props) => (
    <div className="cards-container">
        {props.monsters.map(monster => 
                    <Card 
                        key   = {monster.id}
                        id    = {monster.id}
                        name  = {monster.name}
                        email = {monster.email}/>)}
    </div>
);