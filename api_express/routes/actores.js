const { Router } = require('express');
const { getActores } = require('../controllers/actores');
const rutas = Router();

rutas.get('/', getActores)

module.exports = rutas;