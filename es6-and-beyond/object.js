const mySym = Symbol("GOOGLE");

const jsUser  = {
    name : "Rohan",
    "full name" : "Rohan Prajapati",
    age : 22,
    mySym : "GOOGLE4444",
    location : "Thimi",
    email : "rohanprajapati369@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Friday"],
};
jsUser.email = "RR@gmail.com";
console.log(jsUser);
console.log(typeof(mySym));
console.log(typeof(jsUser[mySym]));


