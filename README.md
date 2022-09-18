# Storyblok NestJS API



## Getting started

This is a poc for storyblok client's nestjs api implementation. There are better ways to do it I guess.
Such as you can Dependency inject the client if you can get around the old storyblok client code. Feel free to fork the repo and try it out.

Change .env.example to .env and update your access token.

To start the server 

```
pnpm start:dev
```

## API Endpoint

```
http://localhost:3001/api/storyblok/story/:folder/:slug
```

## Running e2e test

To run sample end to end test

```
pnpm test:e2e
```
