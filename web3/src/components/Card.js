import React from "react";
import "./Card.css";
import injectSheet from 'react-jss';


const styles = {
    button: {
        '&:hover': {
            backgroundColor: '#B095FF'
        }
    }
}


function Card(props) {
    const classes = props.classes
    return (
        <div className="card">
            <img className="img" src={props.image}/>
            <div className="info">
                <h1>{props.title}</h1>
                <p className="desc">{props.desc}</p>

                <button type="button" onClick={props.click} className={classes.button}>{props.button}</button>

            </div>
        </div>
    );
}

export default injectSheet(styles)(Card);