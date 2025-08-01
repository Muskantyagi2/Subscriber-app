const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));  //
app.use(express.static('public'));

// Method override for PUT and DELETE requests
app.use((req, res, next) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    req.method = method;
  }
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

// Home route redirect to subscribers
app.get('/', (req, res) => {
  res.redirect('/subscribers');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
