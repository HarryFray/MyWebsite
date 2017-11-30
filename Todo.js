// WatchAndCode Todo Exercise

// To do app for chrome
var todos = {
  todos: [],
  display: function() {
    console.log('My Todos', this.todos);
  },

  addTd: function(item_text) { // adds new object to todos
    this.todos.push({
      item_text: item_text,
      completed: false,
    });
    this.display();
  },

  // changes an object in todos
  changeTd: function(index, newText) {
    this.todos[index].item_text = newText;
    this.display();
  },

  // deletes a todo in todos
  deleteTd: function(index) {
    this.todos.splice(index, 1);
    this.display();
  },
  toggleCompleted: function(index){
  var todo = this.todos[index];
  todo.completed = !todo.completed;
  this.display();
  },
};
