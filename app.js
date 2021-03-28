const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Adding a note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of a note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const {title, body} = argv;
        notes.addNote(title, body);
    }
});

//Removing a note
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: (argv) =>  {
        const {title} = argv;
        notes.removeNote(title);
    }
});


//List all notes
yargs.command({
    command: 'list',
    describe: 'Listing out all notes',
    handler: function () {
        notes.listNotes();
    }
});

//Read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: (argv) =>  {
        const {title} = argv;
        notes.readNote(title)
    }
});


yargs.parse();