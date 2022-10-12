import headerSection from "./components/header.js";
import servicesElm from "./components/servicesSection.js";
import facilityElm from "./components/facilitySection.js";
import sitesElm from "./components/sitesSection.js";
import advantagesElm from "./components/advantagesSection.js";
import "./styles.scss";

const element = document.querySelector(".wrapper");
element.append(headerSection());

const main = document.createElement("main");
element.append(main);
main.append(servicesElm());
main.append(facilityElm());
main.append(sitesElm());
main.append(advantagesElm());
