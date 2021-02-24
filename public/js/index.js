const whatSaid = document.getElementById("whatsaid");
const elementsPos = document.querySelectorAll("span.pos");

const cards = document.getElementsByClassName("what-said__item");

// MENU
const buttonNav = document.getElementById("button-nav");
const nav = document.getElementById("nav");
const elementChecket = document.getElementById("nav");
const navCheck = document.getElementById("nav-check");
const wrap = document.getElementById("wrap");

function handleMenuAndSetBackground() {
  navCheck.click();
  nav.classList.toggle("display");
  buttonNav.classList.toggle("icon-close");
}

buttonNav.addEventListener("click", handleMenuAndSetBackground);

//SLIDER

async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 900);
  });
}

async function setClassCard(c) {
  for (let i = 0; i < c.length; i++) {
    c[i].classList.toggle("move");
  }
}

function orderCards(c) {
  c[0].parentNode.appendChild(c[1].cloneNode(true));
  c[0].parentNode.removeChild(c[0]);
}

function moveCard(c) {
  orderCards(c);
  setClassCard(c);
}

async function launcher(c) {
  setClassCard(c);
  await wait();
  moveCard(c);
  changeSelectPos();
}

function changeSelectPos() {
  for (let i = 0; i < elementsPos.length; i++) {
    if (elementsPos[i].classList.contains("select-pos")) {
      elementsPos[i].classList.remove("select-pos");
      if (i + 1 < elementsPos.length) {
        elementsPos[i + 1].classList.add("select-pos");
      } else {
        elementsPos[0].classList.add("select-pos");
      }
      return;
    }
  }
}

function initCard() {
  cards[0].parentNode.insertBefore(
    cards[cards.length - 1].cloneNode(true),
    cards[0]
  );
}
function init() {
  initCard();
  setInterval(() => launcher(cards), 3000);
}

window.onload = init;
