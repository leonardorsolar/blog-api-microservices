const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 4002;

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type == "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, commemts: [] };
  }

  if (type == "CommentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.commemts.push({ id, content });
  }
  console.log(posts);
  res.send({});
});

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});
