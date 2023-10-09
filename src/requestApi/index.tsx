const upComming = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlhNzhhZmI1YzI0NjMwNTVjNjYwNjFiODUzNjZlOCIsInN1YiI6IjY1MjI5ZjM1ZWE4NGM3MDBlYjlkYzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhnvXoMAYkJzRrb4fedoll9DKCpGT4zZZ8o5vC4curY',
  },
};

const topRated = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/top_rated',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlhNzhhZmI1YzI0NjMwNTVjNjYwNjFiODUzNjZlOCIsInN1YiI6IjY1MjI5ZjM1ZWE4NGM3MDBlYjlkYzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhnvXoMAYkJzRrb4fedoll9DKCpGT4zZZ8o5vC4curY',
  },
};

const nowPlaying = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlhNzhhZmI1YzI0NjMwNTVjNjYwNjFiODUzNjZlOCIsInN1YiI6IjY1MjI5ZjM1ZWE4NGM3MDBlYjlkYzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhnvXoMAYkJzRrb4fedoll9DKCpGT4zZZ8o5vC4curY',
  },
};

const popular = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlhNzhhZmI1YzI0NjMwNTVjNjYwNjFiODUzNjZlOCIsInN1YiI6IjY1MjI5ZjM1ZWE4NGM3MDBlYjlkYzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhnvXoMAYkJzRrb4fedoll9DKCpGT4zZZ8o5vC4curY',
  },
};

const requestApi = {
  requestUpComming: upComming,
  requestTopRated: topRated,
  requestNowPlaying: nowPlaying,
  requestPopular: popular,
};

export default requestApi;
