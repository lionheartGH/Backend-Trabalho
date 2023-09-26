const Cliente = require('../model/Cliente');
var idAtual = 2;

var listaDeClientes = [
    new Cliente({
        id:1,
        name:"Jose Pereira",
        shopping: '4',
        email: 'jose@exemplo.com',
        number:'21999887766',
        idUsuario: 1,
        dataCadastro: new Date('2022-01-15T18:39:00.540Z').toISOString()
    }),
    new Cliente({
        id:2,
        name:"Camila Silva",
        shopping: '7',
        email:'jose@exemplo.com',
        number:'21999887777',
        idUsuario: 1,
        dataCadastro: new Date('2022-01-15T18:39:00.540Z').toISOString()
    })
];

function obterTodos(){
    return listaDeClientes;
}

function obterPorId(id){
    return listaDeClientes.find(p => p.id == id);
}

function cadastrar(obj){
    var cliente = new Cliente(obj);
    idAtual++;
    cliente.id = idAtual;
    listaDeClientes.push(cliente);

    return cliente;
}

function atualizar(cliente){
    var indice = listaDeClientes.findIndex(p => p.id == cliente.id);
    
    if(indice < 0){
        return;
    }

    listaDeClientes.splice(indice, 1, cliente);
    return cliente;
}

function deletar(id){
    var indice = listaDeClientes.findIndex(p => p.id == id);
    if(indice < 0){
        throw Error(`Não foi possível localizar o cliente com id ${id} para ser excluido.`);
    }

    // Deleta de dentro do array a posicição especifica
    listaDeClientes.splice(indice, 1);
}


module.exports = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}