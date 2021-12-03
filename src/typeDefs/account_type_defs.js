const {gql} = require('apollo-server');

const  accountTypeDef = gql`
    type  Account {
        id: Int!
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        is_active: Boolean
        phone_number: String!
        last_login: String
        gender: String

    }

    type Query {
        accountById(id: Int!): Account
        accountAll: [Account]
    }

    input LoginInput {
        username: String!
        password: String!
    }

    type Token {
        key: String!
    }

    type Mutation{
        logIn(credentials: LoginInput!): Token!
    }

    


`;

module.exports = accountTypeDef;