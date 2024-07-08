# GraphQL Example (using Apollo Server)

[Apollo Server](https://www.apollographql.com/docs/apollo-server) is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.

This example creates the following entities

- Books
- Authors
- Reviews

Books are written by some Author and Authors can write multiple books. A Review is written for one book. The example allows you to query all of these entities, and also allows `add`, `update` and `delete` mutations.

## How to run

```bash
npm run install
node index.js
```
