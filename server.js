const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080

require('./routes/full')(app);
require('./routes/medium')(app);
require('./routes/relax')(app);
require('./routes/custom')(app);

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})