SELECT p.city, COUNT(r.*) AS total_reservations
FROM properties AS p
JOIN reservations AS r ON r.property_id = p.id
GROUP BY p.city
ORDER BY COUNT(r.*) DESC;