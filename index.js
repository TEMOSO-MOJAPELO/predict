import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let teamNames = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/demo", (req,res) => {
    res.render("demo.ejs", { teamNames });
})

app.get("/contact", (req,res) => {
    res.render("contact.ejs");
})

app.get("/about", (req,res) => {
    res.render("about.ejs");
})

app.post("/submit", (req, res) => {
    const firstTeam = req.body.firstTeam;
    const opponent = req.body.opponent;

    if(firstTeam) {
        if(opponent) {
            teamNames = [firstTeam, opponent];
            const randomTeam = teamNames[Math.floor(Math.random()*teamNames.length)];
            res.render("submit.ejs",{TeamMatch: randomTeam});
        }
        
    } else {
        res.redirect('/');
    }

    
    
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});