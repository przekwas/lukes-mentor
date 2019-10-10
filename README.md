# Luke'ss Mentoring Project
This project is to learn some event planning, scheduling, and other fun bits of code as a "meetup" stype project.  And to help my boys when they ask me questions when they works on theirs!

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev:server`, and the server will start on port 8080 (http://localhost:8080). Webpack will watch the files. If you only change server files, you *shouldn't* need to refresh.

In order to run the client, use `npm run dev:client`, and the client will use webpack-dev-server on port 3000 (http://localhost:3000).