import React from "react";

let PeopleCard = ({person}) => {

  return (
    <div className="card people-card">
      <div className="card-body">
         <h2 className="card-title">{person.name}</h2>
           <h4 className="card-text">{person.gender}</h4>
           <p className="card-text">{person.age}</p>
            <a href={person.url}>More</a>
         </div>
      </div>                
        )
};

export default PeopleCard;
