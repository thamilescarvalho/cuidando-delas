require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./config/mongoConfig.js')
const todasAsRotas = require('./routers/rotasCadastro')
const indexRouter = require('./routers/indexRoutes')

app.use(cors());
app.use(express.json());
app.use("/cadastro", todasAsRotas);

db.connect();
app.use(indexRouter)

module.exports = app;
