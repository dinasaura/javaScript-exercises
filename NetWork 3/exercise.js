async function createPost(event) {
    event.preventDefault();
  
    const form = document.getElementById('postForm');
    const title = form.elements.title.value;
    const completed = form.elements.completed.checked;
  
    const postData = {
      title: title,
      completed: completed
    };
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
  
      const newPost = await response.json();
      console.log('New Post:', newPost);
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const form = document.getElementById('postForm');
  form.addEventListener('submit', createPost);