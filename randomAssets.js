let name_list = ['Rafaela Oliveira','Gabriel Santos','Isabella Costa','Lucas Silva','Juliana Pereira','Mateus Ferreira',
'Larissa Rodrigues','Leonardo Almeida','Camila Souza','Pedro Lima','Sofia Gonçalves','Eduardo Carvalho','Vitória Martins',
'Gustavo Mendes','Beatriz Nunes','Thiago Rocha','Manuela Barbosa','João Castro','Laura Fernandes','Alexandre Cunha'];

let job_list = ['Engenheiro de Software','Desenvolvedor Front-end','Desenvolvedor Back-end','Arquiteto de Soluções',
'Analista de Dados','Designer de UI/UX','Gerente de Projeto de Tecnologia','Especialista em Segurança Cibernética',
'Engenheiro de DevOps','Cientista de Dados'];

let department_list = ['Desenvolvimento de Software','Design e Experiência do Usuário (UX/UI)','Gerenciamento de Projetos',
'Suporte Técnico','Segurança da Informação'];

let language_list = ['Python','JavaScript','Java','C#','PHP','C++','Ruby','Swift','TypeScript','Go','Kotlin','Rust','R',
'MATLAB','Perl','Objective-C','Shell Scripting (Bash)','Dart','Scala','Lua'];

function isNullOrEmpty(str){
    return str === null ||
    str === '' ||
    str.length === 0;
}

function getRandomInt(max) {
    return Math.floor(Math.random()*(max-1+1));
}

function getCountOfAssets(list){
    return list.length;
}

function getRandomName(){
    return name_list[getRandomInt(getCountOfAssets(name_list))];
}