
const tabs_film = document.querySelector('.slide-show')
const film_like = document.querySelector('.film-like')
const film_Update = document.getElementById('movie_update');
const film_Even = document.getElementById('movie_even');
const film_Done = document.getElementById('movie_done');
const film_right = document.getElementById('right_Movie');
const film_Film = document.getElementById('right-bo');
const one = document.querySelector.bind(document);
const two = document.querySelectorAll.bind(document);
const tabs = two('.tab-item');
const content = two('.tabs-film');
const tabAchive = one('.tab-item.active');
const line = one('.line')
line.style.left = tabAchive.offsetLeft + 'px'
line.style.width = tabAchive.offsetWidth + 'px'
tabs.forEach((tab, index) => {
  tab.onclick = function () {
    const contents = content[index];
    one('.tab-item.active').classList.remove('active');
    one('.tabs-film.active').classList.remove('active');
    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'
    this.classList.add('active')
    contents.classList.add('active')

  }
});
const key_discode = '/discover/movie?sort_by=popularity.desc&';
const key_popual = '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&';
const url_like = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&';
const api_key = 'api_key=f2140df4cddc9d6c7b7768bf1a0dba7d';
const url = 'https://api.themoviedb.org/3';
const url_img = 'https://image.tmdb.org/t/p/w500';
const url_update = '/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&';
const url_even = '/discover/movie?with_people=108916,7467&sort_by=popularity.desc&';
const url_done = '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&';
const url_right = '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&';
const url_dones = url + url_done + api_key;
const url_evens = url + url_even + api_key;
const url_popuals = url + key_popual + api_key;
const url_movies = url + key_discode + api_key;
const url_likes = url + url_like + api_key;
const url_updates = url + url_update + api_key;
const url_rights = url + url_right + api_key;
json_Movie_popual(url_popuals);
json_Movies(url_movies);
json_Movie_like(url_likes);
json_Movie_Update(url_updates);
json_Movie_Even(url_evens);
json_Movie_Done(url_dones);
json_Movie_Right(url_rights);
function json_Movie_popual(url_movie) {
  fetch(url_movie)
    .then(response => response.json())
    .then(response => {
      showMovie(response.results)
      console.log(response.results);
    })
    .catch(err => console.error(err));

}
function json_Movie_like(url_likes) {
  fetch(url_likes)
    .then(response => response.json())
    .then(response => {
      like_movies(response.results)
    })
    .catch(err => console.error(err));

}
function json_Movie_Even(url_movie) {
  fetch(url_movie)
    .then(response => response.json())
    .then(response => {
      even_movies(response.results)
    })
    .catch(err => console.error(err));

}
function json_Movie_Done(url_movie) {
  fetch(url_movie)
    .then(response => response.json())
    .then(response => {
      done_movies(response.results)
    })
    .catch(err => console.error(err));

}
function json_Movies(url_popuals) {
  fetch(url_popuals)
    .then(response => response.json())
    .then(response => {
      new_Movie(response.results)
    })
    .catch(err => console.error(err));

}
function json_Movie_Update(url_movie) {
  fetch(url_movie)
    .then(response => response.json())
    .then(response => {
      update_movies(response.results)
    })
    .catch(err => console.error(err));

}
function json_Movie_Right(url_movie) {
  fetch(url_movie)
    .then(response => response.json())
    .then(response => {
      right_movies(response.results);
      right_films(response.results);
    })
    .catch(err => console.error(err));

}
tabs_film.innerHTML = '';
function showMovie(data) {
  data.forEach((movie) => {
    const { backdrop_path, id, original_title, poster_path } = movie;
    const movies = document.createElement('div');
    movies.classList.add('logo-movie');
    movies.innerHTML = `<a href="./404/404error.html">
                <div class="img-movie">
                  <img class="img" src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${original_title}" />
                </div>
                <div class="chapter">Tập ${id}</div>
                <div class="name-movie"><p>${original_title}</p></div>
                <div class="play">
                  <button class="btn-play">
                    <ion-icon name="caret-forward-circle-outline"></ion-icon>
                  </button>
                </div></a>
        `
    tabs_film.appendChild(movies);
  })
}

const movie_new = document.querySelector('.cartoon-film');
movie_new.innerHTML = '';
function new_Movie(data) {
  data.forEach((movie) => {
    const { backdrop_path, id, original_title, poster_path } = movie;
    const movie_news = document.createElement('div');
    movie_news.classList.add('logo-movie1');
    movie_news.innerHTML = `
    <a href="./404/404error.html">
      <div class="img-movie1">
          <img class="img" src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${original_title}" />
        </div>
          <div class="chapter1">Tập ${id}</div>
          <div class="name-movie1"><p>${original_title}</p></div>
          <div class="play1">
          <button class="btn-play1">
            <ion-icon name="caret-forward-circle-outline"></ion-icon>
          </button>
      </div>
      </a>
      
  `
    movie_new.appendChild(movie_news)
  })
}

