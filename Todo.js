var todoList = {
  todos: [],

  // Display Todo text and completion status
  display: function() {
    if (this.todos.length === 0) {
      console.log('your todos list is empty');
    } else {
      console.log('My To Dos:');
      for (var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].completed ? '(X)' : '( )', this.todos[i].item_text);
      }

    }
  },
  // Add an Object
  addTd: function(item_text) { // adds new object to todos
    this.todos.push({
      item_text: item_text,
      completed: false,
    });
    this.display();
  },

  // Change an Object
  changeTd: function(index, newText) { // changes an object in todos
    this.todos[index].item_text = newText;
    this.display();
  },

  // Detele an Object
  deleteTd: function(index) {
    this.todos.splice(index, 1);
    this.display();
  },
  // True False toggle for an object
  toggle: function(index) { // changes booien in each todo object
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  },

  // True/ False toggle for all objects
  toggleAll: function() {
    totalTrue = 0
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true)
        totalTrue++;
    }
    // CASE 1: if everything is True make everything False
    if (totalTrue === this.todos.length) {
      for (var i = 0; i < this.todos.length; i++) {
        this.toggle(i)};


    // CASE 2: Make everything True
    } else {
      for (var i = 0; i < this.todos.length; i++) { // changes all to true
        this.todos[i].completed = true;
      }
    }
    this.display()
  },



};

/*
todoList.addTd('item 1')
todoList.addTd('item 2')
todoList.addTd('item 3')
todoList.addTd('item 4')
todoList.addTd('item 5')

todoList.toggle(0)
todoList.toggle(1)
todoList.toggle(2)
todoList.toggle(3)
todoList.toggle(4)
*/
