// var minhaVar

console.groupCollapsed("Scope");

const a = 12;

if (a === 12) {
  const b = 12;
  console.log("A is", b);
}

// console.log(b)

console.log(minhaVar);
// console.log(segundaVar, "fora da função");
var minhaVar = 123;

function minhaFuncao() {
  console.log(segundaVar, "dentro da função");
  var segundaVar = "essa n aparece";
}

minhaFuncao()
console.groupEnd();
