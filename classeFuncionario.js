class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    get nome(){
        return this.nome;
    }

    set nome(novoNome){
        this.nome = novoNome
    }

    get idade(){
        return this.idade;
    }

    set idade(novaIdade){
        this.idade = novoIdade
    }

    get cargo(){
        return this.cargo;
    }

    set cargo(novoCargo){
        this.cargo = novoCargo
    }
}