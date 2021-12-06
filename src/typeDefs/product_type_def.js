const { gql } = require('apollo-server');

const productTypeDef = gql`
    type Product {
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean!
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String        
    }

    input newProductInput {
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean!
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String  
    }

    type Query {
        getProductByProductId(productId: Int!): Product        
        getAllProducts: [Product]        
    }

    type Mutation {
        createProduct(newProduct: newProductInput): Product
        deleteProductByProductId(productId: Int!): Message
        updateProductByProductId(productId: Int!): Product
    }

`;

module.exports = productTypeDef;