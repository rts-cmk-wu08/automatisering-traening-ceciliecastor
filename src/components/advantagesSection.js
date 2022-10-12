import { advantages } from "../data.js";
import iconArticle from "./iconArticle.js";

console.log(advantages);
const advantagesElm = function () {
  const advantagesSec = document.createElement("section");
  advantagesSec.classList.add("advantages", "basic__three-col", "section");
  advantagesSec.innerHTML = `
  <h2 class="h2">Our Advantages</h2>
`;
  advantages.forEach((data) => {
    advantagesSec.append(iconArticle(data));
  });

  return advantagesSec;
};

export default advantagesElm;
