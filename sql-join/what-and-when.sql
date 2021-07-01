select "releaseYear",
       "category"."name" as "categoryName"
  from "films"
  join "filmCategory" using ("filmId")
  join "categories" as "category" using ("categoryId")
  where "title" = 'Boogie Amelie';
