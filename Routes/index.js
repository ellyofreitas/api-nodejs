const express = require('express');
const router = express.Router();
const endpointName = '/';
const auth = require('../middlewares/auth')

router.get('/', auth, (req, res) => {
    // console.log(res.locals.auth_data);
    return res.send({message: `Tudo ok em ${endpointName}`});
});

router.post('/', (req, res) => {
    return res.send({message: `Tudo ok em ${endpointName}`});
});

module.exports = router;