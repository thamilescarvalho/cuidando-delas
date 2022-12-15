const mongoose = require('mongoose');

const cadastroDelasSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String, 
        required: true
    },
    cpf: {
        type: Number, 
        required: true
    },
    data_nascimento: {
        type: Number,
        require: true
    },
    email: {
        type: String, 
        required: true
    },
    endereco : {
        type: String,
        require: true
    },
    idade: {
        type: Number
    },
    sexo: {
        type: String,
        require: true
    },
    escolha_atividade: {
        saude_fisica: Boolean,
        saude_mental: Boolean,
    }
})
module.exports = mongoose.model("cadastro", cadastroDelasSchema)