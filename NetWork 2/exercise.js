async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      const todo = await response.json();
  
      const containerElement = document.getElementById('container');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = todo.title;
  
      const checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxElement.checked = todo.completed;
  
      containerElement.appendChild(titleElement);
      containerElement.appendChild(checkboxElement);
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchTodo();