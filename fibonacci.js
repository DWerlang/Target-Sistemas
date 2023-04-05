function pertenceFibonacci(numero) {
  let fibonacciAnterior = 0;
  let fibonacciAtual = 1;
  
  while (fibonacciAtual < numero) {
    let fibonacciProximo = fibonacciAnterior + fibonacciAtual;
    fibonacciAnterior = fibonacciAtual;
    fibonacciAtual = fibonacciProximo;
  }
  
  return fibonacciAtual === numero || numero === 0;
}

console.log(pertenceFibonacci(/*numero para verificao*/))