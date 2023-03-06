let estadiHi = "apagado";

/*Sonidos*/
let sonidoButton = document.querySelector("#click");
let sonidoHiman = document.querySelector("#himan_encendido");

/*Divs*/

let himan = document.querySelector("#himan");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
  secuencia();
});

function secuencia() {
  if (estadiHi == "apagado") {
    estadiHi = "encendido";
    sonidohi();
    himan.classList.add("himan_activo");
  } else {
    estadiHi = "apagado";
    sonidohi();
    himan.classList.remove("himan_activo");
  }
}

function sonidohi() {
  if (sonidoHiman.paused) {
    sonidoButton.play();
    sonidoHiman.play();
  } else {
    sonidoButton.play();
    sonidoHiman.pause();
    sonidoHiman.currentTime = 0;
  }
}

function sonidohi() {
  if (sonidoHiman.paused) {
    sonidoButton.play();
    sonidoHiman.play();
  } else {
    sonidoButton.play();
    sonidoHiman.pause();
    sonidoHiman.currentTime = 0;
  }
}
