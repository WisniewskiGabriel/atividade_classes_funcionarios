class Funcionario{
    constructor(nome,idade,cargo){
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
        this._trabalhando = false;
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

    trabalhar(){
        if(this._trabalhando === true){
            console.log("Já está trabalhando.");
        } else {
            this._trabalhando = true;
        }
    }
}


//let teste = new Funcionario('Teste da Silva','25','lobby boy');
//teste.trabalhar();
//console.log(teste);
//teste.trabalhar();
//console.log(teste);
