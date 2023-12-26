﻿"use strict";

import randomInteger from "./src/random_integer_fn.js";
import createArray from "./src/createArray/createArray.js";
import handleClick from "./src/toggleAnimation.js";
import convertStringToArrayInteger from "./src/convertStringToArrayInteger/convertStringToArrayInteger.js"

const crazy_button = document.querySelector("button");
const animationGoClassName = "animationGo";
const fnRandomInteger0_100 = randomInteger.bind(this, 0, 100);
const elementsOfBorderRadius = 8;
const defaultValueOfElementBorderRadius = 0;

const arrayDefaultBorderRadius = Array(elementsOfBorderRadius).fill(
  defaultValueOfElementBorderRadius
);

const fnCreateArrayRandomBorderRadius = createArray.bind(
  this,
  elementsOfBorderRadius,
  fnRandomInteger0_100
);

const fnToggleAnimation = handleClick.bind(
  this,
  crazy_button,
  animationGoClassName
);


const convertingValueBorderRadiusToArray = (
  element,
  array = arrayDefaultBorderRadius
) => {
  console.log(element ? convertStringToArrayInteger(element) : array);
};

async function animationBorderRadius(event, element, oldValueBorderRadius) {
  const self = event.currentTarget;
  const oldValueBorderRadius = self.style.borderRadius
  convertingValueBorderRadiusToArray(oldValueBorderRadius);
  const newBorderRadius = fnCreateArrayRandomBorderRadius();
  self.classList.contains(animationGoClassName)
    ? console.log("ON")
    : console.log("OFF");
}

crazy_button.addEventListener("click", fnToggleAnimation);
crazy_button.addEventListener("click", animationBorderRadius);

async function comparison_of_values(el_1, el_2, button) {
  button = document.querySelector("button").style.borderRadius;
  // el_2 = getArrayRandomBorderRadius();
  el_2 = fnCreateArrayRandomBorderRadius();
  const test_fun = () => {
    return [...el_2].map((el) => (el += 3));
  };
  el_1 = (!!button && button) || test_fun();
  if (typeof el_1 === "string") {
    let new_string = el_1.replace(/[%/]/g, "");
    new_string = new_string.replace("  ", " ");
    let new_values_array = new_string.split(" ");
    new_values_array = new_values_array.map((el) => (el = +el));

    el_1 = new_values_array;
  } else {
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function FF() {
    let count = 0;
    while (count < 8) {
      count = 0;
      for (let i = 0; i < el_1.length; i++) {
        if (el_1[i] === el_2[i]) {
          console.log("Равны!!!");
          count++;
          continue;
        } else {
          el_1[i] > el_2[i] ? (el_1[i] -= 1) : (el_1[i] += 1);
        }
        crazy_button.style.borderRadius = `${el_1[0]}% ${el_1[1]}% ${el_1[2]}% ${el_1[3]}% / ${el_1[4]}% ${el_1[5]}% ${el_1[6]}% ${el_1[7]}%`;
        await sleep(0);
      }
    }
  }
  await FF();
  await comparison_of_values();
}

// crazy_button.addEventListener("click", comparison_of_values);
