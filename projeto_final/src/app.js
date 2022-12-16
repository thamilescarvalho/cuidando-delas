require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./config/database')
const rotasDeCadastro = require('./routers/rotasCadastro')
const indexRouters = require('./routers/indexRoutes')

app.use(cors());
app.use(express.json());

database.connect();

app.use("/cadastro", rotasDeCadastro);
app.use(indexRouters)

module.exports = app;
