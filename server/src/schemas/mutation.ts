import gql from "graphql-tag";

export default gql`
    type User @key(fields: "id", resolvable: false) {
        id: ID!
    }

    type Post @key(fields: "id", resolvable: false) {
        id: ID!
    }

    type Mutation {
        createPost(title: String!, text: String!, creatorId: Int!): Post!
        updatePost(id: Int!, title: String!, text: String!): Post!
        deletePost(id: Int!): Boolean!
        login(username: String!, password: String!): User
        register(username: String!, password: String!): User!
        logout: Boolean!
    }
`;