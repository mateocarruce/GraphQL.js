const { ApolloServer, gql } = require('apollo-server');

// Definir el esquema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Definir los resolvers
const resolvers = {
  Query: {
    hello: () => "¡Hola Mundo desde GraphQL- Mateo Carrasco!",
  },
};

// Crear el servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar el servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor listo en ${url}`);
});
