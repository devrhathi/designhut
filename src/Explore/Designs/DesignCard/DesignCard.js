import React from 'react'
import classes from './DesignCard.module.css';

function DesignCard(props) {
    return (
        <div className={classes.designCard}>

            <div className={classes.designCardName}>
            <p>{props.name}</p>
            </div>

            <div className={classes.designCardImage}>
            <img src={props.image} alt={props.name}/>
            </div>

            <div className={classes.designCardDesc}>
            <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default DesignCard
