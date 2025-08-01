const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// Index - Show all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.render('index', { subscribers: subscribers });
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// New - Show form to create new subscriber
router.get('/new', (req, res) => {
  res.render('new');
});

// Create - Add new subscriber to database
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    subscribeToChannel: req.body.subscribeToChannel
  });

  try {
    await subscriber.save();
    res.redirect('/subscribers');
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate email+channel combination
      const errorMessage = `Email "${req.body.email}" is already subscribed to channel "${req.body.subscribeToChannel}". Please use a different email or choose a different channel.`;
      res.status(400).render('new', { 
        error: errorMessage,
        formData: req.body 
      });
    } else {
      res.status(400).send('Error: ' + error.message);
    }
  }
});

// Show - Display one subscriber
router.get('/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    res.render('show', { subscriber: subscriber });
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// Edit - Show form to edit subscriber
router.get('/:id/edit', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    res.render('edit', { subscriber: subscriber });
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// Update - Update subscriber in database
router.put('/:id', async (req, res) => {
  try {
    await Subscriber.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      subscribeToChannel: req.body.subscribeToChannel
    });
    res.redirect('/subscribers/' + req.params.id);
  } catch (error) {
    res.status(400).send('Error: ' + error.message);
  }
});

// Delete - Show confirmation form
router.get('/:id/delete', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    res.render('delete', { subscriber: subscriber });
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// Destroy - Delete subscriber from database
router.delete('/:id', async (req, res) => {
  try {
    await Subscriber.findByIdAndDelete(req.params.id);
    res.redirect('/subscribers');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

module.exports = router;
