// General Imports and setup //

const express = require ("express");
const bodyParser = require("body-parser");
const methodOverride = require ("method-override");

// Express and Modules //

const app = express ();
app.use(express.static("public")); // js, css, etc.
app.set("view engine", "ejs"); // EJS is a dependency

// Express //

app.use(require("express-session")({
    secret: "Tiny Dancer",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method")); // For PUT requests

// Globals //

const port = process.env.PORT || 3000;

// Routes //

const indexRoutes = require("./routes/index");

app.use(indexRoutes)

// START/LISTEN//		
app.listen(port, () => { console.log(`Listening on port ${port}`); });