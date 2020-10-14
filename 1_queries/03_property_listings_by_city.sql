select p.id, p.title, p.cost_per_night, AVG(pr.rating) AS average_rating
FROM properties AS P
JOIN property_reviews AS pr
ON p.id = pr.property_id
WHERE p.city LIKE '%Vancouver%'
GROUP BY p.id
HAVING AVG(pr.rating) >= 4
ORDER BY cost_per_night
LIMIT 10;