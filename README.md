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

## Module move

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