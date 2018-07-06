# Pacific Expeditors

## Directory

* [Requirements](#requirements)
* [Configuration](#configuration)
* [Installation](#installation)
* [Contributing](/CONTRIBUTING.md)
* [Linting and Type Checking](#linting-and-type-checking)
* [Building From Source](#building-from-source)
* [Versioning](#versioning)
* [Starting the Dev Server](#starting-the-dev-server)
* [Deploying to Production](#deploying-to-production)
* [Upgrading](#upgrading)

## Requirements

* Node.js 9.9.0

## Configuration

Create a .env file after you've checked out this repo and use this as a template:

```
PORT=3000
NODE_ENV=development

GRAPHQL_ENDPOINT=http://localhost:3000/graphql
```

## Installation

Run

```
npm install
```

## Running Tests

There are currently no tests in place, because most of the code does not require state management.

## Linting and Type Checking

Run:

```
npm run flow
```

This will run flow, which is a static type checker.

## Starting the Dev Server

Start the dev server by running:

```
yarn run dev
```

The dev server uses nodemon to automatically restart the server if a change has been made.

## Building

Run:

```
yarn run build
```

This will compile your React code using Webpack into a production-ready bundle.

## Versioning

When you're ready to deploy to production. It's important to make sure you record the changes you have made to your branch and update the version accordingly. Update CHANGELOG.md with a list of features and bugs implemented in your branch. Follow the instructions on this website: http://semver.org/spec/v2.0.0.html for more information about properly versioning the build.

To update the version of the build use:

```
npm version
```

Use this format:

```
0.15.0 2017-05-14 David Sims (david@pacificexpeditors.com)

  * Added documentation on versioning.
  * Changed npm to yarn in documentation.
  * Removed react-mdl and replaced with material-ui.
```

## Deploying to Production

Make sure master is checked out first and up to date. Run:

```
git pull
```

to update your local repo. Then once master is up to date create a new branch by using.

```
git checkout -b my_branch_name
```

As you work commit your code and then push your branch to GitHub and label then as review ready.
Once your code as passed review it will be merged into master and pushed to the Heroku staging server.

## Upgrading

If you need to upgrade a package run:

```
npm update
```
