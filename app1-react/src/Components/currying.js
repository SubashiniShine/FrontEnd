//currying
function Add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
let sum = Add(1)(2)(3);
console.log("sum", sum);

//closure
function outer() {
  let message = "Hello world";
  function inner() {
    console.log(message);
  }
  inner();
}
outer();
