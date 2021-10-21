import React from "react";

let FilmCard = ({ film }) => {
  return (
    <div className="card film-card">
      <div className="card-body">
        <h2 className="card-title">{film.title}</h2>
        <h3 className="card-text">{film.release_date}</h3>
        <p className="card-text">{film.description}</p>
        {/* <link to={"films/" + film.id}>More</link> */}
      </div>
    </div>
  );
};

export default FilmCard;
