import React from 'react';

const Pagination = (props) => {
	const pageLinks = [ ]

	for(let i = 1; i <= props.pages +1; i++){
		let active = props.currentPage === i ? 'active' : '';
<<<<<<< HEAD
		if (Math.abs(props.currentPage - i) < 4) {  
		pageLinks.push(<li className={'waves-effect '+ active} key={i}	onClick={() => props.nextPage(i)} > <a href="/react-movie-app/#">{i} </a> </li>) }
=======
		pageLinks.push(<li className={'waves-effect '+ active} key={i}	onClick={() => props.nextPage(i)} > <a href="/#">{i} </a> </li>)
>>>>>>> parent of 40cb221... github v
	}

	return(
		<div className="container">
			<div className="row">
				<ul className="pagination">
					{pageLinks}
				</ul>
			</div>
		</div>

	)
}
export default Pagination;
