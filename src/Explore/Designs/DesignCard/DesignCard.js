import React from 'react'
import classes from './DesignCard.module.css';

function DesignCard(props) {
    return (
        <div className={classes.designCard}>

            <div className={classes.designCardName}>
            <p>{props.name}</p>
            </div>

            <div></div>
            <img src={props.image} alt={props.name}/>

            <div className={classes.designCardDesc}>
            <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default DesignCard
