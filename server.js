const express = require('express');
  app = express();
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./todoList/routes/todoListRoutes');
routes(app);

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })
