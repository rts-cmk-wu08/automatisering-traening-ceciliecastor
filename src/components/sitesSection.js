import { sites } from "../data.js";

console.log(sites);

const sitesElm = function () {
  const sitesSec = document.createElement("section");
  sitesSec.classList.add("sites", "section");
  sitesSec.innerHTML = `
    <h2 class="h2">${sites.headline}</h2>
  `;
  sites.places.forEach((data) => {
    console.log(data);
    const sitesArticle = document.createElement("article");
    sitesArticle.classList.add("sites__article");
    sitesArticle.innerHTML = `
            <img class="services__img" src="${data.img}" alt="" class="sites__img">
            <h3 class="services__h3 h3">${data.name}</h3>
            <p class="p">${data.city}</p>
        `;
    sitesSec.append(sitesArticle);
  });

  return sitesSec;
};
export default sitesElm;
