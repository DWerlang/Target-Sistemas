const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const total = Object.values(faturamento).reduce((valorInicial, novoValor) => valorInicial + novoValor, 0);
  const percentuais = {};
  
  for (const [estado, valor] of Object.entries(faturamento)) {
    percentuais[estado] = Math.round((valor / total) * 100);
  }
  //loop que divide o valor de cada estado pelo total e multiplica por 100, após arredonda para numero inteiro.
  
  console.log(percentuais);