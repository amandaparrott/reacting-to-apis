import React from 'react';


let FilmCard = ( props ) => {
  return (
    <div>
      <div className="card row">
        <div className="card-header">{props.film.title}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.film.description}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
