const accountResolver = {
    Query:{
        accountById: async (_, {id} ,  {dataSources}) => {
            return await dataSources.accountAPI.accountById(id);
        }
    }
    
} 

module.exports = accountResolver;