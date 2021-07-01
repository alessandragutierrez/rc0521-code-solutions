select "line1" as "addressLine1",
       "district",
       "city"."name" as "city",
       "country"."name" as "country"
  from "addresses"
  join "cities" as "city" using ("cityId")
  join "countries" as "country" using ("countryId");
