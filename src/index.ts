import { GraphQLServer } from 'graphql-yoga';
import * as orm from 'typeorm';

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    hello(name: String): String!
    user(id: ID!): User!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

orm.createConnection().then(() => {
  server.start({port: 5000},() => console.log("Server is running on localhost:5000"));
}).catch(() => {
  console.log("Couldn't connect to the database.")
});