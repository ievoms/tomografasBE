const pool = require("../../config/database");

module.exports = {
  getUser: (username, callBack) => {
    pool.query(
      `select * from user where username = ?`,
      [username],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  add: (data, callBack) => {
    pool.query(
      `insert into report(instruction_id, text) 
                values(?,?)`,
      [
        data.instruction_id,
        data.text
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

};
