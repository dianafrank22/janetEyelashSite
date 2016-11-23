const router = require('express').Router();


router.get('/',(req, res) => {
	res.render('index')
})

router.get('/about',(req, res) => {
	res.render('about')
})

router.get('/faq',(req, res) => {
	res.render('faq')
})

router.get('/contact',(req, res) => {
	res.render('contact')
})

router.get('/pricing',(req, res) => {
	res.render('pricing')
})

module.exports = router;