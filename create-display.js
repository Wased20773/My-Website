let navigation = document.querySelector(".divider-to-nav");
let footer = document.querySelector("footer");

const createNavigation = () => {
  let myNav = document.createElement("nav");

  // For Side Bar
  let sideUnOrderedList = document.createElement("ul");
  let listOneSide = document.createElement("li");
  let linkOneSide = document.createElement("a");
  let listTwoSide = document.createElement("li");
  let linkTwoSide = document.createElement("a");
  let listThreeSide = document.createElement("li");
  let linkThreeSide = document.createElement("a");
  let listFourSide = document.createElement("li");
  let linkFourSide = document.createElement("a");
  let exitList = document.createElement("li");
  let exitLink = document.createElement("a");
  let mySvgExit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let pathExit = document.createElementNS("http://www.w3.org/2000/svg", "path");

  // For Nav Bar

  let unOrderedList = document.createElement("ul");
  let listOne = document.createElement("li");
  let linkOne = document.createElement("a");
  let listTwo = document.createElement("li");
  let linkTwo = document.createElement("a");
  let listThree = document.createElement("li");
  let linkThree = document.createElement("a");
  let listFour = document.createElement("li");
  let linkFour = document.createElement("a");
  let hamburgerButtonList = document.createElement("li");
  let hamburgerButtonLink = document.createElement("a");
  let mySvgSide = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let pathSide = document.createElementNS("http://www.w3.org/2000/svg", "path");

  /* Starting to add stuff to Side Bar */

  linkOneSide.textContent = "About me";
  linkTwoSide.textContent = "Previous Work";
  linkThreeSide.textContent = "Projects";
  linkFourSide.textContent = "Contact Me";

  // add hrefs
  linkOneSide.href = "../index.html";
  linkTwoSide.href = "../previous-work.html";
  linkThreeSide.href = "../projects.html";
  linkFourSide.href = "../contact-me.html";
  exitLink.href = "#";

  // add attribute
  sideUnOrderedList.setAttribute("class", "sidebar");

  listOneSide.setAttribute("class", "nav-list-item");
  listTwoSide.setAttribute("class", "nav-list-item");
  listThreeSide.setAttribute("class", "nav-list-item");
  listFourSide.setAttribute("class", "nav-list-item");

  linkOneSide.setAttribute("class", "nav-link");
  linkTwoSide.setAttribute("class", "nav-link");
  linkThreeSide.setAttribute("class", "nav-link");
  linkFourSide.setAttribute("class", "nav-link");

  exitLink.setAttribute("aria-label", "Exits side navigation bar");

  myNav.setAttribute("class", "nav-container");

  exitLink.addEventListener("click", exitSidebar);

  /* add the attributes for the svgExit */
  createSvgExitButton(mySvgExit, pathExit, exitLink, exitList);

  /* -------------- */

  exitLink;

  listOneSide.appendChild(linkOneSide);
  listTwoSide.appendChild(linkTwoSide);
  listThreeSide.appendChild(linkThreeSide);
  listFourSide.appendChild(linkFourSide);

  sideUnOrderedList.appendChild(exitList);
  sideUnOrderedList.appendChild(listOneSide);
  sideUnOrderedList.appendChild(listTwoSide);
  sideUnOrderedList.appendChild(listThreeSide);
  sideUnOrderedList.appendChild(listFourSide);

  myNav.appendChild(sideUnOrderedList);

  /* Now adding to the Nav bar for big/medium screens */

  linkOne.textContent = "About me";
  linkTwo.textContent = "Previous Work";
  linkThree.textContent = "Projects";
  linkFour.textContent = "Contact Me";

  // add hrefs
  linkOne.href = "../index.html";
  linkTwo.href = "../previous-work.html";
  linkThree.href = "../projects.html";
  linkFour.href = "../contact-me.html";
  hamburgerButtonLink.href = "#";

  // add class
  unOrderedList.setAttribute("class", "nav-list");

  listOne.setAttribute("class", "nav-list-item hide-on-mobile");
  listTwo.setAttribute("class", "nav-list-item hide-on-mobile");
  listThree.setAttribute("class", "nav-list-item hide-on-mobile");
  listFour.setAttribute("class", "nav-list-item hide-on-mobile");

  linkOne.setAttribute("class", "nav-link");
  linkTwo.setAttribute("class", "nav-link");
  linkThree.setAttribute("class", "nav-link");
  linkFour.setAttribute("class", "nav-link");

  hamburgerButtonList.setAttribute("class", "burger-button");
  hamburgerButtonLink.setAttribute("aria-label", "Open side navigation bar");

  hamburgerButtonList.addEventListener("click", showSidebar);

  /* add the attributes for the svgSide */
  createSvgBurgerButton(
    mySvgSide,
    pathSide,
    hamburgerButtonLink,
    hamburgerButtonList
  );

  listOne.appendChild(linkOne);
  listTwo.appendChild(linkTwo);
  listThree.appendChild(linkThree);
  listFour.appendChild(linkFour);

  unOrderedList.appendChild(listOne);
  unOrderedList.appendChild(listTwo);
  unOrderedList.appendChild(listThree);
  unOrderedList.appendChild(listFour);
  unOrderedList.appendChild(hamburgerButtonList);

  myNav.appendChild(unOrderedList);

  return myNav;
};

const createSvgExitButton = (mySvgExit, pathExit, exitLink, exitList) => {
  // Set SVG attributes
  mySvgExit.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  mySvgExit.setAttribute("height", "40px");
  mySvgExit.setAttribute("viewBox", "0 -960 960 960");
  mySvgExit.setAttribute("width", "40px");
  mySvgExit.setAttribute("fill", "#e8eaed");

  // Set Path attributes
  pathExit.setAttribute(
    "d",
    "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
  );

  // Append Path to SVG
  mySvgExit.appendChild(pathExit);

  // Append SVG to the provided elements
  exitLink.appendChild(mySvgExit);
  exitList.appendChild(exitLink);
};

const createSvgBurgerButton = (
  mySvgSide,
  pathSide,
  hamburgerButtonLink,
  hamburgerButtonList
) => {
  // Set SVG attributes
  mySvgSide.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  mySvgSide.setAttribute("height", "40px");
  mySvgSide.setAttribute("viewBox", "0 -960 960 960");
  mySvgSide.setAttribute("width", "40px");
  mySvgSide.setAttribute("fill", "#e8eaed");

  // Set Path attributes
  pathSide.setAttribute(
    "d",
    "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
  );

  // Append Path to SVG
  mySvgSide.appendChild(pathSide);

  // Append SVG to the provided elements
  hamburgerButtonLink.appendChild(mySvgSide);
  hamburgerButtonList.appendChild(hamburgerButtonLink);
};

const createFooter = () => {
  footer.textContent = "Copyright Ⓒ 2024 Bryan Vazquez. All rights reserved.";
};

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function exitSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

let nav = createNavigation();
navigation.appendChild(nav);

createFooter();
