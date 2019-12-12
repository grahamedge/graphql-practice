const resolvers = {
    Query: {
        greetings: () => greetings,
    },
    Mutation: {
        updateGreeting: (input) => {
            const newGreetings = greetings
            newGreetings.push(input)
            console.log(greetings)
            return greetings
        }
    }
};

module.exports = resolvers;