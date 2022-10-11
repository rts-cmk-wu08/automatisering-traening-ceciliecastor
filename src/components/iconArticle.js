const iconArticle = function (data, link) {
  const article = document.createElement("article");
  article.innerHTML = `
        <img src="${data.icon}" alt="icon"/>
            <h4 class="h4">${data.headline}</h4>
            <p class="p">${data.text}</p>
            ${link ? `<a class="link" href="#">${link}</a>` : ""}
    `;

  return article;
};

export default iconArticle;
