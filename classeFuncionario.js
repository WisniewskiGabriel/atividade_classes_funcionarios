class Funcionario{
    constructor(nome,idade,cargo,trabalhando){
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
        this._trabalhando = trabalhando;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    get idade(){
        return this._idade;
    }

    set idade(novaIdade){
        this._idade = novoIdade
    }

    get cargo(){
        return this._cargo;
    }

    set cargo(novoCargo){
        this._cargo = novoCargo
    }

    seApresentar(){
        let strApresentacao =
        "Olá, meu nome é "+this._nome+", "+
        "tenho "+this._idade+" ano"+(Number(this.idade)>1 ? 's' : '')+" "+
        "e trabalho nessa empresa no cargo de "+this._cargo;
        console.log(strApresentacao);
    }

    trabalhar(bool){
        if(this.trabalhando = true && bool){
            console.log("Já está trabalhando.");
        } else {
            this.trabalhando = bool;
        }
    }
}
module.exports = Funcionario;