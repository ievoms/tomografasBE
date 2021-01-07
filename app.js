require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use(cors())

app.get("/api", (req,res)=>{
  res.json({message: "Welcome"})
});
app.get("/", (req,res)=>{
  res.json({message: "Welcome"})
});
app.use("/api", userRouter);

app.listen(process.env.PORT || 4000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
