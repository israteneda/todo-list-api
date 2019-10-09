CREATE TABLE IF NOT EXISTS tasks (
  ID SERIAL PRIMARY KEY,
  task varchar (200) NOT NULL,
  status INT NOT NULL DEFAULT '1',
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (id, task, status, created_at) VALUES
(1, 'Find bugs', 1, '2016-04-10 23:50:40'),
(2, 'Review code', 1, '2016-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50');