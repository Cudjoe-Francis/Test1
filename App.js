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
//console.log("Francis"[0]) /**this will output F */

/**picking the last character in a string */
let string = "Coding is fun";
//console.log(string[string.length-1])

//var, const and let are both used to declare a variable
let x, y;
x = 7;
y = x * 28;
//console.log(y);

let carname = "Land cruiser";

//object in Javascript
const car = {
  type: "Toyota",
  model: "Yaris",
  year: 2011,
  color: "red",
};

car.color = "white";
car.owner = "Matthew";
car.driver = "Mr Man";

//object in Javascript
const arr = ["name", "ssn", "date of birth", "address"];

//using filter()
const fruitPrice = [7, 4, 10, 19, 25, 8, 5, 14, 12];

let filteredArray = fruitPrice.filter((element) => element > 10);

//console.log(filteredArray)

//exercise
//Filter out all the people whoa re not 18+ years old

const age_1 = [18, 20, 16, 15, 21]; //[18, 20, 21]

//let filter_age_1 = age_1.filter(element => element >= 18)
//console.log(filter_age_1)

const age_2 = [16, 17, 14, 15, 19]; //[19]

//let filter_age_2 = age_2.filter(element => element >= 18)
//console.log(filter_age_2)

const age_3 = [20, 22, 26, 16, 20]; //[20, 22, 26, 19]

//let filter_age_3 = age_3.filter(element => element >= 18)
//console.log(filter_age_3)

let age_filter;

const ageFilter = () => {
  age_filter = age.filter((element) => element > 18);
};

//console.log(ageFilter())
let new_age = [];
for (let x = 0; x < age_1.length; x++) {
  if (age_1[x] >= 18) {
    new_age.push(age_1[x]);
  }
}
//console.log(new_age)



//sign up user challenge

const users = [];

const signUp = (user) => {
  users.push(user)
}

signUp({
  name: "John Doe",
  email: "example@gmail.com",
  password: "testing123",
  subscription: "VIP+",
  lessonsCompleted: [1, 2, 3]
})

//console.log(users[0])

document.querySelector('h1').innerHTML = "H1 Text changed"