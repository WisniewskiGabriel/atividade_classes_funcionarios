const Funcionario = require('./classeFuncionario');
const Gerente = require('./classeGerente');
const Desenvolvedor = require('./classeDesenvolvedor');
const functions = require('./randomAssets');



let obj = instanciarGerente();
console.log(obj);


function instanciarGerente(nome,idade,cargo,departamento){
    if(functions.isNullOrEmpty(nome)){
        nome = functions.getRandomName();
    }
    if(functions.isNullOrEmpty(idade)){
        idade = functions.getRandomAge();
    }
    if(functions.isNullOrEmpty(cargo)){
        cargo = functions.getRandomJob();
    }
    if(functions.isNullOrEmpty(departamento)){
        departamento = functions.getRandomDepartment();
    }
    let objGerente = new Gerente(nome,idade,cargo,departamento);
    return objGerente;
}

function concatValores(obj){
    let str_saida = "";
    let idx = 0;
    for (let prop in obj){
        let str_thisVal = obj[prop];
        let str_thisProp = prop.replace(/_/g,'');
        str_thisProp = str_thisProp.charAt(0).toUpperCase()+str_thisProp.slice(1);
        str_saida += (idx>0?", ":"") +str_thisProp+": "+str_thisVal;
        idx++;
    }
    console.log(str_saida);
}
