// routes/notes.js
const {Note, notes} = require('../models/note');

const findNote = (id) => {
    return notes.find(note => id === note.id);
  };

module.exports = function(app, db) {

    app.post('/notes', (req, res) => {
        console.log(req.body);
        var newNote = req.body;
        notes.push(newNote);
        res.json(newNote);
    });

    app.get('/notes', (req, res) => {
        res.json(notes);
    });

    app.put('notes/:noteId', (req, res) => {
        res.json(notes);
    });

    app.delete('notes/:noteId', (req, res) => {
        res.json(notes);
    });
};





