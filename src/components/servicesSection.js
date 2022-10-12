import { services } from "../data.js";

console.log(services);

const servicesElm = function () {
  const servicesSec = document.createElement("section");
  servicesSec.classList.add("services", "section", "basic__three-col");
  services.forEach((data) => {
    const serviceArticle = document.createElement("article");
    serviceArticle.classList.add("services__article");
    serviceArticle.innerHTML = `
            <img class="services__img" src="${data.illustration}" alt="" class="sites__img">
            <h3 class="services__h3 h3">${data.headline}</h3>
            <p class="p">${data.text}</p>
            <a class="link">${data.linktext}</a>
        `;
    servicesSec.append(serviceArticle);
  });

  return servicesSec;
};
export default servicesElm;
