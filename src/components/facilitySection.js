import { facilities } from "../data.js";
import iconArticle from "./iconArticle.js";

console.log(facilities.options);

const facilityElm = function () {
  const facilitySec = document.createElement("section");
  facilitySec.classList.add("advantages", "basic__four-col");
  facilitySec.innerHTML = `
      <h2 class="basic__h2 basic__h2--four-col">${facilities.headline}</h2>
  `;

  facilities.options.forEach((data) => {
    console.log(facilities);
    facilitySec.append(iconArticle(data, "Show me more"));
  });

  return facilitySec;
};

export default facilityElm;
