const express = require('express');
const gatsbyExpress = require('gatsby-plugin-express');

const helmet = require('helmet');
const bodyParser = require('body-parser');
const formHandler = require('./formHandler.js');

const app = express();
const port = 8001;
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Logger
// app.use((req, res, next) => {
//   const { method, path, ip } = req;

//   console.log(`${method} ${path} - ${ip}`);
//   next();
// });

app.patch('/api/airtable', async (req, res, next) => {
  const response = await formHandler(req.body);
  res.send(response);
});

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

app.listen(port, () =>
  console.log(`MVP-studio node server listening on port ${port}!`),
);
