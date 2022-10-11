import { hero } from "../data.js";

const headerSection = function () {
  const element = document.createElement("header");
  element.classList.add("header");
  element.innerHTML = `
   <img src="${hero.image}" alt="">
   <article class="header__text">
        <h1 class="h1">${hero.headline}</h1>
        <p class="p">${hero.copy}</p>
        <a href="" class="btn"> <img class="header__img" src="${hero.icon}" alt="">Explore</a>
   </article>
`;
  return element;
};
export default headerSection;
