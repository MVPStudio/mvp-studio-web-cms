const express = require('express');
const gatsbyExpress = require('gatsby-plugin-express');

const app = express();
const port = 3001;
// serve static files before gatsbyExpress
app.use(express.static('../public/'));
app.use(
  gatsbyExpress('../config/gatsby-express.json', {
    publicDir: '../public/',
    template: '../public/404/index.html',

    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true,
  }),
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
