import React from "react";
import "./Card.css";
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom'

const styles ={
    button:{
        '&:hover': {
            backgroundColor: '#B095FF'
          }
    }
}


function Card(props) {
  const classes = props.classes
  return (
    <div className="card">
      <img className="img" src={props.image} />
      <div className="info">
        <h1>{props.title}</h1>
        <p className="desc">{props.desc}</p>
        <Link to={props.url}>
        <button type="button" className={classes.button}>{props.button}</button>
        </Link>
      </div>
    </div>
  );
}

export default injectSheet(styles)(Card);