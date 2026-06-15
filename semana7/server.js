const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', function(req, res) {
  res.json(reportes);
});

app.post('/reportes', function(req, res) {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };
  reportes.push(reporte);
  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, function() {
  console.log('Servidor ejecutándose en puerto 3000');
});