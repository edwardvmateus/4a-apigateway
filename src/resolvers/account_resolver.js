const accountResolver = {
    Query:{
        accountById: async (_, {id} ,  {dataSources}) => {
            return await dataSources.accountAPI.accountById(id);
        },
        accountAll: async (_, __,  {dataSources}) => {
            return await dataSources.accountAPI.accountAll();
        },
    },

    Mutation:{
        logIn: async (_, {credentials},{dataSources}) => {
            return await dataSources.accountAPI.authRequest(credentials);
        }
    }
    
} 

module.exports = accountResolver;