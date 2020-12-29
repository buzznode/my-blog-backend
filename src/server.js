import express from 'express';
import bodyParser from 'body-parser';

// To start the server use: npm start (auto-refresh) OR npm run norefresh (NO auto-refresh)

const articlesInfo = {
  'learn-react': {
    comments: [],
    upvotes: 0,
  },
  'learn-node': {
    comments: [],
    upvotes: 0,
  },
  'my-thoughts-on-resumes': {
    comments: [],
    upvotes: 0,
  },
}

const app = express();
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes++;
  res.status(200).send(`${articleName} now has a total of ${articlesInfo[articleName].upvotes} upvotes!`);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(201).send(articlesInfo[articleName]);
});