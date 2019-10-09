var express = require('express');

app = express();

port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});