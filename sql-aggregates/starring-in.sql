select "category"."name" as "category",
       count("castMembers".*) as "amount"
  from "categories" as "category"
    join "filmCategory" using ("categoryId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
      where "firstName" = 'Lisa'
      and "lastName" = 'Monroe'
  group by "category"."categoryId";
