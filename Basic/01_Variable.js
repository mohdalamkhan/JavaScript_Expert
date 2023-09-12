const accountId = 123456;
let accountEmail = "Alam@gmail.com";
var accountPassword = "09876";
accountCity = "Mumbai";

let acountState; // In the javascript, just you declared the variable then want
// to access it then you will get undefined

// accountId = 23;

accountEmail = "test@gmail.com";
accountPassword = "test";
accountCity = "Hyderabad";

/*
Prefer not to use var,
because of issue in block scope and functional scope.
*/

console.log(acountState);
console.table([accountId, accountEmail, accountPassword, accountCity]);
