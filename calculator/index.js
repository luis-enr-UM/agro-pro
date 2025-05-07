const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

window.addEventListener("keydown", e => {
  const { key } = e;

  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      display.agregarNumero(key);
      break;

    case "+":
      display.computar("sumar");
      break;
    case "-":
      display.computar("restar");
      break;
    case "*":
      display.computar("multiplicar");
      break;
    case "/":
      display.computar("dividir");
      break;
    case "%":
      display.computar("porciento");
      break;
    case "Enter":
      display.computar("igual");
      break;

    case "Backspace":
      display.borrarTodo();
      break;
    case "Delete":
      display.borrar();
      break;

    default:
      console.log(key);
      break;
  }
});

botonesNumeros.forEach(boton => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
