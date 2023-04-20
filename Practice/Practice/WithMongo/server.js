/*
Note you can use .then and catch 
*/
// Require the necessary packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task = require('./models/task');

// Create a new instance of express
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use(express.static('public'));
// Connect to MongoDB
mongoose.connect('yourdburl', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

// Set up the view engine
app.set('view engine', 'ejs');

// Define the home route
app.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });
  } catch (err) {
    console.log('Error getting tasks from database', err);
    res.send('Error getting tasks from database');
  }
});

// Define the add task route
app.post('/addTask', async (req, res) => {
  const task  = req.body.task;
  console.log(task)

  try {
    await Task.create({ task });
    res.redirect('/');
  } catch (err) {
    console.log('Error creating task', err);
    res.send('Error creating task');
  }
});

// Define the delete task route (not yet finished bcz mongo has it's own _id)
app.post('/deleteTask1', async (req, res) => {
  let  id  = req.body.taskIndex;
  id = parseInt(id)
  try {
    await Task.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    console.log('Error deleting task', err);
    res.send('Error deleting task');
  }
});

// Define the delete task route
app.post('/deleteTask', async (req, res) => {
    
   
    try {
      await Task.findOneAndDelete({task:req.body.taskIndex});
      res.redirect('/');
    } catch (err) {
      console.log('Error deleting task', err);
      res.send('Error deleting task');
    }
  });
// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
