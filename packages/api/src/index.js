const express = require('express')
const data = require('../products.json')

const server = express()
  .get('/api', (req, res) => {
    res.json({ data: { message: data } })
  })
  .listen(process.env.PORT, () => {
    console.log('api listening', server.address())
  })
