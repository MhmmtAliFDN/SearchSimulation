// The current database to use.
use('search_db');

// Find all products that contain the word "camera" in the products collection.
db.getCollection('products').find({ $text: { $search: "camera" } }).limit(5);

// Find all products that contain the word "security" in the products collection.
db.getCollection('products').find({ $text: { $search: "security" } }).limit(5);

// Find all products that contain the word "security camera" in the products collection.
db.getCollection('products').find({ $text: { $search: "security camera" } }).limit(5);

// Find all products that contain the word "camera security" in the products collection.
db.getCollection('products').find({ $text: { $search: "camera security" } }).limit(5);

// Find all products that contain the word "security camera" in the products collection.
db.getCollection('products').find({ $text: { $search: "\"security camera\"" } }).limit(5);

// Find all products that contain the word "camera security" in the products collection.
db.getCollection('products').find({ $text: { $search: "\"camera security\"" } }).limit(5);
