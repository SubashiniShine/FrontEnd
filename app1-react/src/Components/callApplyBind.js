//call
const person = {
  fullName: function (city) {
    return this.fName + " " + this.lName + " " + city;
  },
};
const person1 = {
  fName: "Suba",
  lName: "Keerthi",
};

let callPerson = person.fullName.call(person1, "Coimbatore");
console.log("callPerson", callPerson);

// Apply
let callPerson2 = person.fullName.apply(person1, ["Coimbatore"]);
console.log("callPerson", callPerson2);

//Bind
const personn = {
  fullName: function (city) {
    return this.fName + " " + this.lName;
  },
};

let callPerson3 = personn.fullName.bind(person1);
console.log(callPerson3());