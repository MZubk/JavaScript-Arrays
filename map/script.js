const notas = [10, 9.5, 8, 7, 6];

for (let i = 0; i < notas.length; i++) {
  const atualizaNotas = notas[i] + 1;
  notas[i] = atualizaNotas >= 10 ? 10 : atualizaNotas;
}

console.log(`notas atualizadas ${notas} 'for'`); // 10,10,9,8,7

for (let nota of notas) {
  const atualizaNotas = nota + 1;
  const notasAtualizadas = atualizaNotas >= 10 ? 10 : atualizaNotas;
}

console.log(`notas atualizadas ${notas} 'for ...of'`); // 10,10,9,8,7

notas.forEach(function (nota, index, notas) {
  const atualizaNotas = nota + 1;
  notas[index] = atualizaNotas >= 10 ? 10 : atualizaNotas;
});

console.log(`notas atualizadas ${notas} 'forEach'`); // 10,10,9,8,7

const atualizaNotas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(`notas atualizadas ${atualizaNotas} 'map'`); // 10,10,9,8,7
