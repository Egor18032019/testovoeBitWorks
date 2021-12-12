DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT PRIMARY KEY CHECK
    (id>0 and id<10),
  name VARCHAR(50) not null,
  priority VARCHAR(50) not null


);
