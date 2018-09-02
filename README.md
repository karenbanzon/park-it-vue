# park-it-vue

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

-   Node.js - [Download and install Node.js](https://nodejs.org/en/download/) and the npm package manager, if you don't have it yet.

You also can use [Node Version Manager](https://github.com/creationix/nvm), aka **NVM**, which is simple bash script to manage multiple active Node.js versions.

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Then in any new shell just use the installed version:

```bash
$ nvm install 8 && nvm use 8
```

## Project setup

Once you have the prerequisites installed, it's time to use `npm` to fetch the dependencies of the application.

```bash
npm install
```

### Compile and hot-reload for development

When you have the dependencies installed, you can run the application locally.

```bash
npm run serve
```

### Compile and minify for production

If you want to check out the production build.

```bash
npm run build
```

### Lint and fix files

The project uses ESLint to clean up the code.

```bash
npm run lint
```
