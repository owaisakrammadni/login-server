let users = [
    { name: "owais", email: "owaisakram@gmail.com", password: "2525" },
    { name: "muaaz", email: "muaazmadni@gmail.com", password: "12345" }
];

var PORT = process.env.PORT || 5000;
let express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')

let app = express();

app.use(cors());

app.use(morgan('dev'))
app.use(bodyParser.json())

// app.get("/bulb", function (req, res, next) {
//     res.send("bulb is On");
// });

app.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("signup success full");
});
app.post('/signup', (req, res) => {
    let isFound = false;
    let getdata = users;
    if (getdata) {
        users = getdata;
    }
    else {
        users = [];
    }
    for (i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        res.send("already exit");

    }
    else {
        users.push(req.body);
        console.log(req.body);
        res.send("Sign Up Succesfuly");
    }






})

app.post('/login', (req, res) => {
    let e = req.body.email;
    let p = req.body.password;
    let isFound = false;
    for (let i = 0; i < users.length; i++) {
        if (e === users[i].email && p === users[i].password) {
            isFound = i;
            break;
        }
    }
    if (isFound === false) {
        res.send("User Not Found");
    }
    else {
        res.send({
            name: users[isFound].name,
            fname: users[isFound].fathername,
            email: users[isFound].email,

            "message": "Login Succes"
        });

    }


})




// app.post('/index', (req, res) => {
//     console.log('Got body:', req.body);
//     res.sendStatus(200);
// });

app.listen(PORT, () => {
    console.log("server is running on " + PORT);
})