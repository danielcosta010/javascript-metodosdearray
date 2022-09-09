// Metodo filter
// filtrando numeros

const arr = [10, 9, 20, 30, 1, 3, 22]

const res = arr.filter(maior => {
  return maior > 10;
})
console.log(res);
console.log(arr);

// filtrando strings

const arrayString = ['Daniel', 'Polliana', 'Isabella', 'Maria', 'Rute', 'Cis', 'Joaquim'];

const resultado = arrayString.filter(nome => nome.length > 4)

console.log(resultado);
console.log(arrayString);

// Metodo Map

var numbers = [1, 4, 9];
//var roots = numbers.map(function name(numero) {
 // return numero * 3 )}


  // ou melhor 
var roots = numbers.map(x => x * 3);

console.log(numbers);
console.log(roots);

// Metodo forEach 

const arrayCarros = ['Corolla', 'Commander', 'X6', 'Onix', 'Gol', 'Compass']

arrayCarros.push('Cobalt')

arrayCarros.forEach(carros => console.log(carros))