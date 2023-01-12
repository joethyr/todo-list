import alertMe from "./alert";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement('button');

  btn.innerHTML = 'test module output!';
  btn.onclick = alertMe;
  element.appendChild(btn);

  return element;
}
document.body.appendChild(component());