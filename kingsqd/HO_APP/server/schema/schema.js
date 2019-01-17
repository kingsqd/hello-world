const graphql = require('graphql');

const {GraphQLObjectType, GraphQLObjectString} = graphql;

const UserType = new GraphQLObjectType ({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLObjectString},
        name: {type: GraphQLObjectString},
        occupation: {type: GraphQLObjectString}
    })
});