film_like.innerHTML = '';
function like_movies(data) {
  data.forEach(movie => {
    const { backdrop_path, id, original_title, poster_path } = movie;
    const movie_news = document.createElement('div');
    movie_news.classList.add('logo-movie1');
    movie_news.innerHTML = `
    <a href="./404/404error.html">
    <div class="img-movie1">
        <img class="img" src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${original_title}" />
      </div>
        <div class="chapter1">Tập ${id}</div>
        <div class="name-movie1"><p>${original_title}</p></div>
        <div class="play1">
        <button class="btn-play1">
          <ion-icon name="caret-forward-circle-outline"></ion-icon>
        </button>
    </div>
    </a>

    `
    film_like.appendChild(movie_news)
  })
}
film_Update.innerHTML = '';
function update_movies(data) {
  data.forEach(movies => {
    const { id, original_title, poster_path } = movies;
    const movie = document.createElement('div')
    movie.classList.add('logo-movie1');
    movie.innerHTML = `
    <a href="./404/404error.html">
    <div class="img-movie1">
        <img class="img" src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${original_title}" />
      </div>
        <div class="chapter1">Tập ${id}</div>
        <div class="name-movie1"><p>${original_title}</p></div>
        <div class="play1">
        <button class="btn-play1">
          <ion-icon name="caret-forward-circle-outline"></ion-icon>
        </button>
    </div>
    </a>
    `
    film_Update.appendChild(movie);
  })

}
film_Even.innerHTML = '';
film_Done.innerHTML = '';
function even_movies(data) {
  data.forEach(movies => {
    const { backdrop_path, id, original_title, poster_path } = movies;
    const movie = document.createElement('div')
    movie.classList.add('logo-movie1');
    movie.innerHTML = `
    <a href="./404/404error.html">
    <div class="img-movie1">
        <img class="img" src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${original_title}" />
      </div>
        <div class="chapter1">Tập ${id}</div>
        <div class="name-movie1"><p>${original_title}</p></div>
        <div class="play1">
        <button class="btn-play1">
          <ion-icon name="caret-forward-circle-outline"></ion-icon>
        </button>
    </div>
    </a>
    `
    film_Even.appendChild(movie);
  })

}
function done_movies(data) {
  data.forEach(movies => {
    const { id, original_title, poster_path } = movies;
    const movie = document.createElement('div')
    movie.classList.add('logo-movie1');
    movie.innerHTML = `
    <a href="./404/404error.html">
    <div class="img-movie1">
        <img class="img" src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${original_title}" />
      </div>
        <div class="chapter1">Tập ${id}</div>
        <div class="name-movie1"><p>${original_title}</p></div>
        <div class="play1">
        <button class="btn-play1">
          <ion-icon name="caret-forward-circle-outline"></ion-icon>
        </button>
    </div>
    </a>
    `
    film_Done.appendChild(movie);
  })

}
film_right.innerHTML = '';
function right_movies(data) {
  data.forEach(movies => {
    const { backdrop_path, id, original_title, poster_path, vote_average, release_date, original_language } = movies;
    const movie = document.createElement('li')
    movie.classList.add('banner')
    movie.innerHTML = `
    <a href="./404/404error.html">
      <div class="left">
        <img src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"
      }" alt="ảnh">
      </div >
    <div class="right">
      <span>${id}</span>
      <br>
        <span>${release_date}</span>
        <br>
          <span>${vote_average}</span>
          <span class="vietsub">
           ${original_language}
          </span>
        </div>

      </a>
    `
    film_right.appendChild(movie);
  })

}
var a = ["s,s,s"];
a.map
film_Film.innerHTML = '';
function right_films(data) {
  data.forEach(x => {
    const { id, poster_path, vote_average, release_date, original_language } = x;
    const movie = document.createElement('li')
    movie.classList.add('banner')
    movie.innerHTML = `
    <a href="./404/404error.html">
      <div class="left">
        <img src="${poster_path ? url_img + poster_path : "http://via.placeholder.com/1080x1580"
      }" alt="ảnh">
      </div >
    <div class="right">
      <span>${id}</span>
      <br>
        <span>${release_date}</span>
        <br>
          <span>${vote_average}</span>
          <span class="vietsub">
           ${original_language}
          </span>
        </div>

      </a>
    `
    film_Film.appendChild(movie);
  })

}

