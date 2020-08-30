import "./style.css";

import { greet } from './modules/foo.js';
import { Calc } from './modules/calc.js';
import { sg } from './modules/sg.js';

const calc = new Calc();

function createText() {
  const t = document.createElement('input');
  t.type = 'text';
  return t;
}

function createButton(label, func) {
  const btn = document.createElement('button');
  btn.textContent  = label;
  btn.addEventListener('click', func);
  return btn;
}

function component() {
  const element = document.createElement('div');

  // p
  const p = document.createElement('p');
  p.innerText = greet() + ' ' + JSON.stringify(sg); 

  const v1 = createText();
  const v2 = createText();
  const v3 = createText();
  const addButton = createButton('add', () => {
    v3.value = calc.add(parseInt(v1.value), parseInt(v2.value));
  });
  const subButton = createButton('sub', () => {
    v3.value = calc.sub(parseInt(v1.value), parseInt(v2.value));
  });

  element.appendChild(p);
  element.appendChild(v1);
  element.appendChild(v2);
  element.appendChild(addButton);
  element.appendChild(subButton);
  element.appendChild(v3);

  return element;
}

document.body.appendChild(component());
