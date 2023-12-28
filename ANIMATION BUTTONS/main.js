﻿"use strict";

import randomInteger from "./src/random_integer_fn.js";
import createArray from "./src/createArray/createArray.js";
import handleClick from "./src/toggleHandleClick.js";
import convertStringToArrayInteger from "./src/convertStringToArrayInteger/convertStringToArrayInteger.js";
import sleep from "./src/sleepAsyncFn.js";

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
  return element ? convertStringToArrayInteger(element) : array;
};

async function animationBorderRadius(
  _event,
  fnConvertToArray = convertingValueBorderRadiusToArray,
  fnNewArray = fnCreateArrayRandomBorderRadius,
  ms = 10
) {
  const self = document.querySelector('button')
  // console.log(self.classList.contains('animationGo'))
  // console.log("HI!!")
  const oldValueBorderRadius = self.style.borderRadius;
  const arrayOldValueBorderRadius = fnConvertToArray(oldValueBorderRadius);
  const arrayNewValueBorderRadius = fnNewArray();
 async function planAnimation() {
    let count = 0;
    while (count < 8) {
      count = 0;
      for (let i = 0; i < arrayOldValueBorderRadius.length; i++) {
        if (
          arrayOldValueBorderRadius.length !== arrayNewValueBorderRadius.length
        ) {
          arrayOldValueBorderRadius.push(0)
          break
        }
        if (!self.classList.contains('animationGo')){ 
          console.log("New test !!!")
          let count = 0;
          while(count < 8){
            console.log(count)
            console.log('')
            await sleep(1000)
            count = 0;
            switch (0) {
              case arrayOldValueBorderRadius[0]:
                count++
              case arrayOldValueBorderRadius[1]:
                count++
              case arrayOldValueBorderRadius[2]:
                count++
              case arrayOldValueBorderRadius[3]:
                count++
              case arrayOldValueBorderRadius[4]:
                count++
              case arrayOldValueBorderRadius[5]:
                count++
              case arrayOldValueBorderRadius[6]:
                count++
              case arrayOldValueBorderRadius[7]:
                count++
          }
          console.log(count)
        }
        if (arrayOldValueBorderRadius[i] === arrayNewValueBorderRadius[i]) {
          count++;
          continue;
        } else {
          arrayOldValueBorderRadius[i] > arrayNewValueBorderRadius[i]
            ? (arrayOldValueBorderRadius[i] -= 1)
            : (arrayOldValueBorderRadius[i] += 1);
        }
        self.style.borderRadius = `${arrayOldValueBorderRadius[0]}% 
        ${arrayOldValueBorderRadius[1]}% 
        ${arrayOldValueBorderRadius[2]}%
        ${arrayOldValueBorderRadius[3]}% / 
        ${arrayOldValueBorderRadius[4]}% 
        ${arrayOldValueBorderRadius[5]}% 
        ${arrayOldValueBorderRadius[6]}% 
        ${arrayOldValueBorderRadius[7]}%`;
        await sleep(ms)
      }
    }
  }
  if (!self.classList.contains('animationGo')){ 
    return
  }
  console.log("Hi!!!")
  await planAnimation()
  await animationBorderRadius()
}

crazy_button.addEventListener("click", fnToggleAnimation)
crazy_button.addEventListener("click", animationBorderRadius);

