import React from 'react';


const PersonCard = (props) => {
    return (
      <div>
        <div className="card row">
          <div className="card-header">{props.person.name}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Gender: {props.person.gender}</p>
              <p>Age: {props.person.age}</p>
              <p>Response: {props.person.url}</p>
            </blockquote>
          </div>
        </div>
      </div>
    );
  };

export default PersonCard;