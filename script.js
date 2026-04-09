console.log('Bienvenido!')
console.log('Suma de copias vendias de las diferentes sagas')

function calcularTotal() {
  let copias = document.querySelectorAll(".copias");
  let total = 0;

  copias.forEach(td => {
    let valor = parseFloat(td.textContent);

    if (!isNaN(valor)) {
      if (td.parentElement.style.display !== "none") {
        total += valor;
      }
    }
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function filtrarTabla() {
  let input = document.getElementById("filtro").value.toLowerCase();
  let filas = document.querySelectorAll("#tablaBody tr");

  filas.forEach(fila => {
    let nombre = fila.children[0].textContent.toLowerCase();

    if (nombre.includes(input)) {
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  });

  calcularTotal();
}

window.onload = calcularTotal;