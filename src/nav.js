import React from 'react';
import './stylepage.css';
import favorite from './favorite.js'
import viewInfo from './App.js'



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
		<nav class="nav-extended">
			<div className = "nav-wrapper">
				<a href="App.js" class="brand-logo" ><i class="material-icons"></i>  Movie finder </a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href="#" onClick= {() => allStorage() } > Favorito </a></li>
      			</ul>
			</div>
		</nav>
		)
}
export default Nav;
