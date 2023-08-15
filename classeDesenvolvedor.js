const Funcionario = require('./classeFuncionario');

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
    super(nome,idade,cargo);
    this._linguagem = linguagem;
    this._programando = false;
    }

    get linguagem(){
        return this.linguagem;
    }

    set linguagem(novolinguagem){
        this._linguagem = novolinguagem;
    }

    programar(){
        if(this._programando === true){
            console.log("Já está programando");
        }else{
            this._programando = true;
        }
    }
}

module.exports = Desenvolvedor;