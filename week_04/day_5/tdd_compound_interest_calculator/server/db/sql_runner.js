const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'localhost',
  database: 'imdb'
});

class SqlRunner {
  static run(sqlQuery, cb, values=[]) {
    pool.query(sqlQuery, values, (err, results) => {
      if (err) {
        throw err;
      }
      cb(results.rows);
    });
  }

}


module.exports = SqlRunner;
