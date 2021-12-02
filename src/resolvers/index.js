const accountResolver = require('./account_resolver');
const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver);

module.exports =resolvers;