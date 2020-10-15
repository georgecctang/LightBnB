const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');
const { rows } = require('pg/lib/defaults');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  password: '123',
  database: 'lightbnb'
})

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getUserWithEmail = function(email) {
  return pool.query(
    `SELECT *
    FROM users
    WHERE email = $1
    `, [email])
    .then(res => res.rows ? res.rows[0] : null); 
};

exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */


const getUserWithId = function(id) {
  return pool.query(
    `SELECT * 
    FROM users
    WHERE id = $1
    `, [id]
  ).then(res => res.rows ? res.rows[0] : null)
};

exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */

const addUser = function(user) {
  const { name, email, password } = user;
  return pool.query(
    `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, email, password])
    .then(res => res.rows[0]);
};

exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
// const getAllReservations = function(guest_id, limit = 10) {
//   return getAllProperties(null, 2);
// }

const getAllReservations = function(guest_id, limit = 10) {
  return pool.query(`
    SELECT p.id, p.title, p.thumbnail_photo_url, p.cost_per_night, p.number_of_bedrooms, p.number_of_bathrooms, p.parking_spaces, MAX(r.start_date) AS start_date, MAX(r.end_date) AS end_date, AVG(pr.rating) AS average_rating
    FROM reservations AS r
    JOIN properties AS p ON p.id = r.property_id
    JOIN property_reviews AS pr ON p.id = pr.property_id
    WHERE r.guest_id = $1 AND r.end_date <= now()::date
    GROUP BY p.id
    ORDER BY MAX(start_date)
    LIMIT $2;
  `, [guest_id, limit]).then(res => {
    return res.rows;
    });
};

exports.getAllReservations = getAllReservations;




/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = function(options, limit = 10) {
  return pool.query(
    `SELECT * 
    FROM properties 
    LIMIT $1
    `, [limit])
    .then(res => res.rows);
}

exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;