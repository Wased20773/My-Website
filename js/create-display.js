let navigation = document.querySelector("nav");
let footer = document.querySelector("footer");

const createNavigation = () => {
  let unOrderedList = document.createElement("ul");
  let listOne = document.createElement("li");
  let linkOne = document.createElement("a");
  let listTwo = document.createElement("li");
  let linkTwo = document.createElement("a");
  let listThree = document.createElement("li");
  let linkThree = document.createElement("a");
  let listFour = document.createElement("li");
  let linkFour = document.createElement("a");

  linkOne.textContent = "About me";
  linkTwo.textContent = "Previous Work";
  linkThree.textContent = "Projects";
  linkFour.textContent = "Contact Me";

  // add hrefs
  linkOne.href = "../html/index.html";
  linkTwo.href = "../html/previous-work.html";
  linkThree.href = "../html/projects.html";
  linkFour.href = "../html/contact-me.html";

  // add class
  unOrderedList.setAttribute("class", "nav-list");

  listOne.setAttribute("class", "nav-list-item");
  listTwo.setAttribute("class", "nav-list-item");
  listThree.setAttribute("class", "nav-list-item");
  listFour.setAttribute("class", "nav-list-item");

  linkOne.setAttribute("class", "nav-link");
  linkTwo.setAttribute("class", "nav-link");
  linkThree.setAttribute("class", "nav-link");
  linkFour.setAttribute("class", "nav-link");

  listOne.appendChild(linkOne);
  listTwo.appendChild(linkTwo);
  listThree.appendChild(linkThree);
  listFour.appendChild(linkFour);

  unOrderedList.appendChild(listOne);
  unOrderedList.appendChild(listTwo);
  unOrderedList.appendChild(listThree);
  unOrderedList.appendChild(listFour);

  return unOrderedList;
};

const createFooter = () => {
  footer.textContent = "Copyright Ⓒ 2024 Bryan Vazquez. All rights reserved.";
};

let navLinks = createNavigation();
navigation.appendChild(navLinks);

createFooter();
