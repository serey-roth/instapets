# Social

A basic clone of Instagram with a React-based frontend and a TypeScript, GraphQL API. The application is deployed as a Docker container to a AWS ec2
instance.

Features include
* Create, edit, or delete posts and comments (any text will be detected for toxicity)
* Like posts and comments
* View comments and replies associated to a post
* View a user's account
* Take a photo while creating a post (the photo will be stored in the cloud)
* Load more posts, comments or replies

## Tech Stack
__Front end__: NextJS, ChakraUI, Apollo Client, TypeScript, GraphQL, GraphQL Codegen, React Hook Form, Tensorflow.js (for toxic text detection)

__Back end__: NodeJS, ExpressJS, Apollo Server, TypeScript, GraphQL, TypeORM (for postgres database connection), GraphQL Codegen,
GraphQL Tools, PostgreSQL, Redis, Cloudinary Node SDK (for uploading images to the cloud), Data Loader (for handling batch queries)
