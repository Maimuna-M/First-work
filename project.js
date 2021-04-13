function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(0); //a JavaScript function that accepts a string
  // as a parameter and converts the first letter of each word of the string in upper case
}
console.log(capitalizeFirstLetter('rice, beans, fanta, coke')); 

// function myFunction() {
//     var str = "rice, beans, fanta, coke";
//     var res = str.slice();
//     document.getElementById("demo").innerHTML = str.toUpperCase();
//     console.log(str.firstLetter)
//   }
  
    typeof "muna" //a JavaScript function which accepts an argument and returns the type.
    console.log(typeof "muna");
 
    var l = [5, 6, 7]; //a JavaScript program to find the area of a triangle 
    //where lengths of the three of its sides are 5, 6, 7.
    var b;
    var a = l + b;   
    console.log(a)

    var a = [1000 + 888] //a JavaScript function that reverse a number
      toString() 
      console.log(1000 + 888)

  var txt = "welcomeToNewWorldEveryone"//a JavaScript function that accepts a string as a parameter 
  //and counts the number of vowels within the string.
  var sln = txt.length
  console.log(sln)

function test_prime (n) { //a JavaScript function that accepts a number 
  //as a parameter and check the number is prime or not
  if (n == 1){
    return false;
  }
  else if (n ===2){
    return true;
  } else {
    for(var x =2; x < n; x++) {
      if(n % x === 0){
        return false;
      }
    }
    return true;
  }  
}console.log(test_prime(37));

function isPerfectNumber(inputNumber) { //a JavaScript function which says whether a number is perfect. 
  var sum = 0;
  for (var i = 1; i < inputNumber; i++) {
    if (inputNumber % i == 0) {
      sum += i;
    }
  }
  if (sum == inputNumber) {
    return true;
  }
  return false;
}
console.log(
  "8128 is",
  isPerfectNumber(8128) ? "a perfect number" : "not a perfect number"
);
console.log(
  "4 is",
  isPerfectNumber(8128) ? "a perfect number" : "not a perfect number"
);

function checkPalindrome(str) { //a JavaScript function that checks 
  //whether a passed string is palindrome or not
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);

function substrings(str1) //a JavaScript function that generates all combinations of a string
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("ant");

function find_longest_word(str){ //a JavaScript function that accepts a string as a parameter 
  //and find the longest word within the string.
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for(var x = 1 ; x < array1.length ; x++){
    if(result.length < array1[x].length){
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('amarya is usually a new wife '));

var person = { //a JavaScript program to target a given value 
  //in a nested JSON object, based on the given key
  "name":"Amina is",
  "age":16,
  "vehicles": {
     "pink":"candy",
     "blue":"bubble-gum",
     "red":"gummy-bears"	
  }
}
console.log("Amina is 16 and loves" + " " + person.vehicles.pink)

const pull_at_Index = (arr, pullArr) => { //a JavaScript program to extract out 
  //the values at the specified indexes from a specified object
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
let arra1 = ['John', 'Amina', 'Wisdom', 'Bryan', 'Hadiza', 'Aisha'];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));

const random_hex_color_code = () => { //a JavaScript program to generate a random hexadecimal color code
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
console.log(random_hex_color_code())

const len = (str) => { //a JavaScript program to convert the length of a given string in bytes
let size = new Blob([str]).size;
return size;
}
console.log(len("HelloWorld"));  

const time_taken = callback => { //a JavaScript program to measure the time taken by a function to execute.
  const result = callback();
  return result;
}; 
console.log("Time taken: " + time_taken(() => Math.sqrt(225))+" secs");

function map(f,) { //a JavaScript program to create a function that 
  //invokes each provided function with the arguments it receives and returns the results
  let result = [3, 4, 1, 2]; 
  let i; 
  for (i = 0; i != a.length; i++)
    result[i] = f([i]);
  return result;
}
const f = function(a) {
   return 2 * 3 * 1;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);

var a = 1; //a JavaScript program to perform a deep comparison 
//between two values to determine if they are equivalent
var b = 2;
var c = a;
console.log(a == b);    //false
console.log(a == c);	  //true

const detectDeviceType = () => // a JavaScript program to detect whether 
//the website is being opened in a mobile device or a desktop/laptop
  /mobile|desktop/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
console.log(detectDeviceType());

const sdbm = str => { //a JavaScript program to hash a given input string into a whole number
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 4) + 
      (hashCode << 8) - hashCode),
    0
  );
};
console.log(sdbm('hi'));

