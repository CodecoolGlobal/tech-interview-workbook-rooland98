# Programming Basics questions

## Computer science

### Data structures  --------------------------------------------------------------------------------------------------------------------------

#### What is the purpose of a list (array in some programming languages) data structure? Name some methods of it!
    A list in python is a data  structure that is mutable/changeable,its an ordered sequence of elements.Lists are useful when u want to work with more values , they  let you work with more items at once, allows you to perform methods at once on multiple values, it keeps data together, 
#### What is the difference between a list/array and a set?
    -all the items in a set is unique, so there cant be duplicates
    -sets are unordered, meaning they appear in a different order every time you use them
    -sets only contain hashable items, you use hash lookup to find elements in a set
    -sets are unindexed
#### What is the purpose and methods of a dictionary/map data structure?
    A dictionary is an unordered collection of items. Dictionaries has a key/value pairs and items can be indexed using the key. A key can be any immutable type; strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers, or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. The main operations on a dictionary are storing a value with some key and extracting the value given the key.
    It is a muteable data structure , so new items can be added/removed and items can be accessed. 
### Algorithms ---------------------------------------------------------------------------------------------------------------------------------

#### Fibonacci sequences. Write a method (or pseudo code), that generates the Fibonacci sequences.
#### How do you find a max value in a list/array if you can’t use any built-in functions?
#### How do you find the average of values in a list/array if you can’t use any built-in functions?
#### What do we call an *in-place* sort?
#### Explain an algorithm which sorts a list!

### Programming paradigms - procedural ---------------------------------------------------------------------------------------------------------

#### What is the call stack?
    The call stack is what a program uses to keep track of method calls. The call stack is made up of stack frames—one for each method call.
#### What is “Stack overflow”?
    A stack overflow is a programming error when too much memory is used on the call stack.
#### What are the main parts of a function?
    -keyword def marks the start of the function header
    -a function name after header which should be a name to identify the purpose of the function as per clean code
    -then it accepts parameters(arguments). Through these we pass values to the function.It is optional. then a colon(:) to mark the end of function header
    -In the function itself we create valid python code to run finishing with a return statement to return the "result" of the function

### Programming languages - Python  ------------------------------------------------------------------------------------------------------------

#### How do you use a dictionary in Python?
# 1. Declaring a dictionary: key-value pair, immutable types, using {} brackets
    my_dictionary = {} -> This will be and empty dictionary
# dictionary can be created using the dict() method:
    my_dictionary = dict({1:'rose',2:'pan'})
# 2. adding/updating items:
    my_dictionary['first_name'] = "Balogh" 
# this syntax will add the new item to the dictionary if the key does not exist already, if it does exist, it will update the value with "Balogh"
# 3. removing items:
# Two ways of removing items : Whenever you remove item first you look for the key you would like to remove
    del my_dictionary['first_name'] 
# it will remove the matches for first_name variable and remove all of its occurences. It will raise KeyError if the key does not exist
    my_dictionary.pop(first_name, None) 
# It will do the same, but has 2 attributes. First is the key you are looking for , second one is the a value that should be returned if the key is not found.
# all the items can be deleted from a dictionary at once using clear() method on the dictionary
# 4. accessing elements:
    my_dictionary['first_name'] or my_dictionary[1] or my_dictionary.get(1) -> all will result in getting the key and value of the first element of the dictionary
# 6. Iteration:
# Dictionaries are muteable, so you can iterate through them.Either using a for loop, or with the keys() and items() method:
    for key in my_dictionary:
        print(key)    
# loop will return all the keys and their values as accessing the key in a dictionary will always get the value
    my_items = my_dictionary.items()
    print(my_items)
# items() method will return a new view of the dictionaries items
# if you just need to work with the keys of a dictionary, then you can use .keys(), which is a method that returns a new view object containing the dictionary’s keys
    keys = my_dictionary.keys()
# it’s also common to only use the values to iterate through a dictionary in Python. One way to do that is to use .values(), which returns a view with the values of the dictionary
    values = my_dictionary.values()

#### What does it mean that an object is immutable in Python?
#### What is conditional expression in Python?
#### What are different types of arguments in Python?
#### What is variable shadowing? (context: variable scope)
#### What can happen if you try to delete/drop/add an item from a List, while you are iterating over it in Python?
#### What is the "golden rule" of variable scoping in Python (context: LEGB)? What is the lifetime of variables?
#### If you need to access the iterator variable after a for loop, how would you do it in Python?
#### What type of elements can a list contain in Python?
#### What is slice operator in Python and how to use?
#### What arithmetic operators (+,*,-,/) can be used on lists in Python? What do they do?
#### What is the purpose of the in and not in membership operators in Python?
#### What does the + operator mean when used with strings in Python?
#### Explain f strings in Python?
    f strings or Literal String Interpolation is a new way in python3 to make string interpolation simpler. The string itself can be formatted in much the same way that you would with str.format(). F-strings provide a concise and convenient way to embed python expressions inside string literals for formatting. To create and f string you need to prefix the string with the letter f for ex.(f"This is an f string with {name}") where the {name} works similar to string formatting. If name is declared somewhere in our code, we can just refer to it. F-strings are faster than the two most commonly used string formatting mechanisms, which are % formatting and str.format(). 
#### Name 4 iterable types in Python!
    list,set,tuple,dictionary
#### What is the difference between list/set/dictionary comprehension and a generator expression in Python?
#### Does the order of the function definitions matter in Python? Why?
#### What does unpacking mean in Python?
#### What happens when you try to assign the result of a function which has no return statement to a variable in Python?

## Software engineering

### Debugging

#### What techniques can you use while debugging a program in Python?
#### What does step over, step into and step out mean while using the debugger?
#### How can you start to debug a program from a certain line using the debugger?

### Version control

#### What are the advantages of using a version control system?
#### What is the difference between the working directory, the staging area and the repository in git?
#### What are remote repositories in git?
#### Why does a merge conflict occur?
#### Through what series of commands could you put a new file into a remote repository connected to your existing local repository?
#### What does it mean atomic commits and descriptive commit messages?
#### What’s the difference between git and GitHub?

## Software design

### Clean code

#### What does clean code mean?
#### What steps do we usually do during a clean code refactoring?

### Error handling

#### What is exception handling?
#### What are the basics of exception handling in Python?
#### In which case should we catch an exception? Why?
#### What can/should we do with an exception in the ‘except’ block?
#### What does the else and finally statement do in a try-except block in Python?

## Software Development Methodologies

#### What is the main goal of a retrospective meeting?

## Programming environment

### Unix

#### What is UNIX and what is Linux?
#### What do we call the shell in Linux?
#### What does root means in a Linux environment?
#### How do you access your personal files in Linux?
#### How can you install an application in Linux?
#### What is package management in Linux, what are repositories?
#### How do you navigate in the filesystem with the command line?
#### What does the following commands do: mkdir, rm, cat, cp, touch?
#### How can you look up what does a command do in Linux if you have no internet connection?
#### What does the following commands do: head, tail, more, less?
#### How do you download a file from internet using the terminal?
