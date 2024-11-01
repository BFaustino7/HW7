function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  //var par = num => num%2 === 0
  var filtro = array.filter(num => num%2 === 0)
  return filtro
}

module.exports = filtrarNumerosPares;
