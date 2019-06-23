$(document).ready(function(){

    const API_KEY = '8d39ecbb90f8779a25effbbda999db32';
    const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
    const IMG_URL = 'https://image.tmdb.org/t/p/w200/';
    const FULL_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
    const YOUTUBE_FRAME = '<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        } 
        console.log('Query Variable ' + variable + ' not found');
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

    getGenres();

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
        location.replace(`search.php?query=${query}`);
    }

    $('#form-search').submit(function(e){
        e.preventDefault();

        if(e.target[0].value === ''){
            alert('Query must be somenthing')
        }else{
            search($('#search').val());
        }


    })

    const movie_info = (id) => {
        $.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,function(data){

            let parent = $('.movie-info');

            $('.similar-movies').css('background-image', `url('${FULL_IMAGE_URL}${data.backdrop_path}')`);

            console.log(data.videos.results)

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
                                        <p>Info</p>
                                        <h2>${data.status === 'Released' ? 'Released' : 'Not released'}</h2>
                                        <h2 class="movie-vote">${data.vote_average}/<span>${data.vote_count}</span></h2>
                                        <h2 class="movie-runtime">${runtime_to_hours(data.runtime)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `

            parent.append(div);

            // for(let i = 0;i < data.videos.results.length;i++){

            // }

            data.videos.results.forEach(trailers => {
                if(trailers.type === 'Trailer'){
                    let trailer = `
                        <div class="trailer-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailers.key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                    `

                    parent.append(trailer);
                }
            })


            let genres_span = $('#genres-title');

            data.genres.forEach(genre => {
                let li = `<li><p>${genre.name}</p></li>`
                genres_span.append(li);
            })

        })
    }
    const tv_info = (id) => {
        $.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,function(data){

            let parent = $('.movie-info');

            $('.similar-movies').css('background-image', `url('${FULL_IMAGE_URL}${data.backdrop_path}')`);

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
                                    <h1>${data.original_name}</h1>
                                    <div class="show-genres-span"> <ul id="genres-title"></ul> </div>
                                    <p class="movie-overview">${data.overview}</p>
                                    <div class="movie-misc">

                                        <div class="row fs-0">
                                            <div class="col-xs-12 col-md-6 col-in-block">
                                                <p>Info</p>
                                                <h2>${data.status === 'Ended' ? 'Ended' : 'Still playing'}</h2>
                                                <h2 class="movie-vote">${data.vote_average}/<span>${data.vote_count}</span></h2>
                                            </div>
                                            <div class="col-xs-12 col-md-6 col-in-block">
                                                <h2>Number of Seasons: <span>${data.number_of_seasons !== null ? data.number_of_seasons : '-'}</span></h2>
                                                <h2>Number of episodes: <span>${data.number_of_episodes !== null ? data.number_of_episodes : '-'}</span></h2>
                                            </div>
                                        </div>

                                        <div class="show-tv-seasons">
                                            <ul class="nav nav-tabs" id="all_seasons">
                                            </ul>
                                            <div class="append-me">

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `

            parent.append(div);

            data.seasons.forEach((season,i) => {
                $('#all_seasons').append(`<li role="presentation" ><a href="#${season.id}">${season.name}</a> </li>`);

                let div= `
                    <div class="display_season_info" id="${season.id}">
                        <div class="row fs-0">
                            <div class="col-xs-12 col-md-3 col-in-block">
                                <img src="${IMG_URL}${season.poster_path}">
                            </div>
                            <div class="col-xs-12 col-md-9 col-in-block v-top">
                                <h2>${season.name}</h2>
                                <p>${season.overview}</p>

                                <h2>Total of episodes: ${season.episode_count}</h2>
                            </div>
                        </div>
                    </div>
                `

                
                // $(`#${season.id}`)
                
                $('.append-me').append(div);
                
                if(i === 1){
                    $(`a[href^="#${season.id}"]`).addClass('active');
                    $(`#${season.id}`).css('display', 'block');
                }


                $(`a[href^="#${season.id}"]`).on('click', function(e){
                    $('.nav-tabs li a').removeClass('active');
                    $(this).addClass('active');
                    e.preventDefault();
                    $('.display_season_info').hide();
                    $(`#${season.id}`).css('display', 'block');

                })

                
            })

            data.videos.results.forEach(trailers => {
                if(trailers.type === 'Trailer'){
                    let trailer = `
                        <div class="trailer-wrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailers.key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                    `

                    parent.append(trailer);
                }
            })


            let genres_span = $('#genres-title');

            data.genres.forEach(genre => {
                let li = `<li><p>${genre.name}</p></li>`
                genres_span.append(li);
            })

        })
    }

    window.onload = function() {
        if (window.location.href.indexOf('info.php') > -1) {

            if(getQueryVariable('type') === 'movie' || getQueryVariable('type') === 'Movie'){
                movie_info(getQueryVariable('id'));
            }else{
                tv_info(getQueryVariable('id'));
            }

          get_similar_movie(getQueryVariable('id'))
        }else if(window.location.href.indexOf('search.php') > -1){
            display_search_query(getQueryVariable('query'))
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
        
        let row_1 = $('#row-1');
        let row_2 = $('#row-2');
        let main_row = $('.teste');
        row_1.css('overflowX', 'scroll');

        
        // $.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`, function(data){
        //     //console.log(data.results[0]);

        //     //main_row.css('background-image', `url('${IMG_URL}${data.results[0].poster_path}')`);

        //     $.map(data.results, similar => {
        //         console.log(similar)
        //         let div1 = `<div id="help" style="background-image: url('${IMG_URL}${similar.poster_path}')"></div>`;


        //         row_1.append(div1);
        //     })

        // })
    }

    const display_search_query = (query) => {

        let results = $('.show-query-results');
        let parent = $('#display_search');
        let div;
        
        $.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`, (data) => {
            console.log(data)

            if(data.results.length === 0){
                parent.append(`<h1>0 results found for '${query}'</h1>`)
            }else{
                results.append(`<h2><span>${data.total_results}</span> results found for <span>'${query}'<span></h2>`);

                data.results.forEach(search => {
                    switch(search.media_type){
                        case 'tv':
                                div = `
                                <div class="search-results">
                                    <div class="col-xs-12 col-md-3 col-in-block">
                                        <img src="${IMG_URL}${search.poster_path}">
                                    </div>
                                    <div class="col-xs-12 col-md-9 col-in-block v-top">
                                        <h2>${search.original_name}</h2>
                                        <p>${search.overview}</p>
                                        <a href="#">Watch</a>
                                        <a href="info.php?id=${search.id}&type=${search.media_type}">Info</a>
                                    </div>
                                </div>
                                
                            `
                        break;
                        case 'movie':
                                div = `
                                <div class="search-results">
                                    <div class="col-xs-12 col-md-3 col-in-block">
                                        <img src="${IMG_URL}${search.poster_path}">
                                    </div>
                                    <div class="col-xs-12 col-md-9 col-in-block v-top">
                                        <h2>${search.title}</h2>
                                        <p>${search.overview}</p>
                                        <a href="#">Watch</a>
                                        <a href="info.php?id=${search.id}&type=${search.media_type}">Info</a>
                                    </div>
                                </div>
                                
                            `
                        break;
                        case 'person':
                                div = `
                                <div class="search-results">
                                    <div class="col-xs-12 col-md-3 col-in-block">
                                        <img src="${IMG_URL}${search.profile_path}">
                                    </div>
                                    <div class="col-xs-12 col-md-9 col-in-block v-top">
                                        <h2>${search.name}</h2>
                                        <a href="info.php?id=${search.id}&type=${search.media_type}">Info</a>
                                    </div>
                                </div>
                                
                            `
                        break;
                    }

                    parent.append(div);

                })
            }

        })
    }

    $(window).scroll(function(){
        let top = $('.nav-bar');

        if($(window).scrollTop() > 150){
            top.addClass('fixed-nav');

            $('.logo h1').html('M.S');

        }else{
            top.removeClass('fixed-nav');
            $('.logo h1').html('MoSe');
        }
    })

})