let x = [];
x = Math.floor(Math.random() * 100);

console.log(x);
function calcular() {
  var inp = document.getElementById("numero").value;
  if (inp > 100 || inp <= 0) {
    alert("Numero Invalido");
    
  } else if (x < inp) {
    d2.innerHTML = `<p id="d3"> O Numero ${inp} Muito Alto </p>`;
    console.log(inp);
  } else if (x > inp) {
    d2.innerHTML = `<p id="d3"> O Numero ${inp} e Muito Baixo</p>`;
    console.log(inp);
  } else {
    d2.innerHTML = `<p id="d3">Parabéns o numero correto e 🥳 ${x} </p>`;
  }
}
