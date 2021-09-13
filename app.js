const express = require('express');
const app = express();
const port = 3000;

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
