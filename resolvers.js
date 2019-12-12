const greetings = [
  {
      hello: 'Hello world',
      goodbye: 'Goodbye world'

  },
  {
      hello: 'Hola',
      goodbye: 'Adios'
  }
]

const resolvers = {
    Query: {
        greetings: () => greetings,
    },
    Mutation: {
        updateGreeting: (_, input) => {
            greetings.push(input)
            console.log(greetings)
            return input
        }
    }
};

module.exports = resolvers;