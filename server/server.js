const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/cars');

const app = express();
const PORT = process.env.PORT || 5000;

// Swagger setup
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tesla API',
            version: '1.0.0',
            description: 'API documentation for Tesla clone backend',
        },
        servers: [
            { url: 'http://localhost:5000' }
        ],
    },
    apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tesla', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Tesla API Server Running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});