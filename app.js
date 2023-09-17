import express from "express"
import bodyparser from "body-parser"
import { ITLcontent, futureContent, MTcontent, reccResources } from "./content.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home-01");
});

app.get("/about", (req, res)=> {
  res.render("home-03")
})

app.get("/curriculum", (req, res) => {
  res.render("blog-list-sidebar")
})

app.get("/magazine", (req, res) => {
  res.render("curriculum")
})

app.get("/affiliations", (req, res) => {
  res.render("affiliations")
})

app.get("/events", (req, res) => {
  res.render("events")
})

app.get("/curriculum/IntroToLaw", (req, res) => {
  res.render("IntroToLaw", {content: ITLcontent});
})

app.get("/curriculum/Future", (req, res) => {
  res.render("Future", {content: futureContent})
})

app.get("/curriculum/MockTrial", (req, res) => {
  res.render("MockTrial", {content: MTcontent})
})

app.get("/curriculum/ReccResources", (req, res) => {
  res.render("ReccResources", {content: reccResources})
})

app.listen(8080, () => {
  console.log("hello")
});
