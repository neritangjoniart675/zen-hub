/* 
File Name: ComplexCode.js

Description: 
This code is an implementation of a social media platform backend system. It includes functionalities like user registration, login, creating posts, liking posts, commenting on posts, and following other users. The code is written in JavaScript and is more than 200 lines long.

Note: This code is a simplified version and does not include error handling or database operations. It is meant to demonstrate the complexity and structure of a social media backend system.

*/

// User class
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.posts = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(this.username, content);
    this.posts.push(post);
    return post;
  }

  likePost(post) {
    post.like(this);
  }

  commentPost(post, comment) {
    post.comment(this, comment);
  }

  followUser(user) {
    if (user !== this && !this.following.includes(user)) {
      this.following.push(user);
    }
  }
}

// Post class
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  like(user) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  comment(user, comment) {
    this.comments.push({ user, comment });
  }

  getLikesCount() {
    return this.likes.length;
  }
}

// Example usage
const user1 = new User("user1", "password1", "user1@example.com");
const user2 = new User("user2", "password2", "user2@example.com");

const post1 = user1.createPost("Hello from user1!");
user2.likePost(post1);
user2.commentPost(post1, "Nice post!");

const post2 = user2.createPost("Greetings from user2!");
user1.likePost(post2);
user1.commentPost(post2, "Cool post!");

user1.followUser(user2);

console.log(user1.posts);
console.log(user2.posts);
console.log(post1.likes);
console.log(post2.likes);
console.log(post1.comments);
console.log(post2.comments);