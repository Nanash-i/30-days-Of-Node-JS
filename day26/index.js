const mongoose = require("mongoose");

let isDBConnected = false;
const connectDB = async () => {
    if (isDBConnected) {
        return;
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1/day26", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isDBConnected = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const ProductModel = mongoose.model("products", ProductSchema);

async function getProductStatistics() {
    await connectDB();
    try {
        const stats = await ProductModel.aggregate([
            {
                $group: {
                    _id: 'productStats',
                    count: { $sum: 1 },
                    avgPrice: { $avg: '$price' },
                    maxQuantity: { $max: '$quantity' },
                },
            },
        ]).exec();
        return stats;
    } catch (error) {
        console.error("Error fetching product statistics:", error);
        throw error;
    }
}

getProductStatistics()
    .then((data) => console.log("Success", data))
    .catch((err) => console.error("Error while fetching product statistics", err));
