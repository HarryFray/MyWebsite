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
  },

  // Change an Object
  changeTd: function(index, newText) { // changes an object in todos
    this.todos[index].item_text = newText;
  },

  // Detele an Object
  deleteTd: function(index) {
    this.todos.splice(index, 1);

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
        this.toggle(i)
      };


      // CASE 2: Make everything True
    } else {
      for (var i = 0; i < this.todos.length; i++) { // changes all to true
        this.todos[i].completed = true;
      }
    }
  },
};



// Handdles user interaction or user interface UI
var handlers = {
  addTd: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTd(addTodoTextInput.value) // value just used when calling an imput?
    addTodoTextInput.value = ""
    view.displayTd()
  },
  changeTd: function() {
    var changeTdIndexInput = document.getElementById('changeTdIndexInput');
    var changeTdTextInput = document.getElementById('changeTdTextInput');
    todoList.changeTd(changeTdIndexInput.valueAsNumber, changeTdTextInput.value)
    changeTdIndexInput.value = ""
    changeTdTextInput.value = ""
    view.displayTd()
  },
  deleteTd: function() {
    var deleteTdInput = document.getElementById('deleteTdInput');
    todoList.deleteTd(deleteTdInput.valueAsNumber)
    deleteTdInput.value = ""
    view.displayTd()
  },
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todoList.toggle(toggleCompletedInput.valueAsNumber)
    toggleCompletedInput.value = ""
    view.displayTd()
  },
  toggleAll: function() {
    todoList.toggleAll()
    view.displayTd()
  },
};

// responsable for what users see
var view = {
  displayTd: function() {
    var todoUl = document.querySelector('ul') // new method finds element location
    todoUl.innerHTML = '' // points inside specified element

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li') // creates a new element in html
      todoLi.textContent = todoList.todos[i].completed ? '(X) ' + todoList.todos[i].item_text : '( ) ' + todoList.todos[i].item_text; // new method adds content to tag
      todoUl.appendChild(todoLi) // appends new child element within specified parent element
    }
  }
};
