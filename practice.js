const parentElement = document.createElement("div");
const paragraphOne = document.createElement("p");
const paragraphTwo = document.createElement("p");
const headingOne = document.createElement("h1");
const headingThree = document.createElement("h3");
const divElement = document.createElement("div");

paragraphOne.textContent = "Hey, I'm red";
paragraphOne.style.color = "red";
headingThree.textContent = "Hey, I'm a blue H3!";
divElement.setAttribute("style", "border: 1px, solid, black; background: pink");
paragraphTwo.textContent = "ME TOO!";

divElement.append(headingOne);
divElement.append(paragraphTwo);
[paragraphOne, headingThree, divElement].forEach((element) => {
  document.body.append(element);
});

// const container = document.querySelector(".container");
// let p = document.createElement("p");
// p.innerHTML = "Hey i'm read!";
// p.style.color = "#ff0400";
// container.appendChild(p);

// let h3 = document.createElement("h3");
// h3.innerHTML = "Im a blue h3";
// h3.style.color = "#0000ff";
// container.appendChild(h3);

// let div = document.createElement("div");
// div.style.border = "#000000";
// div.style.background = "#f567dd";
// let h1 = document.createElement("h1");
// h1.innerHTML = "i'm in a div";
// div.appendChild(h1);

// let p2 = document.createElement("p");
// p2.innerHTML = "ME TOO!";
// div.appendChild(p2);

// container.appendChild(div);

// const pTag = document.createElement("p");
// const h3Tag = document.createElement("h3");
// const p2Tag = document.createElement("p");
// const h1Tag = document.createElement("h1");
// const divElement = document.createElement("div");

// document.body.appendChild(pTag);
// document.body.appendChild(h3Tag);
// document.body.appendChild(divElement);
// divElement.appendChild(p2Tag);
// divElement.appendChild(h1Tag);

// pTag.textContent = "Hey I`m red!";
// h3Tag.textContent = "Im a blue h3";
// h1Tag.textContent = "Im in a div";
// p2Tag.textContent = "me too";
// pTag.style.color = "red";
// h1Tag.style.color = "blue";
