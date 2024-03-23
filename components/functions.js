import chroma from "chroma-js";

export function generarColor() {
  let color;
  do {
    color = chroma.random();
  } while (chroma.contrast(color, "white") < 4.5);
  return color.hex();
}

export function changeLastCharacter(texto) {
  const indiceFinal = texto.length - 1;
  if (texto.charAt(indiceFinal) == ".") {
    return texto.slice(0, indiceFinal);
  } else {
    return texto;
  }
}

export function consultaAPI(setData) {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .catch((err) => err)
    .then((data) => {
      setData({
        cita: changeLastCharacter(data.content),
        autor: data.author,
      });
    });
}
