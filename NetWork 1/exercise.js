
async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
  
      const todoListElement = document.querySelector('.todo-list');
  
      todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        todoListElement.appendChild(listItem);
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchTodos();