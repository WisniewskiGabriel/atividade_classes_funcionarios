const Funcionario = require('./classeFuncionario');
const Gerente = require('./classeGerente');
const Desenvolvedor = require('./classeDesenvolvedor');


obj = new Funcionario('a','b','c');
concatValores(obj);

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