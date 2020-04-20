# UJournal

A journaling app.

## Features

**MVP Features**

- Users will be able to register an account/log in to save their entries.

- Users will be able to write a journal entry.

- Users will have the ability to make their entries public for others to see.

- Users will be able to see public journal entries from others in an explore page.

**Future Features**

- Users will be able to share their entries with other users that they trust.

- Users will be able to categorize entries based on hashtags.

- Users will be able to select an icon for each emotion, making it easier to visualize.

## Technologies Used

**Database**

- [node-postgres](https://node-postgres.com/): Provides interface for connecting with PostgreSQL

**Server**

- [Express](https://expressjs.com/): Minimal (key to our goal of learning fundamental patterns) and flexible Node.js web app framework.
- [body-parser](https://github.com/expressjs/body-parser): Middleware for parsing the body of a request.
- [cookie-parser](https://github.com/expressjs/cookie-parser): Middleware for parsing request cookies.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js): JavaScript library for encrypting user passwords.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): JSON Web Token implementation. Used to authorize user.

**Code Quality**

- [ESLint](https://eslint.org/): Helps identify problematic code and enforces adherence to our chosen style guidelines (see next item). Additionally, ESLint rules are well documented, serving as a learning experience that strengthens our understanding of the language.
- [AirBnB's JavaScript Style Guide](https://github.com/airbnb/javascript): Another well documented resource. Has a lot of opinions, another chance to think about the _why_ and learn new things. Yes, we like the semicolons.

**Deployment**

- [Heroku](https://devcenter.heroku.com/categories/nodejs-support): Free, fast and fairly straightforward setup. Provides plugin for connecting a database.

## Database Information

**Entity-Relationship Diagram**

![ERD](./Feels.svg)

**Table Definitions**

```sql
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username varchar(32) UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE journal_entries(
  entry_id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users NOT NULL,
  title varchar(64) NOT NULL,
  entry_body text NOT NULL,
  user_mood_rating integer DEFAULT 0,
  lib_mood_rating integer DEFAULT 0,
  date_created timestamp DEFAULT now(),
  is_private boolean DEFAULT true
);

CREATE TABLE tags(
  id SERIAL PRIMARY KEY,
  name varchar(16) UNIQUE NOT NULL
);

CREATE TABLE journal_entries_tag(
  id SERIAL,
  user_id integer REFERENCES users NOT NULL,
  entry_id integer REFERENCES journal_entries NOT NULL,
  tag_id integer REFERENCES tags NOT NULL
);
```
