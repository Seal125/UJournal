# UJournal
A journaling app.

## ERD

![](./Feels.svg)


```sql
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name varchar(48),
  username varchar(48) UNIQUE NOT NULL,
  email text UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE journal_entries(
  entry_id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users NOT NULL,
  title varchar(48) DEFAULT now(),
  cover_url text DEFAULT '',
  entry_body text NOT NULL,
  date_created timestamp DEFAULT now(),
  is_private boolean DEFAULT true
);

CREATE TABLE moods(
  mood_id SERIAL PRIMARY KEY,
  entry_id integer REFERENCES journal_entries NOT NULL,
  icon_url text DEFAULT '',
  mood varchar(32) NOT NULL
);
```
