// arrays in js

let userName = ["jamshed", "hammad", "uzair", "asfand"];
console.log(userName);

let age = [19, 17, 20, 21];
console.log(age);

let user = [1, "jamshed", 19];
console.log(user);

//accessing data in arrays
console.log(userName[1]);

//Overwriting data in array
userName[2] = "junaid";
console.log(userName);

//array length
console.log(age.length);

//array methods
//adding elements into array -- .push method returns length of array
let newArr = userName.push("uzair");
console.log(newArr);
console.log(userName);

newArr = userName.pop();
console.log(newArr);

console.log(user.join("-"));
console.log(userName.indexOf("hammad"));

console.log(userName.concat(["nomir", "asad", "saad"]));
