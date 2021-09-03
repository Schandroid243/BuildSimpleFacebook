var database = [
    {
        username: "Schandroid243",
        password: "12345"
    },
    {
        username: "Sally",
        password: "secrete"
    },
    {
        username: "Bobby",
        password: "super"
    },
    {
        username: "Bryon Russel",
        password: "MJ234"
    },
    {
        username: "Larry Bird",
        password: "goat"
    },
    {
        username: "Peter Belish",
        password: "0000"
    },
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning !"
    },
    {
        username: "Sally",
        timeline: "JavaScript is soooo cool !"
    },
    {
        username: "Mitch",
        timeline: "JavaScript is preetyy coooooooooolll !!!"
    },
];  

var userNamePrompt = prompt("Enter your username: ");
var passwordPrompt = prompt("Enter your password: ");

dbUserName = database[0].username;
dbPassword = database[0].password;

// function logIn() {
//     if(userNamePrompt !== dbUserName && passwordPrompt !== dbPassword) {
//         return alert("Invalid username or password !");
//     } else {
//         alert("This is your timeline of the day: ");
//         return console.log(newsfeed);
//     }
// }

// logIn();

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        console.log(database.length);
        if(database[i].username === username && database[i].password === password) {
           return true;
        }
    }
    return false;
}

function signIn(username, password) {

   var check = isUserValid(username, password);
    if(check) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);