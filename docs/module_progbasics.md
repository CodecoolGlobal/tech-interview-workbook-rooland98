 # Programming Basics questions

## Computer science

### Data structures  --------------------------------------------------------------------------------------------------------------------------

#### What is the purpose of a list (array in some programming languages) data structure? Name some methods of it!
    A list in python is a data  structure that is mutable/changeable,its an ordered sequence of elements.Lists are useful when u want to work with more values , they  let you work with more items at once, allows you to perform methods at once on multiple values, it keeps data together.
    METHODS%!!!!!!
#### What is the difference between a list/array and a set?
    -all the items in a set is unique, so there cant be duplicates
    -sets are unordered, meaning they appear in a different order every time you use themx
    -sets only contain hashable items, you use hash lookup to find elements in a set
    -sets are unindexed
#### What is the purpose and methods of a dictionary/map data structure?
    A dictionary is an unordered collection of items. Dictionaries has a key/value pairs and items can be indexed using the key. A key can be any immutable type; strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers, or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. The main operations on a dictionary are storing a value with some key and extracting the value given the key.
    It is a muteable data structure , so new items can be added/removed and items can be accessed. 
### Algorithms ---------------------------------------------------------------------------------------------------------------------------------

#### Fibonacci sequences. Write a method (or pseudo code), that generates the Fibonacci sequences.
    def fib(n):
        if n > 1:
            return fib(n-1) + fib(n-2)
        return n
    #### f(n) = f(n-1)+f(n-2)
#### How do you find a max value in a list/array if you can’t use any built-in functions?
    def max_of(list):
        max = 0
        for index in range(0, len(list)):
            if(array[index] > max):
                max = array[index]
        return max
#### How do you find the average of values in a list/array if you can’t use any built-in functions?
    def avarage_of(lst):
        return sum(lst) // len(lst)
#### What do we call an *in-place* sort?
    A sort algorithm in which the sorted items occupy the same storage as the original ones. These algorithms may use o(n) additional memory for bookkeeping, but at most a constant number of items are kept in auxiliary memory at any time.
#### Explain an algorithm which sorts a list!
    def bubbleSort(arr):
        n = len(arr)
        # iteration through elements
        for i in range(n):
            for j in range(0, n-i-1):
                #we check elements in pairs.If the first element is bigger than the one after it. we swap them, then we move onto the next pair. We keep swapping until we cant find bigger elements before another
                if arr[j] > arr[j+1] :
                    arr[j], arr[j+1] = arr[j+1], arr[j]

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
    Most of the python objects are immuteable, like booleans,integers,floats,strigns,tuples.The definition  for immutable is : An immutable object is an object whose value cannot change. An object created and given a value is assigned some space in memory. The variable name bound to the object points to that place in memory.

#### What is conditional expression in Python?
    Conditional expressions are operators that evaluate something based on a condition being True or False.
    for ex: min = a if a < b else b

#### What are different types of arguments in Python?
    1.default arguments def greet(name,msg):
    2.keyword arguments def greet(name = "Bruce",msg = "Hello there")
    3.positional arguments def greet("Bruce", msg="HelloThere")
    4.arbitrary positional arguments
    5.arbitrary keyword arguments
#### What is variable shadowing? (context: variable scope)
    Variable shadowing is when you have a variable declaired in a certain scope such as method or a class, has the same name as a variable declared in the outer/global scope. This is known as name masking at the level of identifiers. The outer scope is shadowed by the variable in the inner scope, and the inner variable is is masking the outer indentifier.
#### What can happen if you try to delete/drop/add an item from a List, while you are iterating over it in Python?
#### What is the "golden rule" of variable scoping in Python (context: LEGB)? What is the lifetime of variables?
    The LEGB rule is a kind of name lookup procedure, which determines the order in which Python looks up names. For example, if you reference a given name, 
    then Python will look that name up sequentially in the local, enclosing, global, and built-in scope. If the name exists, 
    then you’ll get the first occurrence of it. Otherwise, you’ll get an error.
#### What type of elements can a list contain in Python?
    Lists can contain arbitrary objects.Lists can contain strings integers and objects.All items in a list can be the same type, or different. Since everything in Python is an object, a list could contain objects such as functions or classes or even modules. 
    
