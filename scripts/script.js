$(document).ready(function(){

    const API_KEY = '8d39ecbb90f8779a25effbbda999db32';
    const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
    const IMG_URL = 'https://image.tmdb.org/t/p/w200/';
    const FULL_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        } 
        alert('Query Variable ' + variable + ' not found');
      }

    const getGenres = () =>{
        $.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`, (data) => {
            let parent = $('#genre-parent');

            $.map(data, function(genres, i) {
                genres.forEach(genre => {
                    let li = document.createElement('li');
                    let a = document.createElement('a');

                    a.innerHTML = genre.name;

                    li.appendChild(a);

                    parent.append(li);
                });
                
                
            })
        })
    }

    //getGenres();

    const getPopularMovies = () => {

        $.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, function(data){

            let parent = $('#display-movies');

            $.map(data.results, function(filmes, i){
                //console.log(filmes)
                let div = `
                    <div class="col-xs-12 col-sm-6 col-lg-3 col-in-block filmes">
                        <h2>${filmes.title}</h2>
                        <img src="${IMG_URL}${filmes.poster_path}">
                        <div class="btn-down">
                            <a href="info.php?id=${filmes.id}">Details</a>
                            <a href="#">Watch</a>
                        </div>
                    </div>
                `

                parent.append(div);
                
                
            })

        })
    }

    getPopularMovies();

    const removeActive = () => {

        let types = document.querySelectorAll('.types li');

        types.forEach(item => {
            $(item).click(function(){
                if(!$(item).hasClass('active')){
                    $('li').removeClass('active');

                    $(this).addClass('active');
                }
            })
        })
    }

    removeActive();

    const search = (query) => {
        // $.get(`https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${query}}&page=1`, (data) => {
        //     //console.log(data)
        // })
        location.replace(`search.php?query=${query}`);
    }

    $('#form-search').submit(function(e){
        e.preventDefault();
        search($('#search').val());

    })

    const movie_info = (id) => {
        $.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,function(data){

            let parent = $('.movie-info');

            console.log(data)

            let div = `
                <div class="wrapper-info">
                    <div class="banner-movie-img" style="background-image: url('${FULL_IMAGE_URL}${data.backdrop_path}')">
                        <div class="banner-opacity"></div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-3">
                                <div class="movie-info-info">
                                    <img src="${IMG_URL}${data.poster_path}">
                                    <a href="#">Watch</a>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-9">
                                <div class="movie-information">
                                    <h1>${data.title}</h1>
                                    <div class="show-genres-span"> <ul id="genres-title"></ul> </div>
                                    <p class="movie-overview">${data.overview}</p>
                                    <div class="movie-misc">
                                        <h2 class="movie-vote">${data.vote_average}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `

            parent.append(div);

            let genres_span = $('#genres-title');

            data.genres.forEach(genre => {
                let li = `<li><p>${genre.name}</p></li>`
                genres_span.append(li);
            })

        })
    }

    window.onload = function() {
        if (window.location.href.indexOf('info.php') > -1) {
          movie_info(getQueryVariable('id'));
        }
      }

    const runtime_to_hours = run => {

        let hour = (run / 60);
        let hour_rounded = Math.floor(hour);

        let minute = (hour - hour_rounded) * 60;
        let minute_rounded = Math.round(minute);

        return `${hour_rounded}h and ${minute_rounded}m`
    }

    const set_price_movie = (movie) => {

        let runtine = movie.runtime;

        return runtine / 25;
    }

    const get_similar_movie = id => {
        
    }
})