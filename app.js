const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

console.log(process.argv);


yargs.version("1.1.0");

//Create an add command
yargs.command({

    command : 'add',
    description : 'Add new note',
    builder : {
        title : {
            description : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            description : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body);
    }
})

//Create Remove Command
yargs.command({
    command : 'remove',
    description : 'Remove a note',
    builder : {
        title : {
            description : 'Note Title',
            demandOption : true,
            type : 'string' 
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    
    }
})
//Create List command
yargs.command({
    command : 'list',
    description : 'list a note',
    handler(){
        notes.listNotes();
    }
})

//Create read command
yargs.command({
    command : 'read',
    description : 'Reading a note',
    builder : {
        title : {
            description : 'Note Title',
            demandOption : true,
            type : 'string' 
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
    
//console.log(yargs.argv);













//const command = process.argv[2];

//if (command === 'add'){
    //console.log('Adding notes!');
//elseif(command === 'remove')
   // console.log('Removing Notes!');
//}











//const notes = getNotes();

//console.log(notes); 

//console.log(chalk.blue.inverse.bold('Error!'));

//console.log(process.argv[2]);
