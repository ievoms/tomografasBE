const {getUser, add} = require("./user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    const body = req.body;
    console.log(body)
    getUser(body.username, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      if (body.password.toString()===results.password.toString()) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234");
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
        
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  },
  addReport: (req, res) => {
    const body = req.body;
  console.log(body)
    add(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
 
};
