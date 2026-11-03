const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(2024, 2, 10, 2, 30)
  }
];

app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
    res.render("form");
});

app.post("/new", (req, res) => {
    messages.push({ text: req.body.msgText, user: req.body.authorName, added: new Date() });
    res.redirect("/");
})

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    };
    console.log("App started")
})