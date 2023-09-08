require("dotenv").config();

const express = require('express');
const itemRoutes = require('./routes/items');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware configurations
app.use(cors());
app.use(express.json()); // parse incoming data

// Setup routes
app.use('/todos', itemRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Start the server and make it listen on PORT
app.listen(4000, () => {
    console.log(`Server is running on port 4000, connected to db`);
});
