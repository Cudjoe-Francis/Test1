/** External link*/
function MyFunction() {
  document.getElementById("demo").innerText = "This is from an external link";
}

/**alert function */
function display() {
  alert("Hello World!");
}

/**debug in the console */
function debug() {
  console.log(5 + 6);
}

/**Print a content of the page */
function p1() {
  window.print();
}

/**adding two numbers */
function add() {
  let x, y, z;
  x = 5;
  y = 10;
  z = x + y;

  document.getElementById("demo1").innerHTML = z;
}

/**accessing the element of a string */
console.log("Francis"[0]) /**this will output F */


/**picking the last character in a string */
let string = "Coding is fun";
console.log(string[string.length-1])