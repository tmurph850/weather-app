let MongoClient = require('mongodb').MongoClient;
//let test = require('assert');
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
  // Get the collection
  let col = db.collection('cities-list');
    col.insertMany([
     // MongoDB adds the _id field with an ObjectId if _id is not present
     { item: "journal", qty: 25, status: "A",
         size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
     { item: "notebook", qty: 50, status: "A",
         size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
     { item: "paper", qty: 100, status: "D",
         size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
     { item: "planner", qty: 75, status: "D",
         size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
     { item: "postcard", qty: 45, status: "A",
         size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
  ]);
});
