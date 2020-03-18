import React from 'react';



function favoritos( ) {
	var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    console.log(values)


	return(
		 <ul>
                {values.map(
                	s => { var valores = JSON.parse(s) ;  

                		return( <ul class="collection">
							    <li class="collection-item avatar">
{

						valores.poster_path == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="" class="circle" /> : <img src={"https://image.tmdb.org/t/p/w185"+valores.poster_path } alt="" class="circle" />
					}


							      <span class="title">{valores.title}</span>
							      <p> {valores.release_date}
							      </p>
							    </li>
							</ul> 

							    )
                	} 
                	)
                }
            </ul>
		);
}
export default favoritos;
