const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
  res.redirect(`/${req.version}/index`)
})

router.get('/history', (req, res) => {
  res.render(`${req.version}/history`,)
})

router.get('/submit-your-data', (req, res) => {
  res.render(`${req.version}/data-submissions`,)
})

router.get('/login', (req, res) => {
  res.render(`${req.version}/login`,)
})

module.exports = router
