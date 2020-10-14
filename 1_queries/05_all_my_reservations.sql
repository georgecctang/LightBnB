SELECT p.id, p.title, p.cost_per_night, MAX(r.start_date) AS start_date, AVG(pr.rating) AS average_rating
FROM reservations AS r
JOIN properties AS p ON p.id = r.property_id
JOIN property_reviews AS pr ON p.id = pr.property_id
WHERE r.guest_id = 1 AND r.end_date <= now()::date
GROUP BY p.id
ORDER BY MAX(start_date)
LIMIT 10;