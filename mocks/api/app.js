var express = require('express');
var { routes } = require('./routes.js');
const COLORS = require('./colors.js');

var app = express();
const port = 9004;

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
      res.send(JSON.stringify(require(rutas[req.url])));
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
