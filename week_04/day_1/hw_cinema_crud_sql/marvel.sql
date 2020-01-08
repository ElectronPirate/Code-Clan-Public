DROP TABLE movies;
DROP TABLE people;

CREATE TABLE movies (
	id SERIAL8 PRIMARY KEY,
	title VARCHAR(255),
	year INT2,
	show_time VARCHAR(255)
);

CREATE TABLE people (
	id SERIAL8 PRIMARY KEY,
	name VARCHAR(255)
);

INSERT INTO people (name) VALUES ('James Berry');
INSERT INTO people (name) VALUES ('Kris Brough');
INSERT INTO people (name) VALUES ('Matthew Beeston');
INSERT INTO people (name) VALUES ('Reka Forgacs');
INSERT INTO people (name) VALUES ('Euan Gilmour');
INSERT INTO people (name) VALUES ('Pawel Gorny');
INSERT INTO people (name) VALUES ('Hamish King');
INSERT INTO people (name) VALUES ('Roderick King');
INSERT INTO people (name) VALUES ('Ben Sharp');
INSERT INTO people (name) VALUES ('Donald Trump');
INSERT INTO people (name) VALUES ('Ros Ulldemolins');


INSERT INTO movies (title, year, show_time) VALUES ('Iron Man', 2008, '19:45');
INSERT INTO movies (title, year, show_time) VALUES ('The Incredible Hulk', 2008, '23:20');
INSERT INTO movies (title, year, show_time) VALUES ('Iron Man 2', 2010, '18:10');
INSERT INTO movies (title, year, show_time) VALUES ('Thor', 2011, '22:35');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: The First Avenger', 2011, '22:30');
INSERT INTO movies (title, year, show_time) VALUES ('Avengers Assemble', 2012, '21:55');
INSERT INTO movies (title, year, show_time) VALUES ('Iron Man 3', 2013, '15:00');
INSERT INTO movies (title, year, show_time) VALUES ('Thor: The Dark World', 2013, '12:35');
INSERT INTO movies (title, year, show_time) VALUES ('Batman Begins', 2005, '16:50');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: The Winter Soldier', 2014, '20:35');
INSERT INTO movies (title, year, show_time) VALUES ('Guardians of the Galaxy', 2014, '14:25');
INSERT INTO movies (title, year, show_time) VALUES ('Avengers: Age of Ultron', 2015, '14:10');
INSERT INTO movies (title, year, show_time) VALUES ('Ant-Man', 2015, '17:10');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: Civil War', 2016, '23:30');
INSERT INTO movies (title, year, show_time) VALUES ('Doctor Strange', 2016, '16:15');
INSERT INTO movies (title, year, show_time) VALUES ('Guardians of the Galaxy 2', 2017, '19:15');
INSERT INTO movies (title, year, show_time) VALUES ('Spider-Man: Homecoming', 2017, '18:45');
INSERT INTO movies (title, year, show_time) VALUES ('Thor: Ragnarok', 2017, '13:35');
INSERT INTO movies (title, year, show_time) VALUES ('Black Panther', 2018, '22:05');
