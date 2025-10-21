// map, find, filter, reduce, forEach
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Numbers doubled:", doubled);

const findNumbers = numbers.find((num) => num > 3);
console.log("filteredNumbers:", findNumbers);

const products = [
  { id: 1, score: 99 },
  { id: 1, score: 89 },
  { id: 1, score: 100 },
];
console.log(products.filter((p) => p.score > 90));

const reducedProduct = products.reduce((total, p) => {
  return total + p.score;
}, 0);
console.log("reducedProduct", reducedProduct);

const numberss = [1, 2, 3, 4, 5];
const doublednum= [];
numberss.forEach((n)=>{return doublednum.push(n*3)});
console.log(doublednum)