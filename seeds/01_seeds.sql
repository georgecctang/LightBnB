INSERT INTO users (name, email, password)
VALUES ('Amy', 'amy@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Chase', 'chase@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Zach', 'zach@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Georgia', 'georgia@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Brian', 'brian@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');


INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (2, 'Big House', 'description', 'https://images.pexels.com/photos/2121121/pexels-photos.2121121.jpeg?auto-compress&cs=tinnysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 12000, 3, 3, 4, 'Canada', '2 York Road', 'Calgary', 'Alberta', 93812, true),
(1, 'Full View', 'description', 'https://images.pexels.com/photos/1235058/pexels-photos.1235058.jpeg?auto-compress&cs=tinnysrgb&h=350', 'https://images.pexels.com/photos/1235058/pexels-photo-1235058.jpeg', 22500, 2, 1, 3, 'Canada', '3 Milton Grove', 'Vancouver', 'British Columbia', 34851, true),
(3, 'Cottage', 'description', 'https://images.pexels.com/photos/5109381/pexels-photos.5109381.jpeg?auto-compress&cs=tinnysrgb&h=350', 'https://images.pexels.com/photos/5109381/pexels-photo-5109381.jpeg', 8000, 4, 2, 3, 'Canada', '5 Penny Lane', 'Hamilton', 'Ontario', 52981, true),
(2, 'Nice House', 'description', 'https://images.pexels.com/photos/5810495/pexels-photos.5810495.jpeg?auto-compress&cs=tinnysrgb&h=350', 'https://images.pexels.com/photos/5810495/pexels-photo-5810495.jpeg', 9500, 1, 1, 2, 'Canada', '48 Brandon Road', 'Toronto', 'Ontario', 24091, true),
(1, 'Ocean View', 'description', 'https://images.pexels.com/photos/9381092/pexels-photos.9381092.jpeg?auto-compress&cs=tinnysrgb&h=350', 'https://images.pexels.com/photos/9381092/pexels-photo-9381092.jpeg', 7200, 2, 2, 2, 'Canada', '95 Speed Lane', 'North York', 'Ontario', 98019, true);


INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-01-01', '2018-01-04', 5, 3),
('2018-02-01', '2018-02-04', 1, 3),
('2018-03-01', '2018-03-04', 3, 4),
('2018-04-01', '2018-04-04', 4, 5),
('2018-05-01', '2018-05-04', 3, 5);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (3, 5, 1, 4, 'message'),
(2, 1, 2, 3, 'message'),
(4, 3, 4, 2, 'message'),
(5, 4, 3, 3, 'message'),
(5, 3, 5, 3, 'message');