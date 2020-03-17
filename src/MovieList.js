import React from 'react';
import Movie from './Movie.js'

const MovieList = (props) => {
	return(	<div className="container">
				<div className="row">
					<div className="col s12">
						{
							props.movies.map((movie,i) => {
								return (
									<Movie key={i} image={movie.poster_path} title={movie.title} release_date={movie.release_date} viewMovieInfo = {props.viewMovieInfo} movieId = {movie.id}/>
									)
							})
						}

					</div>
				</div>

			</div>

		)
	

}
export default MovieList;