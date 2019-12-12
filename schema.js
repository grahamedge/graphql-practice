const { gql } = require('apollo-server');

const typeDefs = gql`
    type Greeting {
        hello: String
        goodbye: String
    }

    type Query {
        greetings: [Greeting]
    }

    type Mutation {
        updateGreeting(hello: String, goodbye: String): Greeting
    }
`;

module.exports = typeDefs;