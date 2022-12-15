const mongoose = require('mongoose');
const CadastroDelasSchema = require('../models/cadastroDelasSchema')

// const { query } = require('express');

const abriCadastro = async (req, res) => {
    const { nome, cpf, email, data_nascimento, endereco, idade, sexo, escolha_atividade } = req.body
        const cadastro = new CadastroDelasSchema({
            nome: nome,
            cpf: cpf,
            email: email,
            data_nascimento: data_nascimento,
            endereco: endereco,
            idade: idade,
            sexo: sexo,
            escolha_atividade: escolha_atividade
        })

        const salvarCadastro = await cadastro.save();
        return res.status(201).json({
            statusCode:201,
            message: 'Cadastro criado com sucesso!',
            cadastro: salvarCadastro
        })
}

const todasCadastradas = async (req, res) => {}

const cadastroPorId = async (req, res) => {}

const atualizarCadastroPorId = async (req, res) => {}

const deletarCadastro = async (req, res) => {}

module.exports = {
    abriCadastro,
    todasCadastradas,
    cadastroPorId,
    atualizarCadastroPorId,
    deletarCadastro
}