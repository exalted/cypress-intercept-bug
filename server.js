const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.post('/sendPayload', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
