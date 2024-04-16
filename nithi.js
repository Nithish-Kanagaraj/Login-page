var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/nithishk', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

// Define a mongoose model
var userSchema = new mongoose.Schema({
    name: String,
    password: String
});

var User = mongoose.model('User', userSchema);

app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var password = req.body.password;

    User.findOne({ name: name ,password:password})
        .then(existingUser => {
            if (existingUser) {
                res.status(400).send("User already exists!");
            } else {
                var data = {
                    "name": name,
                    "password": password
                };
        
                User.create(data)
                    .then(newUser => {
                        console.log("Record Inserted Successfully");
                        return res.redirect('signup_successful.html');
                    })
                    .catch(err => {
                        console.error(err);
                        return res.status(500).send("Error creating user.");
                    });
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("Error checking user existence.");
        });
});

// Route for user login
app.post("/log",(req,res)=>{
    return res.redirect('Login_Form.html');
});
app.post("/login", (req, res) => {
    var name = req.body.name;
    var password = req.body.password;

    User.findOne({ name: name, password: password })
        .then(user => {
            if(user.name==="admin" && user.password==="123")
            {
                res.redirect('userpage.html');
            }
            else if (user) 
            {
                return res.status(200).send("WELCOME "+user.name);
            } 
            else
            {
                return res.status(401).send("Invalid username or password.");
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("Error logging in");
         });
});
app.get("/users", (req, res) => {
    User.find({})
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send("Error fetching users.");
        });
});
app.post("/back",(req,res)=>{

    res.redirect('Registration_Form.html');
});
app.listen(5000, () => {
    console.log("Listening on port 5000");
});