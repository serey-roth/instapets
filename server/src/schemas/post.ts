import gql from "graphql-tag";

export default gql`
    type Post @key(fields: "id") @shareable {
        id: ID!
        title: String!
        text: String!
        createdAt: String!
        updatedAt: String!
        creatorId: Int!
    }

    type User @key(fields: "id") {
        id: ID!
        posts: [Post!]!
    }

    extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])
`;