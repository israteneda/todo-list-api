// TODO: Implementar el CRUD completo de las tareas.
// TODO: Agregar pruebas de Expressjs
// TODO: Autenticacion de usuarios, revisar passport

const express = require('express');
  app = express();
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and SQLite API' })
})
