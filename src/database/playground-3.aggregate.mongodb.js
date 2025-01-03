// The current database to use.
use('search_db');

// Calculating Average Rating and Average Discounted Price by Category
db.getCollection('products').aggregate([
    {
        $project: {
            category: 1,
            rating: 1,
            discounted_price_numeric: {
                $toDouble: {
                    $replaceAll: {
                        input: {
                            $replaceAll: { input: "$discounted_price", find: "₹", replacement: "" }
                        },
                        find: ",",
                        replacement: ""
                    }
                }
            }
        }
    },
    {
        $group: {
            _id: "$category",
            averageRating: { $avg: "$rating" },
            averageDiscountedPrice: { $avg: "$discounted_price_numeric" },
            productCount: { $count: {} }
        }
    },
    {
        $sort: { averageRating: -1 }
    },
    {
        $out: "category_average_stats_collection"
    }
]);

console.log("Aggregation created successfully");
