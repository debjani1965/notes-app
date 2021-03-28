const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNotes.length == 0) {
        notes.push({
            title,
            body
        });    
        saveNote(notes);
        console.log(chalk.green("Note saved"))
    } else {
        console.log(chalk.red('Title already taken'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    
    if(notes.length > filteredNotes.length > 0) {
        saveNote(filteredNotes);
        console.log(chalk.green('Note removed'))
    } else {
        console.log(chalk.red('Note not found'))
    }
}
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.bold("All Notes"));
    notes.forEach(note => {
        console.log(note.title)
    });
}
const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => {
        return note.title === title
    });

    if(note) {
        console.log(chalk.blue.bold("Note details"));
        console.log(note.title, "   ===  ", note.body)
    } else {
        console.log(chalk.red('Note not found'));
    }

}
const saveNote = (notes) => {
    noteData = JSON.stringify(notes);
    fs.writeFileSync('notes.json',noteData);
}
const loadNotes = (notes) => {
    try {
        return JSON.parse((fs.readFileSync('notes.json')).toString())
    } catch (e) {
        return [];
    }
}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};