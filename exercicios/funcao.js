function soma(numero1, numero2) {
  let resultado = numero1 + numero2;
  //   console.log(resultado);
  return resultado;
}

function multiplica(numero1, numero2) {
  let resultado = numero1 * numero2;
  return resultado;
}

let valor_somado = soma(3, 2);
let valor_multiplacado = multiplica(2, 3);

let valor_final = valor_somado + valor_multiplacado;
console.log(valor_final);
