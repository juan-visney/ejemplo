const express = require('express')
const router = express.Router()
const query = require('../database')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/ver', async (req, res) => {
    const list = await query.query('select * from datos')
    console.log(list)
    res.json(list)
})

router.get('/registro', (req, res) => {
    res.render('./vistas/registro')
})

router.post('/registro', async (req, res) => {
    const {name} = req.body
    const datos = {name}
    await query.query('insert into datos set ?', datos)
    res.redirect('/')
})

module.exports = router