#### What is slice operator in Python and how to use?
    slice(start,end,step) -> is a function in python, which returns a slice object. Slice object is used to specify how to silce a sequence.
    start maarks the start of the slicing and end is where to end it.You can use the step parameter to specify to slice only every n-th item.
    ex:
    slice(1,5,2) -> this will slice a string from the 1st charachter to the 4th as the last is not in the slicing sequence. And the slice will only slice every 2nd item

#### What arithmetic operators (+,*,-,/) can be used on lists in Python? What do they do?
#### What is the purpose of the in and not in membership operators in Python?
    They are used to check if an element is present in a sequence or not.
#### What does the + operator mean when used with strings in Python?
     With the + operator we explicitly concanate strings.
     ex: return "my house" + "is" + "thebest" will result in "my houseisthebest"
#### Explain f strings in Python?
    f strings or Literal String Interpolation is a new way in python3 to make string interpolation simpler. The string itself can be formatted in much the same way that you would with str.format(). F-strings provide a concise and convenient way to embed python expressions inside string literals for formatting. To create and f string you need to prefix the string with the letter f for ex.(f"This is an f string with {name}") where the {name} works similar to string formatting. If name is declared somewhere in our code, we can just refer to it. F-strings are faster than the two most commonly used string formatting mechanisms, which are % formatting and str.format(). 
#### Name 4 iterable types in Python!
    an iterable object is a collection of elements that you can loop through one element at a time.
    Python has four built-in iterable types: list, dict, tuple, and set
#### What is the difference between list/set/dictionary comprehension and a generator expression in Python?
#### Does the order of the function definitions matter in Python? Why?
    Order of the functions does not matter because you are just adding 2 new functions for example. But to actually access it you will need to write a look-up. YOu will need to call the function. And in order to have the right order you will need to call them in the main for example in the right order.
#### What does unpacking mean in Python?
    Unpacking in Python refers to an operation that consists of assigning an iterable of values to a tuple (or list) of variables in a single assignment statement. As a complement, the term packing can be used when we collect several values in a single variable using the iterable unpacking operator, *.
#### What happens when you try to assign the result of a function which has no return statement to a variable in Python?
    ValueError will raise as if you dont return a variable  from a function then you cant access it outside of the function scope.
## Software engineering

### Debugging -----------------------------------------------------------------------------------------------------------------------------

#### What techniques can you use while debugging a program in Python?
#### What does step over, step into and step out mean while using the debugger?
#### How can you start to debug a program from a certain line using the debugger?
    You need to place a breakpoint at the start of the function/part of code you want to debug. You can do that by clicking before line number in vscode.

### Version control -----------------------------------------------------------------------------------------------------------------------------

#### What are the advantages of using a version control system?
    Version control systems allow you to compare files, identify differences, and merge the changes if needed prior to committing any code. 
    Versioning is also a great way to keep track of application builds by being able to identify which version is currently in development, QA, and production.
    Version control systems are useful when working in a team. Whenever someone makes changes you can compare, and new developers can catch up and see the commit history.
#### What is the difference between the working directory, the staging area and the repository in git?
    Working directory is your computer where you work at. Your changes are only yours no one can see it.
    Staging area is the area where you add the code you been working on, its the area where the code is kept if the repository, which is the "cloud" on github, has changes aswell. In this case the code is kept in staging area until you pull the changes and accept them.
#### What are remote repositories in git?
    A remote repository in Git, also called a remote, is a Git repository that's hosted on the Internet or another network.
#### Why does a merge conflict occur?
    A merge conflict is an event that occurs when Git is unable to automatically resolve differences in code between two commits.
#### Through what series of commands could you put a new file into a remote repository connected to your existing local repository?
    git status (to check for rmodifications to make sure)
    git add -A where -A means all mods
    git commit -m where -m means a message which should describe the changes
    git push to push all changes to development branch
#### What does it mean atomic commits and descriptive commit messages?    
    Atomic commit means you make a commit every time you make changes or finish a feature, making commit after 2 feature chagne doesnt not go as an atomic commit. 
    Descriptive commit messages mean when you give a commit message you describe shotrly but meaningfully the changes and modifications you made on the feature/programme.
#### What’s the difference between git and GitHub?
    Git is a version control system that lets you manage and keep track of your source code history. GitHub is a cloud-based hosting service that lets you manage Git repositories.

## Software design

