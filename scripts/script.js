$(document).ready(function(){

    const API_KEY = '8d39ecbb90f8779a25effbbda999db32';
    const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
    const IMG_URL = 'https://image.tmdb.org/t/p/w200/'

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

                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let img = document.createElement('img');
                let btnDetalhes = document.createElement('button');
                let btnMinhaConta = document.createElement('button');

                div.classList.add('col-xs-12');
                div.classList.add('col-md-6');
                div.classList.add('col-lg-3');
                div.classList.add('filmes');
                div.classList.add('col-in-block');

                h2.innerHTML = filmes.title;

                img.src = `${IMG_URL}${filmes.poster_path}`;

                btnDetalhes.innerHTML = 'Details';
                btnMinhaConta.innerHTML = 'Watch';
                
                // if(filmes.poster_path === undefined){
                //     img.src = `${IMG_URL}${filmes.poster_path}`
                // }else{
                //     img.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
                // }

                div.appendChild(h2);
                div.appendChild(img);
                div.appendChild(btnDetalhes);
                div.appendChild(btnMinhaConta);

                parent.append(div);
                
                
            })

        })
    }

    getPopularMovies();

})