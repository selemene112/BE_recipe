const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const bodyParser = require('body-parser');

const hutan = require('./route/UserRoute');
const recipe = require('./route/Reciperoute');
const Auth = require('./route/auth');
const comment = require('./route/comment');

app.use(cors());
// app.use(express.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    message: 'hello world!!!',
  });
});

app.use('/user', hutan);
app.use('/Auth', Auth);
app.use('/com', comment);
app.use('/recipe', recipe);

app.listen(3001, () => {
  console.log(`Server Running On Port '${'3001'}'`);
});
