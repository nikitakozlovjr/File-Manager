# File-Manager
### Description
____

This file manager module provides functions for quickly working with files thanks to asynchronous work with them. The file manager includes the following features:
- print 
- write 
- move
- getDirectorySize

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