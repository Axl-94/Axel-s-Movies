import React from 'react'




const Card = ({movie}) =>{


return (
 <div className="col-md-4" style={{marginTop:'0.5rem'}}>
  <div className="card ">
  <img src={movie.Poster} alt={movie.Title} className="card-img-top"  width="500px" height="500px" />
  <div className="card-body">
  <h4 className="initialism">{movie.Title} {movie.Year}</h4>
  <p> {movie.Type} </p>
  </div>
  </div>
  </div>  
)

}

export default Card;