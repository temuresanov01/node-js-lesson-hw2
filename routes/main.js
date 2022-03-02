const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World! привет страна')
})

router.post('/', (req, res) => {
  res.send('post method')
})

router.put('/', (req, res) => {
  res.send('put method')
})

router.delete('/', (req, res) => {
  res.send('delete method')
})

module.exports = router