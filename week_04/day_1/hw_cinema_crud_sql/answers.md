# SQL Homework Answers

1) Return ALL the data in the 'movies' table.

```sql
SELECT * FROM movies;
```

2) Return ONLY the name column from the 'people' table

```sql
SELECT name FROM people;
```

3) Oops! Someone at CodeClan spelled Rose's name wrong! Change it to reflect the proper spelling ('Rose' not 'Ros').

```sql
UPDATE people SET name = 'Rose Ulldemolins' WHERE id = 10;
```

4) Return ONLY your name from the 'people' table.

```sql
SELECT name FROM people WHERE id = [your ID];
```

5) The cinema is showing 'Batman Begins', but Batman is DC, not Marvel! Delete the entry from the 'movies' table.

```sql
DELETE FROM movies WHERE title = 'Batman Begins';
```

6) Create a new entry in the 'people' table with the name of one of the instructors.

```sql
INSERT INTO people (name) VALUES ('Siân RD');
```

7) Donald Trump, has decided to hijack our movie evening, Remove him from the table of people

```sql
DELETE FROM people WHERE name = 'Donald Trump';
```

8) The cinema has just heard that they will be holding an exclusive midnight showing of 'Avengers: Infinity War'!! Create a new entry in the 'movies' table to reflect this.

```sql
INSERT INTO movies (title, year, show_time) VALUES ('Avengers: Infinity War', 2018, '00:00');
```

9) The cinema would also like to make the Guardians movies a back to back feature. Find out the show time of "Guardians of the Galaxy" and set the show time of "Guardians of the Galaxy 2" to start two hours later.

```sql
UPDATE movies SET show_time = '16:25' WHERE title = 'Guardians of the Galaxy 2';
```

## Extension

1) Research how to delete multiple entries from your table in a single command.

E.G.

```sql
DELETE FROM table;
DELETE FROM table WHERE id IN (1,4,5);
DELETE FROM table WHERE name='' OR name='';
```
