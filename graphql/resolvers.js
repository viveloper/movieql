const { getMovies, getMovie, getSuggestions } = require('./db');

const resolvers = {
  Query: {
    movies: (_, { limit, minRating }) => getMovies(limit, minRating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

module.exports = resolvers;
