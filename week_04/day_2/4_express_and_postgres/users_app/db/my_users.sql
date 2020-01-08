DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- Add some users

INSERT INTO users (name, email) VALUES ('Keith Douglas', 'keith.douglas@codeclan.com');
INSERT INTO users (name, email) VALUES ('Sian RD', 'sian.robinson-davies@codeclan.com');
