var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    this.todos.forEach(function(todo){
      if (todo.completed === true)
        completedTodos++;
    })
// Case 1: any completed changes all to False
  this.todos.forEach(function(todo){
    if(completedTodos === totalTodos){
      todo.completed = false}

// Case 2: otherwise changes all to True
    else{todo.completed = true}
  })
  }
};

// Handdles user interaction or user interface UI///////////////
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};



// responsable for what users see
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';


    // will not recognize 'this' because forEach is a call back function
    todoList.todos.forEach(function(todo,index){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      // creates delete buttons and completion text for each todo
      todoLi.id = index;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    },this)
  },
  // creates delete button for a todo
  createDeleteButton: function(){
  var DeleteButton = document.createElement('button');
  DeleteButton.textContent = 'Delete';
    DeleteButton.className = 'deleteButton';
    return DeleteButton;
},

  setUpEventListeners: function(){
   var todosUl = document.querySelector('ul'); // getting UL element
   todosUl.addEventListener('click',function(event){ // adds event listener to UL only not each LI
   var elementClicked = event.target // get element that was clicked
   if (elementClicked.className === 'deleteButton'){ // is element clicked a delete button?
     handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); // delete element based on id
   }
});
  }
};

view.setUpEventListeners();
