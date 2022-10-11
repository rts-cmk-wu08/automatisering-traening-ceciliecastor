let facilityArticle = function (facilities) {
  let element = document.createElement("article");
  element.classList.add("facilities");

  element.innerHTML = `
        <img src="${facilities.icon}" alt="icon" />
            <h1>${facilities.headline}</h1>
            <p>${facilities.text}</p>
    `;

  return element;
};

export default facilityArticle;
