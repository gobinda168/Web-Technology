const calculate = document.querySelector(".calculate-btn");
const input = document.querySelector(".num");
const result = document.querySelector("#result");
const h3 = document.querySelector("h3");
const div = document.querySelector(".ct");

calculate.style.display = "none";
h3.style.display = "none";

//methods
const arithmatic = () => {
  let { value } = input,
    op = value.indexOf("*") < 0 ? value.indexOf("/") : value.indexOf("*");
  let num1 = parseInt(value.slice(0, op)),
    num2 = parseInt(value.slice(op + 1, value.length)),
    res = value[op] == "*" ? num1 * num2 : num1 / num2;
  result.innerHTML = res ? res : "Input field is empty";
  result.style.color = "salmon";
  input.value = "";
  h3.style.display = "block";
};

// Event listners
calculate.addEventListener("click", arithmatic);
input.addEventListener("keydown", e => {
  result.innerHTML = "";
  h3.style.display = "none";
  if (e.key == "Enter") {
    calculate.click();
    div.style.display = "none";
  }
});
h3.addEventListener("click", () => {
  div.style.display = "block";
  h3.style.display = "none";
});
