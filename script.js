//Tipos de dados
/*
* Numeros - 1234
* Texto - 'isso é uma string'
* Booleanos - true ou false
*  
*/

/*
PARA CRIAR VARIAVEL
let = cria variavel de escopo local

PARA CRIAR UMA VARIAVEL
const = cria uma constante
as constantes precisam receber o valor desde o inicio

PARA CRIAR UM ARRAY
let ana = ["Nome1","Nome2","Nome3","Nome4"]

PARA CRIAR UMA LISTA DE LISTAS (MATRIZ)
let matriz = {
    quati : ["listrado", false],
    capivara : ["rio", "grande", true],
    cachorro : [4, "rabo", true] 
}

ao utilizar a tag script com o defer, o javascript é carregado por ultimo, depois que a pagina esta carregada

SAIDA DE DADOS:
Mostra pop up
alert("Olá")

Mostra mensagem no console
console.log("Olá")

ENTREDA DE DADOS;
Escreve o dado informado
promt

LAÇO WHILE - ENQUANTO
*/

/*
let senhaCadastrada = "aviao123";
let senhaEntrada = prompt("Digite sua senha começando com avião");
if (senhaEntrada === senhaCadastrada) {
    
    let nome = prompt("Qual é o seu nome?");        
    let limiteDiario = 300;
    let saqueDia = 0;
    let saldo = 300;
    
    while(saqueDia <= limiteDiario){
        
        let vlrSaque = prompt("Olá " + nome + ". Digite o valor do saque");
        let novoSaldo = saldo - vlrSaque;
        
        if (vlrSaque <= saldo) {
            alert("Saque aprovado. Seu novo saldo é " + novoSaldo);
            saqueDia += vlrSaque;
        }
        else {
            alert("Saldo insulficiente");
        }
    }
    alert("Limite diário atingido");
    
}
else {
    alert("Senha incorreta");
}

*/

let tentativas = 3;
let senha = 1234;
let senhaInfo = prompt("Informe sua senha!");

while (tentativas > 0) {

    if (senhaInfo == senha) {
        
        let nome = prompt("Qual é o seu nome?");
        let limiteDiario = 300;
        let saqueDia = 0;
        let saldo = 300;

        while (saqueDia <= limiteDiario) {

            let vlrSaque = prompt("Olá " + nome + ". Digite o valor do saque");
            let novoSaldo = saldo - vlrSaque;

            if (vlrSaque <= saldo) {
                alert("Saque aprovado. Seu novo saldo é " + novoSaldo);
                saqueDia += vlrSaque;
            }
            else {
                alert("Saldo insulficiente");
            }
        }
        alert("Limite diário atingido");
        tentativas = 0;
    }
    else {
        alert("Reprovado!");
        tentativas--;
    }
}

alert("Conta bloqueada");









