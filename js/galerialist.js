
const imatges = [

"../images/fotomuntanya1.jpg",
"../images/fotomuntanya2.jpg",
"../images/fotomuntanya3.jpg",
"../images/montseny2.jpg",
"../images/calamardo.jpg"

];

const FOTO_PER_PAGE = 8;
let pagina = 1;

const galeria = document.getElementById("galeria");
const paginaActual = document.getElementById("pagina-actual");

const lightbox = document.getElementById("lightbox");
const imatgeGran = document.getElementById("imatge-gran");
const tancar = document.getElementById("tancar");

function mostrarImatges(){

    galeria.innerHTML = "";
    const inici = (pagina - 1) * FOTO_PER_PAGE;
    const fi = inici + FOTO_PER_PAGE;
    const imatgesPagina = imatges.slice().reverse().slice(inici, fi);

  imatgesPagina.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    galeria.appendChild(img);

    img.addEventListener("click", () => {
      imatgeGran.src = src;
      lightbox.classList.remove("ocult");
    });

  });



  paginaActual.textContent = pagina + "/" + Math.ceil(imatges.length/FOTO_PER_PAGE);
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


tancar.addEventListener("click", () => {
  lightbox.classList.add("ocult");
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("ocult")) {
    if (e.key === "Escape") {
      lightbox.classList.add("ocult"); // tancar amb ESC
    }
    
  }
});


lightbox.addEventListener("click", (e) => {
  if (e.target !== imatgeGran) {
    lightbox.classList.add("ocult");
  }
});

mostrarImatges();
