
const imatges = [

"../images/fotomuntanya1.jpg",
"../images/fotomuntanya2.jpg",
"../images/fotomuntanya3.jpg"

];

const FOTO_PER_PAGE = 4;
let pagina = 1;

const galeria = document.getElementById("galeria");
const paginaActual = document.getElementById("pagina-actual");

function mostrarImatges(){

    galeria.innerHTML = "";
    const inici = (pagina - 1) * FOTO_PER_PAGE;
    const fi = inici + FOTO_PER_PAGE;
    const imatgesPagina = imatges.slice(inici, fi);

  imatgesPagina.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    galeria.appendChild(img);
  });

  paginaActual.textContent = pagina + "/" + (FOTO_PER_PAGE/4);
}


document.getElementById("anterior").addEventListener("click", () => {
  if (pagina > 1) {
    pagina--;
    mostrarImatges();
  }
});


document.getElementById("seguent").addEventListener("click", () => {
  if (pagina < Math.ceil(imatges.length / FOTO_PER_PAGE)) {
    pagina++;
    mostrarImatges();
  }
});


mostrarImatges();


