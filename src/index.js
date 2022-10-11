import advantagesElm from "./components/advantagesSection.js";
import facilityElm from "./components/facilitySection.js";
import "./styles.scss";

let element = document.querySelector(".wrapper");
element.append(advantagesElm());
element.append(facilityElm());
