
module.exports = class Cliente {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.name;
        this.shopping = obj.shopping;
        this.email = obj.email;
        this.number = obj.number;
        this.idUsuario = obj.idUsuario;
        this.dataCadastro = obj.dataCadastro;
        // this.enderecos = obj.enderecos && obj.enderecos.map(e => new Endereco(e))
    }
}

