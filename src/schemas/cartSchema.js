const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        category: String!
        qty: Int
        createdAt: String!
        images: [String]
    }

    type User {
        _id: ID!
        nombreCompleto: String!
        email: String!
        password: String!
        direccion: String!
        telefono: String!
        fechaRegistro: String!
        tipoUsuario: String!
        metodoPagoPreferido: String!
    }

    type Query {
        products: [Product]!
        users: [User]!
    }

    type Mutation {
        createProduct(
            name: String!,
            description: String!,
            price: Float!,
            category: String!,
            qty: Int,
            createdAt: String!,
            images: [String],
        ): Product!

        updateProduct(
            _id: ID!, 
            price: Float!,
            qty: Int!,
            images: [String],
        ): Product!

        deleteProduct(
            _id: ID!
        ): Product!

        createUser(
            nombreCompleto: String!,
            email: String!,
            password: String!,
            direccion: String!,
            telefono: String!,
            fechaRegistro: String!,
            tipoUsuario: String!,
            metodoPagoPreferido: String!
        ): User!

        updateUser(
            _id: ID!,
            nombreCompleto: String,
            email: String,
            password: String,
            direccion: String,
            telefono: String,
            tipoUsuario: String,
            metodoPagoPreferido: String
        ): User!

        deleteUser(
            _id: ID!
        ): User!
    }
`;

module.exports = typeDefs;
