const express = require('express');
const app = express();
const port = 5000;

//handle forms
app.use(express.urlencoded({ extended: true }));

// use EJS as the view engine
app.set('view engine', 'ejs');

// serve static files from the public folder
app.use(express.static('public'));


let tasks = [
    'Watch Real madrid',
    'cook dinner',
    'write a beautiful js code'
  ];

//get tsks
app.get('/', (req, res) => {
  res.render('index', { tasks });
});


// add a new task
app.post("/addTask", (req, res) => {
    let newTask = req.body.newTask;
    console.log(newTask)
    tasks.push(newTask);
    res.redirect("/");
  });
  
  // delete a task
  app.post("/deleteTask", (req, res) => {
    let taskIndex = req.body.taskIndex;
    tasks.splice(taskIndex, 1);
    res.redirect("/");
  });

app.listen(port, () => {
  console.log(`App runnon on http://localhost:${port}`);
});
