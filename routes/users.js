const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
    console.log(req.params)
  res.send('users get')
})

router.get('/:userid/ct/:order', (req, res) => {
    console.log(req.params)
  res.send('users get')
})

router.post('/', (req, res) => {
    console.log(req.body)
  res.send('users post')
})

module.exports = router