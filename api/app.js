const express = require("express");
const app = express();
const port = 3030;

app.use("/static", express.static("public"));
//Routes ->
const countryRouter = require("./routes/countryRoute");
const gdpRouter = require("./routes/gdpRoute");
const gniFemaleRouter = require("./routes/gniFemaleRoute");
const gniMaleRouter = require("./routes/gniMaleRoute");
const homeRouter = require("./routes/homeRoute");

app.use("/country", countryRouter);
app.use("/gdp", gdpRouter);
app.use("/gniFemale", gniFemaleRouter);
app.use("/gniMale", gniMaleRouter);
app.use("/home", homeRouter);

app.listen(port, () => {
    console.log("App is running!!");
});
