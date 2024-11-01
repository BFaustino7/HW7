function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
var string = array.find(elemento => elemento.length>=5)
  return string
}

module.exports = obtenerPrimerStringLargo;
