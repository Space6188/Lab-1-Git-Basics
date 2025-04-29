function solve(a, b, c) {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Error. Expected valid real numbers.");
    return;
  }

  if (a === 0) {
    console.log("Error. a cannot be 0");
    return;
  }

  const d = b * b - 4 * a * c;
  console.log(`Equation is: (${a}) x² + (${b}) x + (${c}) = 0`);
  if (d < 0) {
    console.log("There are 0 roots");
  } else if (d === 0) {
    const x = -b / (2 * a);
    console.log(`There is 1 root: x = ${x}`);
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`There are 2 roots: x1 = ${x1}, x2 = ${x2}`);
  }
}

document.getElementById("quadratic-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  const result = document.getElementById("result");
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.textContent = "Error. Expected valid real numbers.";
    return;
  }

  if (a === 0) {
    result.textContent = "Error. a cannot be 0";
    return;
  }

  const discriminant = b * b - 4 * a * c;
const formattedEquation = `Equation is: (${a}) x² + (${b}) x + (${c}) = 0`;
const rootInfo =
  discriminant < 0
    ? "There are 0 roots"
    : discriminant === 0
    ? `There is 1 root: x = ${-b / (2 * a)}`
    : (() => {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `There are 2 roots: x1 = ${x1}, x2 = ${x2}`;
      })();

result.textContent = `${formattedEquation}\n${rootInfo}`;

})
