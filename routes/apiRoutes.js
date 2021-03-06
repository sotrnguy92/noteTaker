const router = require("express").Router();
const fs = require("fs");

router.get('/notes', (req, res) => {
    const dbRead = JSON.parse(fs.readFileSync('db/db.json'));
    res.send(dbRead)
});

router.post("/notes", (req, res) => {
    const {title, text} = req.body;
    const dbRead = JSON.parse(fs.readFileSync('db/db.json'));
    const newNoteId = dbRead.length+1;
    const noteToAdd = {title, text, id: newNoteId};

    dbRead.push(noteToAdd);
    fs.writeFileSync('db/db.json', JSON.stringify(dbRead));

    res.send(dbRead);
});

router.delete("/notes/:id", (req, res) => {
    const dbRead = JSON.parse(fs.readFileSync('db/db.json'));
    const id = req.params.id;
    const result = dbRead.filter(note => note.id !== parseInt(id));
    fs.writeFileSync('db/db.json', JSON.stringify(result));
    res.send(result);
})

module.exports = router;
