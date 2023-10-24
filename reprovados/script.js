const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovado = alunos.filter((_, i) => {
  return medias[i] < 7;
});

const aprovado = alunos.filter((_, i) => {
  return medias[i] >= 7;
});

const reprovados = reprovado.join(", ");
const aprovados = aprovado.join(", ");

console.log(`alunos reprovados: ${reprovados}`);
console.log(`alunos aprovados: ${aprovados}`);
