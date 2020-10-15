// Test codes

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  password: '123',
  database: 'lightbnb'
})


// const getUserWithEmail = function(email) {
//   return pool.query(
//     `SELECT *
//     FROM users
//     WHERE email = $1
//     `, [email])
//     .then(res => res.rows ? res.rows[0] : null); 
// };

// getUserWithEmail('asherpoole@gmx.com').then(data => console.log(data));

// const getUserWithId = function(id) {
//   return pool.query(
//     `SELECT * 
//     FROM users
//     WHERE id = $1
//     `, [id]
//   ).then(res => res.rows ? res.rows[0] : null)
// };

// getUserWithId(10).then(data => console.log(data));


const addUser = function(user) {
  const { name, email, password } = user;
  return pool.query(
    `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, email, password])
    .then(res => res.rows[0]);
};

addUser({name: 'AAAAAA', email:'a@e.com', password: 'abc'}).then(data => console.log(data));
