const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const PlaceRoutes = require("./routes/places-route");
const HttpError = require("./models/http-error");
const userRoute = require("./routes/users-routes")

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
  

app.use("/api/places", PlaceRoutes);
app.use("/api/users", userRoute);



app.use((req,res,next)=>{
    const error = new HttpError("could not find this route ",404);
    throw error;

})
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message });
});

mongoose.connect("mongodb://localhost:27017/MERNAPPP").then(()=>{
    console.log("database connections successfull ")
}).catch(err =>{
    console.log(err)
})

app.listen(4000, () => {
    console.log(" course server started at port 4000");
});
