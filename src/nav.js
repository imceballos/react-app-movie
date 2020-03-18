import React from 'react';
import './stylepage.css';



 function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    console.log(values);
}

const Nav = (props) => {
	return(
		<nav className="nav-extended">
			<div className = "nav-wrapper">
				<a href="https://imceballos.github.io/react-app-movie/" className="brand-logo" ><i className="material-icons"></i>  Movie finder </a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="/favoritos" onClick= {() => allStorage() } > Favoritos </a></li>
      			</ul>
			</div>
		</nav>
		)
}
export default Nav;
