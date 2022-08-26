const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.PORT || 3000;

// STATIC WEB PATH
const static_path = (path.join(__dirname, "../public"));
const templates_path = (path.join(__dirname, "../templates/views"));
const partials_path = (path.join(__dirname, "../templates/partials"));

app.set('views',path.join(__dirname,'../views'));
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


// ROUTING
app.get("/", (req, res)=>{
 res.render("index.hbs");
})

app.get("/about", (req, res)=>{
    res.render("about.hbs");
   })

  

   app.get("/weather", (req, res)=>{
    res.render("weather.hbs");
   })

   app.get("*", (req, res)=>{
    res.render("404error.hbs", {
        errorMsg:"Opps! page not found"
    });
   })
   

app.listen(port, ()=>{
    console.log(`Listing to the ${port}`)
}) 