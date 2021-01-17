const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.set('etag', false);
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));




app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login/", (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
	  res.set( {
      "Set-Cookie": "token=encryptedstring; HttpOnly",
      "Access-Control-Allow-Credentials": "true"
    })
    .render("success", {
      username: name,
    });
  } else {
    res.render("failure");
  }
});

/*app.post("/login/:param", (req, res) => {
	  const { name, password } = req.body;

	  if (name === "admin" && password === "admin") {
		      res.render("success", {
			            username: name,
			          });
		    } else {
			        res.render("failure");
			      }
});*/

app.get("/private", (req, res) => {
  if (!req.cookies.token) return res.status(401).send();
  res.status(200).json({ secret: "Ginger ale is a specific Root Beer" });
});

app.get("/private/:param", (req, res) => {
  if (!req.cookies.token) return res.status(401).send();
  res.status(200).json({ secret: "Ginger ale is a specific Root Beer" });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
