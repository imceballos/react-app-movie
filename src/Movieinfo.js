import React from 'react'
import './stylepage.css'
import {Link} from 'react-router-dom';

function save_as(props){

	localStorage.setItem(props.currentMovie.id, JSON.stringify(props.currentMovie))

	}



const MovieInfo = (props) => {
	

	return (
		<div className = "container">
			<div className = "row" onClick={props.closeMovieInfo} style={{cursor : "pointer", paddingTop : 50}}>
				<i className = "fas fa-arrow-left"> </i>
				<Link to="/ "> <span style={{marginLeft: 10}} > Go back </span> </Link>
			</div>
			<div className="row">
				<div className="col s12 m4">
					{
						props.currentMovie.poster_path == null ? <img src= {"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="Card image" style = {{width : "100%" , height :360}} /> :

						<img src={"https://image.tmdb.org/t/p/w185"+props.currentMovie.poster_path}  alt="Card image" style = {{width : "100%" , height :360}} />

					}
				</div>
					<div className="col s12 m8">
						<div className="info-container">
							<p className="titlemovie_s"> {props.currentMovie.title} </p>
							<p> {props.currentMovie.release_date}</p>
							<p> {props.currentMovie.overview} </p>
							<p>	Votos : {props.currentMovie.vote_count}</p>
							<p>	Popularidad : {props.currentMovie.popularity}</p>
							<p>	Nota: {props.currentMovie.vote_average}</p>
							<a href="/#" onClick={() => save_as(props)}> Añadir a favoritos </a>
						</div>
					</div>
					
			</div>
			
		</div>

		)
}

export default MovieInfo;
