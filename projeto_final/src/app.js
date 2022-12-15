require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./config/mongoConfig.js')
const todasAsRotas = require('./routers/rotasCadastro')

app.use(cors());
app.use(express.json());
app.use("/cadastro", todasAsRotas);

db.connect();

module.exports = app;
