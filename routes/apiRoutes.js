const router = require("express").Router();
const fs = require("fs");

router.get('/notes', (req, res) => {
    const db = fs.readFileSync('db/db.json');
    res.send(JSON.parse(db))
});


module.exports = router;
