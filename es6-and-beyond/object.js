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
console.log("This is the starting of the new learning curvee that i just invented")
