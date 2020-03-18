import React from 'react'
import './stylo.css'
const Movie = (props) => {

	var words = ' '

	const fecha = props.release_date ;
	if (fecha !== undefined ){
		words =  fecha.split('-')[0] ;
	
	}
	else {
		 words = " "
	}
	

	return (
		<div className="col s12 m6 l3">
			<div className="card">
				<div className= "card-image waves-effect waves-block waves-light">
					{

						props.image == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="card image" style={{width:"100%", height:250}} /> : <img src={"https://image.tmdb.org/t/p/w185"+props.image } alt="card image" style={{width:"100%", height:250}} />
					}

				</div>	
				<div className="card-content" >
					<div className="info">
						<p><font size="2"> { props.title } ( {words} )  </font> <a href='/#' onClick={() => props.viewMovieInfo(props.movieId)}> Detalles </a> </p>
					</div>	
				</div>
			</div>
		</div>
	)

}

export default Movie;