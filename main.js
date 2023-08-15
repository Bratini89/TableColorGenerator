const colors = new Array(
  
  "red",
  "yellow",
  "pink",
  "gray",
  "black",
  "blue",
  "brown",
  "fuchsia",
  "gold",
);

function generarTabla() {
  const numFilas = document.getElementById("numFilas").value;
  const numColumnas = document.getElementById("numColumnas").value;
  const contenedorTabla = document.getElementById("contenedorTabla");

  contenedorTabla.innerHTML = "";
  let colorFondo, colorLetra;
  let tabla = "<table>";

  for (let f = 1; f <= numFilas; f++) {
    tabla += "<tr>";
    for (let c = 1; c <= numColumnas; c++) {
      colorFondo =
        colors[Math.round(Math.random() * (colors.length - 1 - 0) + 0)];
      do {
        colorLetra =
          colors[Math.round(Math.random() * (colors.length - 1 - 0) + 0)];
      } while (colorLetra === colorFondo);

      tabla +=
        "<td style='background-color: " +
        colorFondo +
        "; color: " +
        colorLetra +
        "'>CB</td>";
    }
    tabla += "</tr>";
  }
  tabla += "</table>";
  contenedorTabla.innerHTML = tabla;
}
