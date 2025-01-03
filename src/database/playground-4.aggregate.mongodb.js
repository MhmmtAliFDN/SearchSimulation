// The current database to use.
use('search_db');

// Adding Discount Amounts Based on Category
db.getCollection('products').aggregate([
    {
        $project: {
            category: 1,
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
            totalDiscountedPrice: { $sum: "$discounted_price_numeric" }
        }
    },
    {
        $out: "category_total_discounted_price_collection"
    }
]);

console.log("Aggregation created successfully");
