//problema 1 
console.log ("problema 1")
let indice = 13 
let soma = 0
let k = 0
while (k < indice) {
  k = k+1 
  soma = soma + k
} 
console.log ("soma: ",soma)

//problema 2
console.log ("problema 2")
let procurado = 0
let fib1 = 0
let fib2 = 1
while (procurado > fib2) {
  let temp = fib2 + fib1
  fib1 = fib2 
  fib2 = temp
} 
if (fib2 == procurado ||fib1 == procurado) {
  console.log ("esta na sequencia")
}
else {
  console.log ("não esta na sequencia")
}
//problema 3
console.log ("problema 3")
let dados = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
  ]
let menor = dados[0]["valor"]
let maior = dados[0]["valor"]
let somavalor = 0
for (let i = 0; i < dados.length; i++){
  atual = dados[i]["valor"]
  if (atual < menor){
    menor = atual    
  }  
  if (atual > maior){
    maior = atual   
  }
  somavalor = somavalor + atual
} 
let media = somavalor / dados.length
console.log ("menor",menor)
console.log ("maior",maior)
console.log ("media",media)
let contagem = 0 
for (let i = 0; i < dados.length; i++){
  atual = dados[i]["valor"]
  if (atual > media){
    contagem = contagem + 1 
  }  
}
console.log ("contagem",contagem)
console.log("Problema 4");

let faturamentoestados = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

let totalfaturamento = 0;

// calcular o total de faturamento
for (let estado in faturamentoestados) {
  totalfaturamento += faturamentoestados[estado];
}

// calcular o percentual de cada estado
for (let estado in faturamentoestados) {
  let percentual = (faturamentoestados[estado] / totalfaturamento) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
// problema 5
console.log("problema 5");
let stringoriginal = "exemplo de string"; // string a ser invertida

// inverter a string manualmente
let stringinvertida = "";  // declarando a variável corretamente
for (let i = stringoriginal.length - 1; i >= 0; i--) {
  stringinvertida += stringoriginal[i];  // concatenando os caracteres invertidos
}

console.log("string original:", stringoriginal);
console.log("string invertida:", stringinvertida);

// Filtrar valores positivos
const valoresPositivos = dados.filter(item => item.valor > 0);

// Calcular média dos valores positivos
const somaValores = valoresPositivos.reduce((soma, item) => soma + item.valor, 0);
const media = somaValores / valoresPositivos.length;

// Encontrar menor e maior valor
const menorValor = Math.min(...valoresPositivos.map(item => item.valor));
const maiorValor = Math.max(...valoresPositivos.map(item => item.valor));

// Dias com valor acima da média
const diasAcimaDaMedia = valoresPositivos.filter(item => item.valor > media).map(item => item.dia);

// Exibir resultados
console.log("Média dos valores positivos:", media.toFixed(2));
console.log("Menor valor:", menorValor.toFixed(2));
console.log("Maior valor:", maiorValor.toFixed(2));
console.log("Dias com valor acima da média:", diasAcimaDaMedia);



