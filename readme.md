Match files using the patterns the shell uses, like stars and stuff.
This is a [glob implementation in JavaScript](https://www.npmjs.com/package/glob) for command line use.

```bash
glob --help
``` 

```bash

  Usage: cli [options]

  Options:

    -V, --version                output the version number
    -j, --json                   JSON encode matches (default separates by newline)
    -s, --delimiter [separator]  Separate matches by delimiter (default separator is newline)
    -o, --output [filename]      Write to file (write to stdout by default)
    -c, --cwd [directory]        The current working directory in which to search
    -n, --nodir                  Do not match directories, only files (Note: to match only directories, simply put a / at the end of the pattern)
    -h, --help                   output usage information

```

### Examples

#### Simplest
List all _.js_ files in current directory.

Command:
```bash
glob *.js
```

Output:
```bash 
index.js
utils.js
cli.js
someotherstuff.js
```

#### JSON
List mp3 files in current directory and JSON encode matches.

Command:
```bash
glob --json *.mp3
```
Output: 
```bash
[
   "01. SIR DRUMSALOT.mp3",
   "02. BRAVE.mp3",
   "03. WAKE UP FOOL.mp3",
   "04. THE FEVER IS GROWING.mp3",
   "05. THE LIFE FOR ME.mp3",
   "06. MAKE BELIEVE.mp3",
   "07. FUNNY KIND OF LOVE.mp3",
   "08. WITHOUT YOU.mp3",
   "09. RUNNING.mp3",
   "10. REALITY.mp3",
   "11. IT WILL NOT END.mp3",
   "12. SCREW IT.mp3"
]
```

#### Recursive
List all _.js_ files in all (sub)directories of current directory (_c:\codegroundjs_).

Command:
```bash
glob **/*.js
```

Outut:
```bash
dist/Codeground.js
dist/Codeground.min.js
dist/examples/es5/demo/script.js
dist/examples/es5/script.js
dist/examples/es6/demo/script.js
dist/examples/es6/script.js
dist/examples/fullscreen/demo/script.js
dist/examples/fullscreen/script.js
gulpfile.js
src/Codeground.js
test/test.js
``` 

#### Delimiter (separator)
Use a delimiter to separate matches. In this case, a semi colon.

Command:
```bash
glob --delimiter ; *.mp3
```

Output:
```bash
01. SIR DRUMSALOT.mp3;02. BRAVE.mp3;03. WAKE UP FOOL.mp3;04. THE FEVER IS GROWING.mp3;05. THE LIFE FOR ME.mp3;06. MAKE BELIEVE.mp3;07. FUNNY KIND OF LOVE.mp3;08. WITHOUT YOU.mp3;09. RUNNING.mp3;10. REALITY.mp3;11. IT WILL NOT END.mp3;12. SCREW IT.mp3;
```

#### Working directory
List all files, directories and subdirectories in _node_modules/codegroundjs_.

Command:
```bash
glob --cwd "e:/npm/node_modules/codegroundjs" **/*
```

Output:
```bash
_config.yml
assets
assets/codeground-rows.png
assets/codeground.png
bower.json
dist
dist/codeground.css
dist/Codeground.js
dist/codeground.min.css
dist/Codeground.min.js
dist/examples
dist/examples/es5
dist/examples/es5/demo
dist/examples/es5/demo/demo.html
dist/examples/es5/demo/script.js
dist/examples/es5/demo/style.css
dist/examples/es5/index.html
dist/examples/es5/script.js
dist/examples/es5/style.css
dist/examples/es6
dist/examples/es6/demo
dist/examples/es6/demo/demo.html
dist/examples/es6/demo/script.js
dist/examples/es6/demo/style.css
dist/examples/es6/index.html
dist/examples/es6/script.js
dist/examples/fullscreen
dist/examples/fullscreen/demo
dist/examples/fullscreen/demo/demo.html
dist/examples/fullscreen/demo/script.js
dist/examples/fullscreen/demo/style.css
dist/examples/fullscreen/index.html
dist/examples/fullscreen/script.js
dist/examples/fullscreen/style.css
gulpfile.js
package.json
README.md
src
src/codeground.css
src/Codeground.js
test
test/test.js
```

#### Match only files/directories
Recursively list only files (no directories) in _C:\files_ and write the results as JSON to found.json

Command:
```bash
glob --nodir --json --cwd "c:\files" --output found.json **/*
```
