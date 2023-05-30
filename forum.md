<html>
<head>
  <title>Forum</title>
  <style>
    /* Container styles */
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    /* Post styles */
    .post {
      margin-bottom: 20px;
      padding: 10px;
      background-color: #f2f2f2;
    }
    .post-title {
      font-size: 24px;
      margin: 0;
    }
    .post-author {
      font-style: italic;
      margin-top: 5px;
    }
    .post-content {
      margin-top: 10px;
    }
    .post-date {
      font-size: 12px;
      color: #888;
      margin-top: 5px;
    }
    /* Post form styles */
    .post-form {
      margin-top: 20px;
    }
    .post-form input[type="text"],
    .post-form textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 5px;
    }
    .post-form input[type="submit"] {
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
      padding: 10px 20px;
    }
    .post-form input[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Forum</h1>
    <div id="posts"></div>
    <div class="post-form">
      <h2>Create a New Post</h2>
      <form id="create-post-form">
        <input type="text" name="author" placeholder="Author" required>
        <textarea name="content" placeholder="Content" required></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>

  <script>
    // Fetch and display all posts
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
          const postElement = createPostElement(post);
          postsContainer.appendChild(postElement);
        });
      });

    // Handle form submission to create a new post
    const createPostForm = document.getElementById('create-post-form');
    createPostForm.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(createPostForm);
      const post = {
        name: formData.get('author'),
        text: formData.get('content')
      };

      fetch('http://localhost:4000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(response => response.json())
      .then(createdPost => {
        const postElement = createPostElement(createdPost);
        const postsContainer = document.getElementById('posts');
        postsContainer.appendChild(postElement);
        createPostForm.reset();
      });
    });

    // Helper function to create a post element
    function createPostElement(post) {
      const postElement = document.createElement('div');
      postElement.className = 'post';

      const titleElement = document.createElement('h2');
      titleElement.className = 'post-title';
      titleElement.textContent = post.name;
      postElement.appendChild(titleElement);

      const authorElement = document.createElement('p');
      authorElement.className = 'post-author';
      authorElement.textContent = 'Posted by ' + post.name;
      postElement.appendChild(authorElement);

      const contentElement = document.createElement('p');
      contentElement.className = 'post-content';
      contentElement.textContent = post.text;
      postElement.appendChild(contentElement);

      const dateElement = document.createElement('p');
      dateElement.className = 'post-date';
      dateElement.textContent = 'Posted on ' + new Date().toLocaleDateString();
      postElement.appendChild(dateElement);

      return postElement;
    }
  </script>
</body>
</html>
