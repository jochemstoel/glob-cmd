#!/usr/bin/env node

var program = require('commander')
var package = require('./package')

program
    .version(package.version)
    .description(`Match files using the patterns the shell uses, like stars and stuff.\n
This is a [glob implementation in JavaScript](https://www.npmjs.com/package/glob) for command line use.`)
    .option('-j, --json', 'JSON encode matches (default separates by newline)')
    .option('-s, --delimiter [separator]', 'Separate matches by delimiter (default separator is newline)')
    .option('-o, --output [filename]', 'Write to file (write to stdout by default)')
    .option('-c, --cwd [directory]', 'The current working directory in which to search')
    .option('-n, --nodir', 'Do not match directories, only files (Note: to match only directories, simply put a / at the end of the pattern)')
    .parse(process.argv);

let pattern = program.args[0] || null

let options = {
	//
}

options.delimiter = (() => {
	if(program.json) {
		if(program.delimiter) {
			console.error('Can not specify delimiter when using --json')
			process.exit()
		}
	} else {
		return program.delimiter || '\n'
	}
})()

if(program.cwd)
	options.cwd = program.cwd
if(program.nodir)
	options.nodir = true

if(!pattern) {
	console.error('Missing glob pattern argument.')
	program.outputHelp()
} else {
	require('glob')(pattern, options, (error, paths) => {
	    if (error)
	        throw error.message
	    let data = paths

	    if (program.json) {
	        data = JSON.stringify(data, false, 3)
	    } else  {
	    	data = ''
	    	for (let path of paths) {
	            data += `${path}${options.delimiter}`
	        }
	        data = data.trim()
	    }
	    if (program.output) {
	        try {
	        	require('fs').writeFileSync(program.output, data)
	        } catch (exception) {
	        	console.error('Error writing file.')
	        	console.error(exception.message)
	        	program.outputHelp()
	        }
	    }
	    else {
	     	console.log(data)   
	    }
	})
}