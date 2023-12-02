# File-Manager
### Description
____

This file manager module provides functions for quickly working with files thanks to asynchronous work with them. The file manager includes the following features:
- print 
- write 
- move
- getDirectorySize
- watch

To start working with this module, clone the repository `git clone` and run the command

```
make install
```

## Module getDirectorySize

### Description

___

This function calculates the size of the passed directory. The function only counts the size of files nested in it, without taking into account other directories nested in it.


### Startup instructions
___

The function **getDirectorySize** is an executable file, so to use it you just need to issue the following command and pass as an argument the relative path to the directory whose size you want to know

```
getDirectorySize __fixtures__
```

### Example of work

[![asciicast](https://asciinema.org/a/eX08BXJ3EjCY5YLGseUPG8dZV.svg)](https://asciinema.org/a/eX08BXJ3EjCY5YLGseUPG8dZV)

## Module watch

### Description

___

This function monitors a file and tracks changes in it at a specified time interval. If changes occur, informs the user and calculates changes in file size


### Startup instructions
___

The function **watch** provides an executable file that takes three arguments in the specific sequence shown below. Accepted Arguments
- path to the file
- time interval of checks
- observation operating time

```
watch __fixtures__/file1.txt 500 10000
```

### Example of work

[![asciicast](https://asciinema.org/a/fU0IKKB3Jk9oElv0cvqyuWirP.svg)](https://asciinema.org/a/fU0IKKB3Jk9oElv0cvqyuWirP)

## Module print

### Description

___

This function asynchronously reads the transferred file and displays the contents of the file to the console.


### Startup instructions
___

The function **print** provides an executable file, which will take a single argument: path to file

```
print __fixtures__/file2.txt 
```

### Example of work

[![asciicast](https://asciinema.org/a/PcoP4IEaPqzDGCyxnPVDwT4S1.svg)](https://asciinema.org/a/PcoP4IEaPqzDGCyxnPVDwT4S1)

## Module move

### Description

___

:warning: **Be careful when using this module**: This module can mutate the file system (delete a file)!

This function transfers data from the first transferred file to another file, and then deletes the first transferred file (from where the data is transferred)


### Startup instructions
___

The function **move** takes two input arguments in the form of relative paths to files
- output file
- input file

```
move __fixtures__/file1.txt __fixtures__/file2.txt 
```

### Example of work
[![asciicast](https://asciinema.org/a/5zU8tC9DTRmKEvu2KTFIDquaz.svg)](https://asciinema.org/a/5zU8tC9DTRmKEvu2KTFIDquaz)

## Module write

### Description

___

:warning: **Be careful when using this module**: This module can mutate the file system (changing data or creating new files)!

This function writes the transferred data to a file. If the file does not exist, it is created with the files already transferred.


### Startup instructions
___

The function **write** takes two arguments as input in strict sequence
- relative path to the file
- data

```
write __fixtures__/file1.txt Hello, world!
```

### Example of work
[![asciicast](https://asciinema.org/a/uoqa3uWCZeFdAcyumog30SHZ6.svg)](https://asciinema.org/a/uoqa3uWCZeFdAcyumog30SHZ6)

## Module write

### Description

___

:warning: **Be careful when using this module**: This module can mutate the file system (changing file data)!

This module reverses (rewrites in reverse order) the data of the transferred file


### Startup instructions
___

The function **reverse** takes one single argument
- relative path to the file

```
reverse __fixtures__/file2.txt
```

### Example of work
[![asciicast](https://asciinema.org/a/HtI1UKqeQkk33L027rTN8Lwgz.svg)](https://asciinema.org/a/HtI1UKqeQkk33L027rTN8Lwgz)