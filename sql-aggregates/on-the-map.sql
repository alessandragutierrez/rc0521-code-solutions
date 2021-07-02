select "co"."name" as "country",
       count("ci".*) as "totalCities"
  from "countries" as "co"
    join "cities" as "ci" using ("countryId")
  group by "co"."countryId";
