const express = require('express')
const app = express()
const port = 8000

const login = require('./login')
const encoder = require('./encoder')

app.use(express.json())
const authorization = require('./middleware/authorization');

var cors = require('cors')
app.use(cors())

app.post('/login', async (req, res) => {
  try {
    const { token } = await login(req, res);
    return token
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.post('/encode', authorization, (req, res) => {
  const inputString = req.body.inputString;
  const encodedString = encoder(inputString)
  res.send(encodedString);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))