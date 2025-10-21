// //1.  Sum of all even numbers in an array
// const numbers = [2, 3, 4, 7, 4, 3, 8];
// const even = numbers
//   .filter((num) => num % 2 === 0)
//   .reduce((acc, total) => acc + total, 0);
// console.log(even);

// // 2.	String reverse example(using inbuilt &without inbuilt )
// const str = "subashini";
// const reversedStr = str.split("").reverse().join("");
// console.log("reversedstr", reversedStr);
// let rev = "";
// for (i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// console.log("rev", rev);

// // 3.	reverses the order of words in a sentence(hello wold)=>world hello
// const sentence = "hello world";
// const revSentence = sentence.split(" ").reverse().join(" ");
// console.log("revSentence", revSentence);

// // 4.	Find min and max number from the array using inbuilt &without inbuilt method
// const arr = [2, 46, 75, 5, 4, 4, 3, 2, 1];
// console.log("Max", Math.max(...arr));
// console.log("Min", Math.min(...arr));

// let max = arr[0],
//   min = arr[0];
// for (let a of arr) {
//   if (a > max) {
//     max = a;
//   }
//   if (a < min) {
//     min = a;
//   }
// }
// console.log(max, min);

// // 5.	Remove duplicates from an array [1,5,2,1,5]=>o/p [1,5,2]

// const arrs = [1, 5, 2, 1, 5];
// const unique = [...new Set(arrs)];
// console.log("Unique", unique);

// let res = [];
// for (let numberss of arrs) {
//   if (!res.includes(numberss)) res.push(numberss);
// }
// console.log(res, "Removed duplicates");

// // 6.	Split your name to each character
// console.log(..."object");
// console.log("suba".split(""));

// // 7.	Find vowels count
// const string = "Aeiosu";
// const vowels = string.match(/[aeiou]/gi);
// console.log(vowels ? vowels : 0);

// let c = 0;
// let vowel = "aeiou";
// for (let i of string.toLowerCase()) {
//   if (vowel.includes(i)) c++;
// }
// console.log(c);

// // 8.	Capitalize first letter
// const names = "suba";
// const cap = names.charAt(0).toUpperCase() + names.slice(1);
// console.log(cap, "captalized");

// // 9.	Sort array in ascending and descending order

// const arrange = [2, 3, 23, 22, 3, 6, 9, 6, 0];
// console.log(
//   "ascending",
//   arrange.sort((a, b) => a - b)
// );
// console.log("descending", [...new Set(arrange.sort((a, b) => b - a))]);

// // 10.	Count the occurrence of char in a string
// const fruit = "Madam";
// let count = {};
// for (let ch of fruit) {
//   count[ch] = (count[ch] || 0) + 1;
// }
// console.log("count", count);

// 11.	get below output from given input ? I/P: abbcccddddeea O/P: 1a2b3c4d2e1a

const input = "abbcccddddeea";
let countt = 1;
let output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1]) {
    countt++;
  } else {
    output += countt + input[i];
    countt = 1;
  }
}
console.log("output", output);

// 12.	count duplicates in an array
const duplicate = [1, 3, 45, 45, 3, 5, 6, 3, 3, 5, 1];
let check = {};
for (let i of duplicate) {
  check[i] = (check[i] || 0) + 1;
}
for (let key in check) {
  if (check[key] > 1) {
    console.log(`${key} occurs ${check[key]} times`);
  }
}
