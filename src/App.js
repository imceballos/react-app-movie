import React, {Component} from 'react';
import Nav from './nav.js';
import Searcher from './Searcher.js';
import MovieList from './MovieList.js'
import Pagination from './Pagination.js'
import MovieInfo from './Movieinfo.js'
import favoritos from './favoritos.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./stylepage.css"
import "./stylo.css"
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies : [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1 ,
      currentMovie: null,
      currentFav: 0
    }

  }
  

   
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.themoviedb.org/3/search/movie?api_key=ec016b5cd8b9c91c9af4952ca4be84bd&query="+this.state.searchTerm)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results] , totalResults : data.total_results})
    })

  }  

  handleChange = (e) => {
    this.setState({searchTerm : e.target.value })  
  } 

  nextPage = (pageNumber) => {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=ec016b5cd8b9c91c9af4952ca4be84bd&query="+this.state.searchTerm+"&page="+pageNumber)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results] , currentPage : pageNumber})
    })

  }

 
  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null 
    this.setState({currentMovie : newCurrentMovie}) 

  }
  closeMovieInfo = () => {
    this.setState({currentMovie: null})
  }

  render() {

    const numberPages = Math.floor( this.state.totalResults /20);
  

  return (
    <Router>
    <div>
      <div className="App">
        <Nav />
         { this.state.totalResults == 0  ?  <div className="noresults"> < h8> No hay resultados </h8> </div> : <div className="noresults"> <h8> Resultados: {this.state.totalResults} </h8> </div> }

         { this.state.currentMovie == null ?  <div> <Searcher handleSubmit = {this.handleSubmit}  handleChange = {this.handleChange} />   < MovieList viewMovieInfo = {this.viewMovieInfo}  movies = {this.state.movies}  /> </div> :
         < MovieInfo  currentMovie = { this.state.currentMovie }  closeMovieInfo = { this.closeMovieInfo } /> }
         { this.state.totalResults > 20  && this.state.currentMovie == null ? < Pagination pages = {numberPages}  nextPage = {this.nextPage}  currentPage={this.state.currentPage} /> :'' }  
        <Route path="/favoritos"  component ={favoritos} />
      </div>       
    </div>
    </Router>


  );
 }
}



export default App;
