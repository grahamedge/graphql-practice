const { ApolloServer, gql } = require('apollo-server')
// const express = require('express')


const typeDefs = gql`
    type Greeting {
        hello: String
        goodbye: String
    }

    type Query {
        greetings: [Greeting]
    }
    type Mutation {
        addBook(hello: String, goodbye: String): Greeting
    }
`;

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
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});