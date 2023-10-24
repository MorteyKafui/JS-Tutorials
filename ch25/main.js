const section = document.querySelector(".container");

const divEl = document.createElement("div");
// const textNode = document.createTextNode("Hello World!!!");
// divEl.append(textNode);
const paraEl = document.createElement("p");
paraEl.textContent = "This is a sample paragraph from JavaScript";
divEl.appendChild(paraEl);

// section.appendChild(divEl);
section.insertAdjacentElement("afterend", divEl);

console.log(divEl);
