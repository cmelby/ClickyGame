import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} 
        onClick={()=> props.clickHandler(props.id)}/>
      </div>
    </div>
  );
}

export default CharacterCard;

