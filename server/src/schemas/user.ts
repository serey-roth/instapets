import gql from "graphql-tag";

export default gql`
    type User @key(fields: "id") @shareable {
        id: ID!
        username: String!
        email: String!
    }

    type Post @key(fields: id) {
        id: ID!
        creator: User!
    }

    type Query {
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): User
        register(username: String!, password: String!): User!
        logout: Boolean!
    }

    extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])
`;