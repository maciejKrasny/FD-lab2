var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();

var cors = require('cors');

var port = 4000;


mongoose.connect("mongodb+srv://admin:admin@frontdev-ofjfj.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  dbName: 'todo_db'
})

app.set('port', process.env.PORT || port);
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join((__dirname, "public"))));


app.use(cors());

var Todo = mongoose.model('Todo', {
  text: String,
  done: Boolean
});

app.get('/api/todos', function(req, res) {
  Todo.find(function(err, todos) {
    if (err) res.send(err);
    console.log(todos)
    res.json(todos);
  })
});

app.get('/api/todos/:todo_id', function(req, res) {
  Todo.find({
    _id: req.param.todo_id
  },
    function(err, todos) {
      if (err) res.send(err);
      res.json(todos);
    }
  )
})

app.post("/api/todos", function(req, res) {
  Todo.create(
    {
      text: req.body.text,
      done: false
    },
    function(err, todo) {
      if (err) res.send(err);
      res.json(todo);
    }
  )
})

app.put("/api/todos/:todo_id", function(req, res) {
  Todo.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      done: req.body.done
    },
    function(err, todo) {
      if (err) res.send(err);

      Todo.find(function(err, todos) {
        if (err) res.send(err);
        res.json(todos);
      })
    }
  )
})


app.delete("/api/todos/:todo_id", function(req, res) {
  Todo.deleteOne({
    _id: req.params.todo_id
  },
    function(err, todos){
      if (err) res.send(err);
      res.json(todos);
  })
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
})