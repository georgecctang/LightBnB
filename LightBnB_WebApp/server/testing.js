// Test codes

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  password: '123',
  database: 'lightbnb'
})

const getAllProperties = function(options, limit = 10) {
  // 1
  const queryParamValues = [];
  // 2
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  const queryParamComparisons = {
    owner_id:'=', 
    minimum_price_per_night: '>=', 
    maximum_price_per_night: '<=',
    minimum_rating: '>='
  }
  // 3
  let keyword = 'WHERE';

  if (options.city) {
    queryParamValues.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParamValues.length} `;
    keyword = 'AND';
  }
  for (const p in queryParamComparisons) {
    if (options[p]) {
      queryParamValues.push(options[p]);
      queryString += `${keyword} ${p} ${queryParamComparisons[p]} $${queryParamValues.length} `;
      keyword = 'AND';
    }
  }
  // 4
  queryParamValues.push(limit);
  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParamValues.length};
  `;

  // 5
  console.log(queryString, queryParamValues);

  // 6
  // return pool.query(queryString, queryParams)
  // .then(res => res.rows);
};

// {
//   city,
//   owner_id,
//   minimum_price_per_night,
//   maximum_price_per_night,
//   minimum_rating
// }

getAllProperties({
  minimum_price_per_night: 4000, 
  maximum_price_per_night: 10000, 
  minimum_rating: 3.5});