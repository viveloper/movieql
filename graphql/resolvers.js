const { people, getPersonById } = require('./db');

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getPersonById(id)
  }
};

module.exports = resolvers;
