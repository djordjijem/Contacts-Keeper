let express = require('express');
let router = express.Router();

// @route GET api/auth
// @desc Get logged in user
// @access Private

router.get('/', (req, res) => {
    res.json({ msg: 'Get logged in user' });
});

// @route POST api/auth
// @desc auth user & get token
// @access Public

router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;
