const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../../data/posts.json")
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id === id);
    const article = document.getElementById("article");

    if (post) {
      article.innerHTML = `
        <h2>${post.titul}</h2>
        ${post.contingut}
      `;
    } else {
      article.innerHTML = "<p>Article no trobat.</p>";
    }
  })
  .catch(err => console.error("Error cargant posts:", err));