### Clean code  -----------------------------------------------------------------------------------------------------------------------------
#### What does clean code mean?
    A clean code is a code that is easy to understand and easy to change.
        -easy to understand the execution flow of the entire application
        -easy to understand how the different objects collaborate with each other
        -easy to understand the role and responsibility of each class
        -easy to understand what each method does
        -easy to understand what is the purpose of each expression and variable

#### What steps do we usually do during a clean code refactoring?
    1. You finish the code, making sure the software functions as per requested.
    2. You run through the code and do small changes. Understanding your code better, changing few things. Removing all duplications/dead code.
    3. Go through the code and :
        - moving features between objects in order to better distribute functionality among classes/functions.Meaning to move functionality to solo class/functions
        - simplifying conditional expressions, variable names for easier understanding.

### Error handling

#### What is exception handling?
    An exception can be defined as an unusual condition in a program resulting in the interruption in the flow of the program.
    Whenever an exception occurs, the program stops the execution, and thus the further code is not executed. 
    Therefore, an exception is the run-time errors that are unable to handle to Python script. An exception is a Python object that represents an error
    Python provides a way to handle the exception so that the code can be executed without any interruption. 
    If we do not handle the exception, the interpreter doesn't execute all the code that exists after the exception.
    
#### What are the basics of exception handling in Python?
    ZeroDivisionError: Occurs when a number is divided by zero.
    NameError: It occurs when a name is not found. It may be local or global.
    IndentationError: If incorrect indentation is given.
    IOError: It occurs when Input Output operation fails.
    EOFError: It occurs when the end of the file is reached, and yet operations are being performed.
#### In which case should we catch an exception? Why?
    If the Python program contains suspicious code that may throw the exception, we must place that code in the try block. 
    The try block must be followed with the except statement, which contains a block of code that will be executed if there is some exception in the try block.
#### What can/should we do with an exception in the ‘except’ block?
    We can use the exception variable with the except statement. It is used by using the as keyword. this object will return the cause of the exception.
#### What does the else and finally statement do in a try-except block in Python?
    1 -> We can also use the else statement with the try-except statement in which, we can place the code which will be executed in the scenario if no exception occurs in the try block.
    2 -> Python provides the optional finally statement, which is used with the try statement. It is executed no matter what exception occurs and used to release the external resource. 
    The finally block provides a guarantee of the execution. We can use the finally block with the try block in which we can pace the necessary code, 
    which must be executed before the try statement throws an exception.
## Software Development Methodologies
#### What is the main goal of a retrospective meeting?
    Gather data and insights from their team (what went well, what went poorly, etc.)
    Discuss the data and insights and make action items around them.
    Make a plan for improvements on the next sprint.

## Programming environment
### Unix

#### What is UNIX and what is Linux?
    Linux is an operating system built by Linus Torvalds at the University of Helsinki in 1991. 
    The UNIX OS was born in the late 1960s. AT&T Bell Labs released an operating system called Unix written in C, which allows quicker modification, acceptance, and portability.
#### What do we call the shell in Linux?
     Bash which stands for Bourne Again SHell, an enhanced version of the original Unix shell program, sh , written by Steve Bourne
#### What does root means in a Linux environment?
    root is the user name or account that by default has access to all commands and files on a Linux
#### How do you access your personal files in Linux?
#### How can you install an application in Linux?
    sudo apt-get install file-name
#### What is package management in Linux, what are repositories?
    Package management is a method of installing, updating, removing, and keeping track of software updates from specific repositories.
    A software repository, or “repo” for short, is a storage location for software packages.
#### How do you navigate in the filesystem with the command line?
    use cd command to navigate between folders , and ls to list the content of the folder you are located in
#### What does the following commands do: mkdir, rm, cat, cp, touch?
    mkdir : creates a folder
    rm : rm command is used to delete directories and the contents within them
    cat: will show the content of a given file
    cp: cp stands for copy. This command is used to copy files or group of files or directory.
    touch: create files 
#### How can you look up what does a command do in Linux if you have no internet connection?
    type help in bash to list all available basic commads
    sudo -h for apps to list applications related commands
#### What does the following commands do: head, tail, more, less?
    head : head command is used to view the first lines of any text file
    tail: the tail command will display the last ten lines of a text file
    more: more command is used to view the text files in the command prompt
    less: it is command line utility that displays the contents of a file or a command output, one page at a time
#### How do you download a file from internet using the terminal?
