const express = require("express");
const rotas = require("express").Router();
const controller = require('../controllers/controllerCadastro');

rotas.post("/incluir", controller.abriCadastro);

rotas.get("/", controller.todasCadastradas);
rotas.get("/:id", controller.cadastroPorId);

rotas.put("/atualizar/:id", controller.atualizarCadastroPorId)
rotas.delete("/:id", controller.deletarCadastro)

module.exports = rotas
