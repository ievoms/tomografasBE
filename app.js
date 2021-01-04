require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.get("/api", (req,res)=>{
  res.json({message: "Welcome"})
});
app.get("/", (req,res)=>{
  res.json({message: "Welcome"})
});
app.use("/api", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
