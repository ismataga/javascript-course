const todoList = [
    { name: "make dinner", dueDate: "2024-12-24" },
    { name: "wash dishes", dueDate: "2024-12-25" },
  ];
  
  // Initial rendering of the list
  renderTodoList();
  
  /**
   * Renders the todo list to the DOM
   */
  function renderTodoList() {
    const todoContainer = document.querySelector(".js-todo-list");
    todoContainer.innerHTML = "";
  
    todoList.forEach((todo, index) => {
      const todoItemHTML = `
        <div class="todo-item">
          <div class="todo-name">${todo.name}</div>
          <div class="todo-date">${todo.dueDate}</div>
          <button 
            class="todo-delete-button" 
            aria-label="Delete ${todo.name}" 
            onclick="deleteTodo(${index})"
          >
            Delete
          </button>
        </div>
      `;
      todoContainer.innerHTML += todoItemHTML;
    });
  }
  
  /**
   * Adds a new todo to the list
   */
  function addTodo() {
    const nameInput = document.querySelector(".js-name-input");
    const dueDateInput = document.querySelector(".js-due-date-input");
  
    const name = nameInput.value.trim();
    const dueDate = dueDateInput.value;
  
    if (!name || !dueDate) {
      alert("Please enter both a task name and a due date.");
      return;
    }
  
    todoList.push({ name, dueDate });
  
    // Clear input fields
    nameInput.value = "";
    dueDateInput.value = "";
  
    renderTodoList();
  }
  
  /**
   * Deletes a todo from the list by index
   * @param {number} index - The index of the todo item to delete
   */
  function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
  }
  