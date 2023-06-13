/////////////////////////////////////// EL ANTERIOR FILTRO PERMITE EL USO DE NUMEROS INTERMEDIRAIOS//////////////
// filtroLenguaje.js

const palabrasOfensivas = ['gonorrea', 'palabra2', 'palabra3'];

export function filtrarComentario(comentario) {
  const palabrasComentario = comentario.split(' ');

  for (let i = 0; i < palabrasComentario.length; i++) {
    const palabra = palabrasComentario[i].toLowerCase();

    for (const ofensiva of palabrasOfensivas) {
      const regex = new RegExp(`\\b${obtenerExpresionRegEx(ofensiva)}\\b`, 'gi');
      palabrasComentario[i] = palabrasComentario[i].replace(regex, '*'.repeat(ofensiva.length));
    }
  }

  return palabrasComentario.join(' ');
}

function obtenerExpresionRegEx(palabra) {
  let expresion = '';

  for (let i = 0; i < palabra.length; i++) {
    const caracter = palabra[i];

    if (esLetra(caracter)) {
      expresion += '[a-zA-Z]';
    } else if (esNumero(caracter)) {
      expresion += '\\d';
    } else {
      expresion += `\\${caracter}`;
    }
  }

  return expresion;
}

function esLetra(caracter) {
  return /[a-zA-Z]/.test(caracter);
}

function esNumero(caracter) {
  return /\d/.test(caracter);
}
