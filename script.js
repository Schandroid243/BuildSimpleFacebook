var database = [
    {
        username: "Schandroid243",
        password: "12345"
    }
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

function logIn() {
    if(userNamePrompt !== dbUserName && passwordPrompt !== dbPassword) {
        return alert("Invalid username or password !");
    } else {
        alert("This is your timeline of the day: ");
        return console.log(newsfeed);
    }
}

logIn();