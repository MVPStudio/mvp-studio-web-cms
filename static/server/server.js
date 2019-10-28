const express = require('express');
const gatsbyExpress = require('gatsby-plugin-express');
const path = require('path');
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

// Todo send to proper api route
app.patch('/api/form', (req, res, next) => {
  formHandler(req.body)
    .then(response => res.send(response))
    .catch(e => next(e));
});

const publicDir = path.join(__dirname, '../public/');

// serve static files before gatsbyExpress
app.use(express.static(publicDir));
app.use(
  gatsbyExpress(path.join(__dirname, '../config/gatsby-express.json'), {
    publicDir,
    template: path.join(publicDir, '/404/index.html'),

    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true,
  }),
);

app.listen(port, () =>
  console.log(`MVP-studio node server listening on port ${port}!`),
);
