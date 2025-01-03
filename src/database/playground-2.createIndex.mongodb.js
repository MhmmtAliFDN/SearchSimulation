// The current database to use.
use('search_db');

// Create a new index for the collection.
db.getCollection('products').createIndex(
    {
        product_name: "text",
        category: "text",
        about_product: "text",
    },
    {
        default_language: "english",
        weights: {
            product_name: 5,
            category: 3,
            about_product: 2
        },
        name: "product_text_index",
        background: true,
        analyzer: 'lucene.whitespace',
        search_analyzer: 'lucene.standard'
    }
);

console.log("Index created successfully");
