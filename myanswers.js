
QUESTION 1

const printCool = (name) => {
  console.log(`${name} is cool`);
};

printCool("Karla");

QUESTION 2

const calculateCube = (num) => {
  console.log(Math.pow(num, 3));
}
 calculateCube(5);

QUESTION 3

const isAVowel = (letter) => {
  if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    console.log("That's a vowel!");
  }
  else {
    console.log("That's not a vowel");
  }
};
isAVowel("z");

QUESTION 4

const getTwoLengths = (string1, string2) => {
  var newArray1 = string1.split("").length;
  var newArray2 = string2.split("").length;
  console.log(newArray1, newArray2);
}

getTwoLengths("hippo", "cat");

QUESTION 5
const newArray = [];

const getMultipleLengths = (array) => {
  for (i of array) {
  newArray.push(i.length);
  }
  console.log(newArray);
};

getMultipleLengths(["hello", "what", "is", "up", "dude"]);

QUESTION 6

const maxOfThree = (num1, num2, num3) => {
  var largestNumber = Math.max(num1, num2, num3);
  console.log(largestNumber)
};

maxOfThree(1004, 100, 34);

QUESTION 7

const printLongestWord = (array) => {
  let biggerWord = array[0];
  for(i of array) {
    if(i.length > biggerWord.length) {
      biggerWord = i;
    }
    
  }
  console.log(biggerWord)
}
  printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);

QUESTION 8

const transmogrify = (num1, num2, num3) => {
  var product = num1 * num2;
  var answer = Math.pow(product, num3);
  console.log(answer);
};

(transmogrify(5, 3, 2));











