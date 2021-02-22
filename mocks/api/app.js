var express = require('express');
var bodyParser = require('body-parser');
var { routes } = require('./routes.js');
const COLORS = require('./colors.js');
const USER = {
  user: 'user',
  password: 'aA123',
};

var app = express();
app.use(bodyParser.json());
const port = 9006;

const expressPost = (ruta, rutas) => {
  console.log(
    COLORS.Reset,
    COLORS.FgWhite,
    'Registered route:  ' + COLORS.FgGreen,
    ruta,
    COLORS.FgWhite + ' | Data: ' + COLORS.FgMagenta,
    rutas[ruta]
  );
  app.post(ruta, function (req, res) {
    setTimeout(() => {
      if (req.url == Object.keys(routes.LOGIN)[0] && Object.keys(req.body).length > 0) {
        const { user, password } = req.body;
        if (user == 'user' && password == 'aA123') {
          res.send(JSON.stringify(require(rutas[req.url])));
        } else {
          res.status(401).json({ error: true, messageError: 'User or password incorrect.' });
        }
      } else {
        res.send(JSON.stringify(require(rutas[req.url])));
      }
    }, 1000);
  });
};

const addRoutes = (nameRoutes, routesObj) => {
  console.log(COLORS.Underscore, COLORS.FgCyan, `\n --- ${nameRoutes} endPoints --- \n`);
  for (var ruta in routesObj) {
    expressPost(ruta, routesObj);
  }
};

Object.keys(routes).forEach((key) => addRoutes(key, routes[key]));

app.listen(port, () => {
  console.log(COLORS.FgBlue, `\n-----------------> Mocks app listening on port ${port}!`, COLORS.Reset);
});
