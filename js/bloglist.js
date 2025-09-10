const POST_PER_PAGE= 4;
let paginaactual = 1;
let posts = [];

function renderPosts(){
  const llista = document.getElementById("llistaPosts");
  llista.innerHTML = "";

  const start = (paginaactual - 1) * POST_PER_PAGE;
  const end = start + POST_PER_PAGE;
  const visiblePosts = posts.slice(start, end);

  visiblePosts.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h3><a href="plantilles/post.html?id=${post.id}">${post.titul}</a></h3>
        <p>${post.data}</p>
        <p>${post.preview || post.contingut.substring(0, 100) + "..."}</p>
      `;
      llista.appendChild(li);

  });

  renderPagination();

}

  function renderPagination(){
    const paginacio = document.getElementById("paginacio");
    paginacio.innerHTML="";

    const totalPagines = Math.ceil(posts.length / POST_PER_PAGE);
    if (paginaactual > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.classList.add("botons");
    prevBtn.onclick = () => {
      paginaactual--;
      renderPosts();
    };
    paginacio.appendChild(prevBtn);
  }

  if (paginaactual < totalPagines) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Següent";
    nextBtn.classList.add("botons");
    nextBtn.onclick = () => {
      paginaactual++;
      renderPosts();
    };
    paginacio.appendChild(nextBtn);
  }

}

fetch("../data/posts.json")
  .then(res => res.json())
  .then(data => {
    posts = data.reverse();
    renderPosts();
  })
  .catch(err => console.error("Error carregant posts:", err));