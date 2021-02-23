const { Router } = require ('express');
const router = Router()
const fetch = require('node-fetch')

const api = {
    key:'0ad1a25ea3128ed85ce5902f77613475',
    base:"https://api.openweathermap.org/data/2.5/"

}

router.get('/api/search', async (req, res) => {
    const response = await fetch(`${api.base}weather?q=${req.query.q}&units=metric&APPID=${api.key}`)
    const json = await response.json()
    res.json(json)
})

module.exports = router;