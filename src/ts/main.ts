import "./../scss/main.scss";

function calculator(num1: number, num2: number, operator: number) {
  return operator(num1, num2);
}

const calcInput = (
  document.getElementById("calcInput") as HTMLElement
).addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hej");

  add();
});

const add = () => {
  const userInput1 = (document.getElementById("num1") as HTMLInputElement)
    .value;
  const userInput2 = (document.getElementById("num2") as HTMLInputElement)
    .value;

  const inputResult = Number(userInput1) + Number(userInput2);

  const result = document.getElementById("resultText");
  result?.innerHTML = inputResult;
};
