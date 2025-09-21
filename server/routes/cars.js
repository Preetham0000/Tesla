const express = require('express');
const Car = require('../models/Car');

const router = express.Router();

// Sample car data
const sampleCars = [
    {
        name: "Model S",
        basePrice: 79990,
        description: "Premium luxury sedan with cutting-edge technology and impressive performance",
        imageUrl: "https://tesla-cdn.thron.com/static/S1DBCS_model-s-social",
        options: {
            battery: [
                { type: "Standard Range", price: 0 },
                { type: "Long Range", price: 15000 },
                { type: "Plaid", price: 35000 }
            ],
            color: [
                { name: "Pearl White Multi-Coat", price: 0, imageUrl: "https://tesla-cdn.thron.com/static/S1DBCS_model-s-social" },
                { name: "Deep Blue Metallic", price: 1500, imageUrl: "https://tesla-cdn.thron.com/static/S1DBCS_model-s-social" },
                { name: "Red Multi-Coat", price: 2500, imageUrl: "https://tesla-cdn.thron.com/static/S1DBCS_model-s-social" },
                { name: "Midnight Silver Metallic", price: 1500, imageUrl: "https://tesla-cdn.thron.com/static/S1DBCS_model-s-social" }
            ],
            wheels: [
                { name: "19-inch Tempest", price: 0 },
                { name: "21-inch Arachnid", price: 4500 }
            ],
            interior: [
                { name: "All Black", price: 0 },
                { name: "Black and White", price: 2000 }
            ]
        }
    },
    {
        name: "Model 3",
        basePrice: 42490,
        description: "Affordable electric sedan with exceptional range and performance",
        imageUrl: "https://tesla-cdn.thron.com/static/R8N7B4_model-3-social",
        options: {
            battery: [
                { type: "Rear-Wheel Drive", price: 0 },
                { type: "Long Range AWD", price: 5000 },
                { type: "Performance AWD", price: 12500 }
            ],
            color: [
                { name: "Pearl White Multi-Coat", price: 0, imageUrl: "https://tesla-cdn.thron.com/static/R8N7B4_model-3-social" },
                { name: "Deep Blue Metallic", price: 1000, imageUrl: "https://tesla-cdn.thron.com/static/R8N7B4_model-3-social" },
                { name: "Red Multi-Coat", price: 2000, imageUrl: "https://tesla-cdn.thron.com/static/R8N7B4_model-3-social" },
                { name: "Midnight Silver Metallic", price: 1000, imageUrl: "https://tesla-cdn.thron.com/static/R8N7B4_model-3-social" }
            ],
            wheels: [
                { name: "18-inch Aero", price: 0 },
                { name: "19-inch Sport", price: 1500 }
            ],
            interior: [
                { name: "All Black", price: 0 },
                { name: "Black and White", price: 1500 }
            ]
        }
    }
];

// Initialize sample data (run once)
async function initializeSampleData() {
    try {
        const count = await Car.countDocuments();
        if (count === 0) {
            await Car.insertMany(sampleCars);
            console.log('Sample car data inserted');
        }
    } catch (error) {
        console.error('Error initializing sample data:', error);
    }
}

// Get all cars
router.get('/', async (req, res) => {
    try {
        await initializeSampleData(); // Ensure sample data exists
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Server error fetching cars' });
    }
});

// Get specific car by model name
router.get('/:modelName', async (req, res) => {
    try {
        const modelName = req.params.modelName.replace('-', ' ');
        const car = await Car.findOne({ 
            name: new RegExp(modelName, 'i') 
        });
        
        if (!car) {
            return res.status(404).json({ message: 'Car model not found' });
        }
        
        res.json(car);
    } catch (error) {
        console.error('Error fetching car:', error);
        res.status(500).json({ message: 'Server error fetching car' });
    }
});

module.exports = router;