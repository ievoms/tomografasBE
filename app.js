require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const serverRouter = require("./api/server/server.router");

app.use(express.json());
app.use(cors())

app.get("/api", (req,res)=>{
  res.json({message: "Welcome tomografas API"})
});
app.get("/", (req,res)=>{
  res.json({message: "Welcome tomografas DB"})
});
app.use("/api", serverRouter);

app.listen(process.env.PORT || 4000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
