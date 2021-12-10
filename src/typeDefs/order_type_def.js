const { gql } = require('apollo-server');

const orderTypeDef = gql `

    type Order {
        orderId: Int!
        customerId: Int!
        orderTotalPrice: Int!
        productList: [Product]
        orderDate: String
        sellerId: Int
    }
    
    type Product {
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean
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
        isProductInStock: Boolean
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String  
    }

    input newOrderInput {
        orderId: Int!
        customerId: Int!
        orderTotalPrice: Int!
        productList: [newProductInput]
        orderDate: String
        sellerId: Int
    }

    type Message {
        Message: String
    }

    type Query {
        getOrderByOrderId(orderId: Int!): Order        
        getAllOrder: [Order]        
    }

    type Mutation {
        createOrder(newOrder: newOrderInput): Order
        deleteOrderByOrderId(orderId: Int!): Message  
    }
`;

module.exports = orderTypeDef;