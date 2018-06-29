/* Importar o módulo do framework Express */
var express = require('express');

/* Importar o módulo do Consign */
var consign = require('consign');

/* Importar o módulo do BodyParser */
var bodyParser = require('body-parser');

/* Importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* Inicia o objeto do Express */
var app = express();

/* Setar as variáveis 'View Engine e 'Views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurar o middleware express.static */
app.use(express.static('./app/public'));

/* Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/* Configurar o middleware express-validator */
app.use(expressValidator());

/* Efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/* Exportar o objeto app */
module.exports = app;