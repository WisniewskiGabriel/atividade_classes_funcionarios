
# atividade_classes_funcionarios

Este projeto consiste em um código JavaScript que demonstra a criação de subclasses a partir de uma classe pai. As subclasses são Gerente e Desenvolvedor, derivadas da classe pai Funcionario utilizando o conceito de herança na linguagem JavaScript.

## Funcionalidades de 'Funcionario'
O código define a classe Funcionario com as seguintes propriedades e métodos:

### Métodos
+ seApresentar(): Exibe uma mensagem de apresentação do funcionário com nome e idade e cargo.

+ trabalhar(): Altera para true a propriedade 'trabalhando'.
 

### Propriedades
nome (string): O nome do funcionário.
idade (number): A idade do funcionário.
cargo (string): O cargo do funcionário.
trabalhando (boolena): Indica que o funcionário está trabalhando;

## Funcionalidades de 'Gerente'
Além disso, o código também implementa a classe Gerente, que herda as propriedades e métodos da classe Funcionario e adiciona a seguinte funcionalidade:

### Métodos
+ gerenciar(): Exibe uma mensagem indicando que o gerente está gerenciando equipes

### Propriedades
departamento (string): O nome do departamento.

## Funcionalidades de 'Desenvolvedor'
Além disso, o código também implementa a classe Desenvolvedor, que herda as propriedades e métodos da classe Funcionario e adiciona a seguinte funcionalidade:

### Métodos
+ programar(): Exibe uma mensagem indicando que o desenvolvedor está desenvolvendo.

### Propriedades
linguagem (string): O nome da linguagem usada pelo desenvolvedor.

# Como executar

Para executar o código, você pode utilizar o ambiente Node.js ou um navegador que suporte JavaScript. Certifique-se de ter as classes definidas no mesmo arquivo ou importadas corretamente de arquivos separados.

1. Executando no Node.js
2. Certifique-se de ter o Node.js instalado em seu sistema.
3. Salve o código em sua máquina.
4. Abra o terminal e navegue até a pasta contendo o arquivo.
5. Execute o arquivo JavaScript usando o comando abaixo.

```
node .\main.js
```