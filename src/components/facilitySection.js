import { facilities } from "../data.js";
import iconArticle from "./iconArticle.js";

console.log(facilities.options);

const facilityElm = function () {
  const facilitySec = document.createElement("section");
  facilitySec.classList.add("advantages", "basic__four-col", "section");
  facilitySec.innerHTML = `
      <h2 class="h2">${facilities.headline}</h2>
  `;

  facilities.options.forEach((data) => {
    console.log(facilities);
    facilitySec.append(iconArticle(data, "Show me more"));
  });

  return facilitySec;
};

export default facilityElm;
