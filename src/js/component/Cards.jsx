import React from "react";

export function Cards(props) {
  return (
    <div className="card h-100">
      <img src={props.image} alt={props.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
