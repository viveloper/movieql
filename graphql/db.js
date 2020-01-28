const people = [
  {
    id: 1,
    name: 'viveloper',
    age: 30,
    gender: 'male'
  },
  {
    id: 2,
    name: 'hayana',
    age: 29,
    gender: 'femail'
  }
];

const getPersonById = id => {
  return people.filter(person => person.id === id)[0];
};

module.exports = { people, getPersonById };
