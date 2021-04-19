db.restaurants.find().pretty()

1. Crud
   1.1 – Write a MongoDb query to display all the documents in
   the restaurant collection.
   db.restaurants.find().pretty()
   1.2 - Write a MongoDb query to display all restaurants that
   have a specific cuisine
   db.restaurants.find({"cuisine":"asian"}).pretty()
   1.3 - Write a MongoDb query that displays only kosher
   restaurants
   db.restaurants.find({"kosher": true}).pretty()
   1.4 - Write a MongoDb query that displays only a specific cities
   restaurants
   db.restaurants.find({"address.city":"Tel Aviv"}).pretty()
   1.5 - Write a MongoDb query to display a specific restaurants
   address
   db.restaurants.findOne({\_id:ObjectId("607d710f0071d1a5dc426f09")}).address

   1.6 - Write a MongoDb query to display a specific restaurants
   coordinates
   db.restaurants.findOne({\_id:ObjectId("607d710f0071d1a5dc426f09")}).address.coordinates
   db.restaurants.find({"address.coordinates":-77.46574}).pretty()

   1.7. - Write a MongoDb query that should display all
   restaurants in ascending order by restaurant name.

   db.restaurants.find().sort({name:1}).pretty()

   1.8 - Write a MongoDb query that should display all restaurants
   in ascending order by city names.

   db.restaurants.find().sort({"address.city":1}).pretty()

   1.9 - Update a specific restaurant's name
   db.restaurants.updateOne({"\_id":ObjectId("607d710f0071d1a5dc426f09")},{$set:{name:"coconut jam the updated!"}})
    1.10 - Update a specific restaurant by adding a new review.
    db.restaurants.updateOne({"_id":ObjectId("607d710f0071d1a5dc426f09")},{$push:{"reviews":{"date": ISODate("2019-01-01T00:00:00Z"),"score": 9}}})
   1.11 - Update all restaurants to be kosher
   db.restaurants.updateMany({},{$set:{kosher:true}})
   1.12 - Delete a specific restaurant
   db.restaurants.deleteOne({\_id:ObjectId("607d710f0071d1a5dc426f0a")})
   1.13 - Delete all restaurants
   db.restaurants.deleteMany({})
   1.14 – Increment a specific restaurants score by 2

   1.15 – Decrement a specific restaurants score by 1

2. forEach Queries
   use the forEach cursor method to query the following:
   2.1 - Write a MongoDb query to print all restaurant names.
   db.restaurants.find().forEach(function(ans){print("name:"+ans.name)})
   2.2 - Write a MongoDb query to print all restaurant cities
   db.restaurants.find().forEach(function(ans){print("City:"+ans.address.city)})
   2.3 - Write a MongoDb query to print all restaurant coordinates
   db.restaurants.find().forEach(function(ans){print("Cities coordinates: "+ans.address.coordinates)})

3. Advanced Queries
   3.1 - Query for restaurant names that start with a specific
   alphabet
   db.restaurants.find({name: /^b/}).pretty()
   3.2 - Query how many documents you have from the restaurant
   collection.
   db.restaurants.count()
   3.3 - Write a MongoDb query to get restaurants that include
   reviews from a specific date.
   db.restaurants.find({"reviews.date": ISODate("2018-01-01T00:00:00Z")}).pretty()
   db.restaurants.find({"reviews.date": {$gte:new Date("2018-01-01"),$lt: new Date("2018-01-02")}})
