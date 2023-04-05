const faturamentoDiario = fetch(
    //url JSON
)
.then(response => response.json())
.then(data => {
  //dados do JSON
})
.catch(error => console.error(error));

const diasMes = faturamentoDiario.length;

const menorFaturamento = Math.min(...faturamentoDiario);
// menor valor de faturamento diario

const maiorFaturamento = Math.max(...faturamentoDiario);
// maior valor de faturamento diario

const totalFaturamento = faturamentoDiario.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0);
const mediaMensal = totalFaturamento / diasMes;
// média mensal de faturamento


let diasAcimaMedia = 0;
for (let i = 0; i < diasMes; i++) {
  if (faturamentoDiario[i] > mediaMensal) {
    diasAcimaMedia++;
  }
}
// dias em que superou a media mensal

console.log(`Menor valor de faturamento diário: R$${menorFaturamento}`);
console.log(`Maior valor de faturamento diário: R$${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
