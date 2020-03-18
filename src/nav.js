import React from 'react';
import './stylepage.css';
import './stylo.css'
import {Link} from 'react-router-dom';
import App from './App.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';



const Nav = (props) => {
	return(
		<nav className="nav-extended">
			<div className = "nav-wrapper">
				<a  href="/" className="brand-logo" >	<Link to = "/"><i className="material-icons"></i> </Link>Movie finder </a> 
				<ul id="nav-mobile" className="right hide-on-med-and-down" >
<<<<<<< HEAD
					<Link to="/favoritos" ><li onClick={ props.closeMovieInfo }  > Favoritos </li> </Link>
=======
					<Link to="/favoritos" ><li onClick={ props.closeMovieInfo }> Favoritos </li> </Link>
>>>>>>> parent of 40cb221... github v

      			</ul>
			</div>
		</nav>
		)
}
export default Nav;
