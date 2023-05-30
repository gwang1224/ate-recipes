
<html>
<head>
  <title>Forum</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
    }
    .post {
      background-color: #ffffff;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .post-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .post-author {
      font-size: 14px;
      color: #666666;
      margin-bottom: 10px;
    }
    .post-content {
      margin-bottom: 10px;
    }
    .post-date {
      font-size: 12px;
      color: #999999;
    }
    .post-form {
      margin-top: 20px;
      text-align: center;
    }
    .post-form input[type="text"],
    .post-form textarea {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #cccccc;
      margin-bottom: 10px;
    }
    .post-form input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Forum</h1>
    <div class="post">
      <h2 class="post-title">Post Title</h2>
      <p class="post-author">Posted by John Doe</p>
      <p class="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis metus vel ex volutpat dapibus.</p>
      <p class="post-date">Posted on May 30, 2023</p>
    </div>
    <div class="post">
      <h2 class="post-title">Another Post Title</h2>
      <p class="post-author">Posted by Jane Smith</p>
      <p class="post-content">Praesent et urna dignissim, viverra nulla at, fermentum sem.</p>
      <p class="post-date">Posted on May 28, 2023</p>
    </div>
    <div class="post-form">
      <h2>Create a New Post</h2>
      <form>
        <input type="text" name="title" placeholder="Title" required>
        <input type="text" name="author" placeholder="Author" required>
        <textarea name="content" placeholder="Content" required></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</body>
</html>
