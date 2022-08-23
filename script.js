const body = document.querySelector("body");
const wrapper = document.createElement("div");
wrapper.className = "wrapper";
body.append(wrapper);
const discription = document.createElement("p");
discription.innerHTML =
  "INITIAL LIMITS: Minimum 0 and maximum 20. You can set new limits.";
discription.className = "discription";
wrapper.append(discription);

function createCounter(counter) {
  let currentCount = counter;
  let minValue = 0;
  let maxValue = 20;
  const div = document.createElement("div");
  div.className = "counter";
  wrapper.append(div);

  const minus = document.createElement("p");
  minus.innerHTML = "-";
  minus.className = "minus";
  div.append(minus);

  const number = document.createElement("p");
  number.innerHTML = `${counter}`;
  number.className = "number";
  div.append(number);

  const plus = document.createElement("p");
  plus.innerHTML = "+";
  plus.className = "plus";
  div.append(plus);

  plus.addEventListener("click", function () {
    if (number.innerHTML + 1 > minValue) {
      minus.classList.remove("disabled");
    }
    if (+number.innerHTML === maxValue - 1) {
      plus.classList.add("disabled");
      plus.setAttribute("disabled", "disabled");
    }
    if (number.innerHTML > maxValue - 1) {
      plus.classList.add("disabled");
      plus.setAttribute("disabled", "disabled");
    } else {
      plus.classList.add + "disabled";
      number.innerHTML++;
    }
  });
  minus.addEventListener("click", function () {
    if (+number.innerHTML === maxValue) {
      plus.classList.remove("disabled");
    }
    if (number.innerHTML > minValue) {
      number.innerHTML--;
    } else {
      minus.classList.add("disabled");
      minus.setAttribute("disabled", "disabled");
    }
    if (+number.innerHTML === minValue) {
      minus.classList.add("disabled");
      minus.setAttribute("disabled", "disabled");
    }
  });
  return {
    get currentCount() {
      return currentCount;
    },
    increment: () => {
      currentCount = currentCount + 1;
    },
    decrement: () => {
      currentCount = currentCount - 1;
    },
    changeMinValue: (currentminValue) => {
      minValue = currentminValue;
    },
    changeMaxValue: (currentmaxValue) => {
      maxValue = currentmaxValue;
    },
  };
}

const counter_1 = createCounter(5);
const counter_2 = createCounter(10);
const counter_3 = createCounter(15);

counter_1.increment();
console.log(counter_1.currentCount);
counter_2.decrement();
console.log(counter_2.currentCount);
counter_2.changeMinValue(5);
counter_2.changeMaxValue(12);
