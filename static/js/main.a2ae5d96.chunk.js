(this.webpackJsonpmovies1=this.webpackJsonpmovies1||[]).push([[0],{10:function(e,t,a){},15:function(e,t,a){},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(31),a(13)),s=a(18),i=a(19),m=a(24),u=a(20),v=a(25),h=a(21),d=(a(10),a(15),a(4)),f=function(e){return r.a.createElement("nav",{className:"nav-extended"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"https://imceballos.github.io/react-app-movie/",className:"brand-logo"}," ",r.a.createElement(d.b,{to:"/react-app-movie"},r.a.createElement("i",{className:"material-icons"})," "),"Movie finder "),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement(d.b,{to:"/favoritos"},r.a.createElement("li",Object(h.a)({onClick:e.closeMovieInfo},"onClick",e.clokMovieInfo)," Favoritos ")," "))))},p=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"col s4 offset-s4"},r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Search",type:"text",onChange:e.handleChange}))))))},E=function(e){var t=" ",a=e.release_date;return t=void 0!==a?a.split("-")[0]:" ",r.a.createElement("div",{className:"col s12 m6 l3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},null==e.image?r.a.createElement("img",{src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"card image",style:{width:"100%",height:250}}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.image,alt:"card image",style:{width:"100%",height:250}})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"info"},r.a.createElement("p",null,r.a.createElement("font",{size:"2"}," ",e.title.substr(0,27),"(",t,")  ")," ",r.a.createElement(d.b,{to:"/ "},r.a.createElement("a",{href:"/#",onClick:function(){return e.viewMovieInfo(e.movieId)}}," Detalles ")," ")," ")))))},g=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},e.movies.map((function(t,a){return r.a.createElement(E,{key:a,image:t.poster_path,title:t.title,release_date:t.release_date,viewMovieInfo:e.viewMovieInfo,movieId:t.id})})))))},b=function(e){for(var t=[],a=function(a){var n=e.currentPage===a?"active":"";Math.abs(e.currentPage-a)<4&&t.push(r.a.createElement("li",{className:"waves-effect "+n,key:a,onClick:function(){return e.nextPage(a)}}," ",r.a.createElement("a",{href:"/#"},a," ")," "))},n=1;n<=e.pages+1;n++)a(n);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"pagination"},t)))};var w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",onClick:e.closeMovieInfo,style:{cursor:"pointer",paddingTop:50}},r.a.createElement("i",{className:"fas fa-arrow-left"}," "),r.a.createElement(d.b,{to:"/ "}," ",r.a.createElement("span",{style:{marginLeft:10}}," Go back ")," ")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4"},null==e.currentMovie.poster_path?r.a.createElement("img",{src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"Card image",style:{width:"100%",height:360}}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.currentMovie.poster_path,alt:"Card image",style:{width:"100%",height:360}})),r.a.createElement("div",{className:"col s12 m8"},r.a.createElement("div",{className:"info-container"},r.a.createElement("p",{className:"titlemovie_s"}," ",e.currentMovie.title," "),r.a.createElement("p",null," ",e.currentMovie.release_date),r.a.createElement("p",null," ",e.currentMovie.overview," "),r.a.createElement("p",null," Votos : ",e.currentMovie.vote_count),r.a.createElement("p",null," Popularidad : ",e.currentMovie.popularity),r.a.createElement("p",null," Nota: ",e.currentMovie.vote_average),r.a.createElement("a",{href:"/#",onClick:function(){return function(e){localStorage.setItem(e.currentMovie.id,JSON.stringify(e.currentMovie))}(e)}}," A\xf1adir a favoritos ")))))};var N=function(){for(var e=[],t=Object.keys(localStorage),a=t.length;a--;)e.push(localStorage.getItem(t[a]));return console.log(e),r.a.createElement("ul",null,r.a.createElement("h4",{align:"center"},"Favoritos"),e.map((function(e){var t=JSON.parse(e);return r.a.createElement("ul",{class:"collection"},r.a.createElement("li",{class:"collection-item avatar"},null==t.poster_path?r.a.createElement("img",{src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"",class:"circle"}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+t.poster_path,alt:"",class:"circle"}),r.a.createElement("span",{class:"title"},t.title),r.a.createElement("p",null," ",t.release_date)))})))},M=a(6),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=ec016b5cd8b9c91c9af4952ca4be84bd&query="+a.state.searchTerm).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(o.a)(e.results),totalResults:e.total_results})}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.nextPage=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=ec016b5cd8b9c91c9af4952ca4be84bd&query="+a.state.searchTerm+"&page="+e).then((function(e){return e.json()})).then((function(t){console.log(t),a.setState({movies:Object(o.a)(t.results),currentPage:e})}))},a.viewMovieInfo=function(e){var t=a.state.movies.filter((function(t){return t.id===e})),n=t.length>0?t[0]:null;a.setState({currentMovie:n})},a.closeMovieInfo=function(){a.setState({currentMovie:null})},a.state={movies:[],searchTerm:"",totalResults:1,currentPage:1,currentMovie:null,currentFav:0},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Math.floor(this.state.totalResults/20);return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),this.state.totalResults>1?r.a.createElement("h8",{className:"noresults"},"Resultados:",this.state.totalResults," "):r.a.createElement("div",null,r.a.createElement("h8",{className:"noresults"},"No hay resultados :( ")," "),null==this.state.currentMovie?r.a.createElement("div",null," ",r.a.createElement(p,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),"   ",r.a.createElement(g,{viewMovieInfo:this.viewMovieInfo,movies:this.state.movies})," "):r.a.createElement(w,{currentMovie:this.state.currentMovie,closeMovieInfo:this.closeMovieInfo}),r.a.createElement((function(a){return e.state.totalResults>20&&null==e.state.currentMovie?r.a.createElement(b,{pages:t,nextPage:e.nextPage,currentPage:e.state.currentPage}):""}),null),r.a.createElement(M.a,{exact:!0,path:"/favoritos",component:N}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a2ae5d96.chunk.js.map