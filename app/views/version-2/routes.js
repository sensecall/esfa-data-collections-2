const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
	res.redirect(`/${req.version}/settings`)
})

router.get('/history', (req, res) => {
	var currentPage = 'history'
	res.render(`${req.version}/history`,{currentPage})
})

router.get('/data-submissions', (req, res) => {
	var currentPage = 'submit'
	res.render(`${req.version}/data-submissions/index`,{currentPage})
})

// ILR
router.get('/data-submissions/ilr', (req, res) => {
	var currentPage = 'submit'
	res.render(`${req.version}/data-submissions/ilr`,{currentPage})
})

router.get('/submit-your-ilr', (req, res) => {
	var currentPage = 'submit'
	res.render(`${req.version}/data-submissions/ilr/submit/index`,{currentPage})
})

router.get('/upload-your-ilr', (req, res) => {
	var currentPage = 'submit'
	res.render(`${req.version}/data-submissions/ilr/submit/upload-ilr`,{currentPage})
})

router.get('/ilr-upload-complete', (req, res) => {
	var currentPage = 'submit'
	res.render(`${req.version}/data-submissions/ilr/submit/ilr-upload-complete`,{currentPage})
})

router.get('/login', (req, res) => {
	res.render(`${req.version}/login`,)
})

router.get('/settings', (req, res) => {
	res.render(`${req.version}/account-settings`,)
})

router.get('/signed-out', (req, res) => {
	res.render(`${req.version}/signed-out`,)
})

router.get('/claim-esfa-funding', (req, res) => {
	res.render(`${req.version}/index`,)
})

module.exports = router
