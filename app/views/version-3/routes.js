const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
  res.redirect(`/${req.version}/guidance`)
})

router.get('/sfs', (req, res) => {
  res.render(`${req.version}/sfs-home`)
})

router.post('/submit-ilr', (req, res) => {
  var submissionType = req.body['submissionType']
  if (submissionType === 'online') {    
    res.redirect(`/${req.version}/submit-ilr-online/learners-left`)
  } else {
    res.redirect(`/${req.version}/upload-ilr-file`)
  }
})

router.get('/upload-ilr-file', (req, res) => {
  res.render(`${req.version}/upload-ilr-file/upload-ilr-file`)
})

router.post('/upload-ilr-file', (req, res) => {
  res.redirect(`/${req.version}/upload-ilr-file/uploading`)
})

router.post('/submit-ilr-online/learners-left', (req, res) => {
  var submissionType = req.body['learners-left']
  if (submissionType === 'true') {
    res.redirect(`/${req.version}/submit-ilr-online/learners-left-search`)
  } else {
    res.redirect(`/${req.version}/submit-ilr-online/learners-joined`)
  }
})

router.post('/submit-ilr-online/learners-joined', (req, res) => {
  var submissionType = req.body['learners-joined']
  if (submissionType === 'true') {
    res.redirect(`/${req.version}/submit-ilr-online/add-learner-1`)
  } else {
    res.redirect(`/${req.version}/submit-ilr-online/change-learner-details`)
  }
})

router.post('/submit-ilr-online/change-learner-details', (req, res) => {
  var submissionType = req.body['learners-changed']
  if (submissionType === 'true') {
    res.redirect(`/${req.version}/submit-ilr-online/change-learner-details`)
  } else {
    res.redirect(`/${req.version}/submit-ilr-online/summary`)
  }
})

router.post('/submit-ilr-online/learners-left-additional', (req, res) => {
  var submissionType = req.body['learners-left-additional']
  if (submissionType === 'true') {
    res.redirect(`/${req.version}/submit-ilr-online/learners-left-search`)
  } else {
    res.redirect(`/${req.version}/submit-ilr-online/learners-joined`)
  }
})

router.get('/file', (req, res) => {
	res.redirect('/file')
})

module.exports = router
