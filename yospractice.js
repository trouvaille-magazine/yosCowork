//console.log("yoyosoco-cowork");
//console.log(1 + 1 == 2 && 10 * 10 > 50);

// Looping a Triangle
/*let result = "";
let counter = 0;
while (result.length < 7) {
  result = result + "#";
  counter = counter + 1;
  console.log(result);
}*/

// FizzBuzz
/*let anwser = 0;
while (anwser < 100) {
  anwser = anwser + 1;
  if (anwser % 3 == 0 && anwser % 5 !== 0) {
    console.log("Fizz");
  } else if (anwser % 3 == 0 && anwser % 5 == 0) {
    console.log("FizzBuzz");
  } else if (anwser % 5 == 0 && anwser % 3 !== 0) {
    console.log("Buzz");
  } else if (anwser % 5 !== 0 && anwser % 3 !== 0) {
    console.log(anwser);
  }
}*/

//Chessboard
let line = " #";
let n = line.length;
for (let n = 1; n <= 64; n++) {
  if (line.length % 8 == 0 && line.length % 16 !== 0) line += "\n#";
  else if (line.length % 16 == 0) line += "#" + " \n";
  line.length % 2 == 0 && line.length % 8 !== 0 && line.length % 16 !== 0;
  line += " " + "#";
}
if (line.length == 64) {
  console.log(line);
}
