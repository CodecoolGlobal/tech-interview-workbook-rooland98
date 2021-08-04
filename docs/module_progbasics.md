 # Programming Basics questions

## Computer science

### Data structures

#### What is the purpose of a list (array in some programming languages) data structure? Name some methods of it!

    A list in python is a data structure that is an ordered sequence of elements.Lists are muteable and are useful when u want to work with more values , they let you work with more items at once, allows you to perform methods at once on multiple values, it keeps data together.
    append()	Adds an element at the end of the list
        - clear()	Removes all the elements from the list
        - copy()	Returns a copy of the list
        - count()	Returns the number of elements with the specified value
        - extend()	Add the elements of a list (or any iterable), to the end of the current list
        - index()	Returns the index of the first element with the specified value
        - insert()	Adds an element at the specified position
        - pop()	Removes the element at the specified position
        - remove()	Removes the item with the specified value
        - reverse()	Reverses the order of the list
        - sort()	Sorts the list

#### What is the difference between a list/array and a set?

    -all the items in a set is unique, so there cant be duplicates
    -sets are unordered, meaning they appear in a different order every time you use themx
    -sets only contain hashable items, you use hash lookup to find elements in a set
    -sets are unindexed
    -sets are immutable

#### What is the purpose and methods of a dictionary/map data structure?

    The dictionary is a mutable data type. Dictionaries are indexed by keys, which can be any immutable type. Strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. A dictionary is a set of key-value pairs, with the requirement that the keys are unique (within one dictionary). The main operations on a dictionary are storing a value with some key and extracting the value given the key. It is also possible to delete a key-value pair with the del statement. If you store a value using a key that is already in use, the old value associated with that key is forgotten.

    Dictionary methods:

    list(my_dict): Return a list of all the keys in the dictionary, in insertion order.
    sorted(my_dict): Return a list of all the keys in the dictionary, in a specified order.
    my_dict.clear(): Remove all the elements from the dictionary.
    my_dict.copy(): Return a copy of the dictionary.
    my_dict.get(k): Return the value of the specified key k.
    my_dict.keys(): Return a list containing the dictionary's keys.
    my_dict.values(): Return a list of all the values in the dictionary.
    my_dict.items(): Return a list containing a tuple for each key-value pair.
    my_dict.pop(k): Remove and return the element with the specified key k.
    my_dict.popitem(): Remove and return a tuple of the last inserted key-value pair.
    my_dict.setdefault(k, v): Return a value of the specified key k. If the key does not exist, insert the key with the specified value v.
    my_dict.update({k: v, k: v, ...}): Update the dictionary with the specified key-value pairs. If a key already extists, the old value associated with that key is forgotten.
    my_dict.fromkeys(x, y): Return a dictionary with the specified keys and values. Here, x could represent a list ['key1', 'key2', ...] of keys, y could represent an integer value 1.

### Algorithms 

#### Fibonacci sequences. Write a method (or pseudo code), that generates the Fibonacci sequences.

    def fib(n):
        if n > 1:
            return fib(n-1) + fib(n-2)
        return n
    #### f(n) = f(n-1)+f(n-2)

#### How do you find a max value in a list/array if you can’t use any built-in functions?

    def max_of_list(list):
        max = None
        for number in list:
            if max == None:
                max = number
            elif (number > max):
                max = number
        return max

#### How do you find the average of values in a list/array if you can’t use any built-in functions?

    def avarage(list):
        length = 0
        sum = 0
        for number in list:
            length += 1
            sum += number
        return sum / length

#### What do we call an *in-place* sort?

    A sort algorithm in which the sorted items occupy the same storage as the original ones. These algorithms may use o(n) additional memory for bookkeeping, but at most a constant number of items are kept in auxiliary memory at any time.
    A method like list.sort() modifies the object (rather than create and modify a new one).

#### Explain an algorithm which sorts a list!
    A bubble-sort algorithm iterates through the given list, and compares each element's value to the next element's value. Given the list is to be sorted in ascending order, the algorithm switches the elements' places every time an element's value is greater than the value of the next element.

    def bubbleSort(arr):
        n = len(arr)
        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1] :
                    arr[j], arr[j+1] = arr[j+1], arr[j]
        return arr

### Programming paradigms - procedural

#### What is the call stack?

    The call stack is what a program uses to keep track of method calls. It is a dynamic data structure stored in the RAM of the computer,maintained by the OS.
    Its purpose is to control the way procedures and functions call each other, and to control the way they pass parameters to each other. 
    The call stack is made up of stack frames—one for each method call.
    A stack frame can store :
    -Local variables
    -Arguments passed into the method
    -Information about the caller's stack frame
    -The return address—what the program should do after the function returns (i.e.: where it should "return to"). This is usually somewhere in the middle of the caller's code.

#### What is “Stack overflow”?

    A stack overflow is a programming error when more memory is used on the call stack rather than what is available.

#### What are the main parts of a function?

    -keyword def marks the start of the function header
    -a function name after header which should be a name to identify the purpose of the function as per clean code
    -then it accepts parameters(arguments). Through these we pass values to the function.It is optional. then a colon(:) to mark the end of function header
    -In the function itself we create valid python code to run finishing with a return statement to return the "result" of the function

### Programming languages - Python
#### How do you use a dictionary in Python?

    my_dict = {'a': 1, 'b': 2, 'c': 3}
    my_dict = dict(a=1, b=2, c=3)

#### What does it mean that an object is immutable in Python?

   An immutable object is an object whose value cannot change. 
   An object created and given a value is assigned some space in memory. 
   The variable name bound to the object points to that place in memory.

#### What is conditional expression in Python?

    Conditional expressions are operators that evaluate something based on a condition being True or False.
    conditional expressions are if,else,elif
    for ex: min = a if a < b else b

#### What are different types of arguments in Python?

    1.default arguments (assigning default values with =)
    2.keyword arguments (assigning values, disregarding argument positions)
    3.arbitrary arguments (using packing/unpacking with *, **)

#### What is variable shadowing? (context: variable scope)

    Variable shadowing is when you have a variable declaired in a certain scope such as method or a class, has the same name as a variable declared in the outer/global scope. This is known as name masking at the level of identifiers. The outer scope is shadowed by the variable in the inner scope, and the inner variable is masking the outer indentifier.

#### What can happen if you try to delete/drop/add an item from a List, while you are iterating over it in Python?

    If you delete/drop an item from a list while iterating over it, the results will be inaccurate, 
    due to the changed contents , the loop will skip some elements and/or end
    If we add to the list while iterating over it, it could result in an infinite loop.

#### What is the "golden rule" of variable scoping in Python (context: LEGB)? What is the lifetime of variables?

    The LEBG rule is a kind of name lookup procedure, which determines the order in which Python looks up names.

    Local: Defined inside function/class
    Enclosed: Defined inside enclosing functions (nested functions)
    Global: Defined at the uppermost level
    Built-in: Reserved names in Python built-in modules

    Variables have different lifetimes, depending on their definition. E.g. a local variable exists as long as the function is being executed.
    The golden rule means that variables should only be accessible where they are used. Avoiding using global variables as much as possible is standard.

#### What type of elements can a list contain in Python?

    Lists can contain any built-in data type.String,integer,boolean,function,classes,modules,etc.
    
#### What is slice operator in Python and how to use?

    slice(start,end,step) -> is a function in python, which returns a slice object. Slice object is used to specify how to silce a sequence.
    start maarks the start of the slicing and end is where to end it.You can use the step parameter to specify to slice only every n-th item.
    ex:
    slice(1,5,2) -> this will slice a string from the 1st charachter to the 4th as the last is not in the slicing sequence. And the slice will only slice every 2nd item

#### What arithmetic operators (+,*,-,/) can be used on lists in Python? What do they do?

    The + operator concatenates two lists. In other words, it appends one list's elements to another's.
    The * operator multiplies a list's elements by an integer.
    The - and / operators are unsupported and result in an error.

#### What is the purpose of the in and not in membership operators in Python?

    They are used to check if an element is present in a sequence or not.

#### What does the + operator mean when used with strings in Python?

     With the + operator we explicitly concanate strings.
     ex: return "my house" + "is" + "thebest" will result in "my houseisthebest"

#### Explain f strings in Python?

    f strings or Literal String Interpolation is a new way in python3 to make string interpolation simpler. The  string itself can be formatted in much the same way that you would with str.format(). F-strings provide a concise and convenient way to embed python expressions inside string literals for formatting. To create and f string you need to prefix the string with the letter f for ex.(f"This is an f string with {name}") where the {name} works similar to string formatting. If name is declared somewhere in our code, we can just refer to it. F-strings are faster than the two most commonly used string formatting mechanisms, which are % formatting and str.format(). 

#### Name 4 iterable types in Python!

    an iterable object is a collection of elements that you can loop through one element at a time.
    Python has four built-in iterable types: list, dict, tuple, and set

#### Does the order of the function definitions matter in Python? Why?

    Order of functions does not matter, as the functions need to be called. What matters is that we declare all functions that interact with each other before we call any of them. 

#### What does unpacking mean in Python?

    Unpacking in Python refers to an operation that consists of assigning an iterable of values to a tuple (or list) of variables in a single assignment statement.
    We can use * to unpack the list so that all elements of it can be passed as different parameters. 
    
    def my_func(a, b, c):
    ...


    my_func(*my_list)

#### What happens when you try to assign the result of a function which has no return statement to a variable in Python?

    If there is no return statement, then an implicit return None is added to the end of a function.

#### What is the difference between list/set/dictionary comprehension and a generator expression in Python?

    List/set/dictionary comprehensions create the entire collection at once, while generators can evaluate elements on demand.
    Generators are slower but use less memory.

## Software engineering

### Debugging -----------------------------------------------------------------------------------------------------------------------------

#### What techniques can you use while debugging a program in Python?

    1. Print and Check
    The simplest but powerful method is to print some particular variables and check their values are as expected or not.

    2. Assert and Check
    Wherever the print is used to assist debugging, assert can be used instead.

    3. Using logging Module
    Python has an important module named logging. Replacing print or assert to logging methods is more professional and powerful way to debug. 

#### What does step over, step into and step out mean while using the debugger?

    Step over – An action to take in the debugger that will step over a given line.
    Step into – An action to take in the debugger. If the line does not contain a function it behaves the same as “step over” but if it does the debugger will enter the called function and continue line-by-line debugging there.
    Step out – An action to take in the debugger that returns to the line where the current function was called.

#### How can you start to debug a program from a certain line using the debugger?

    You need to place a breakpoint at the start of the function/part of code you want to debug. You can do that by clicking before line number in vscode. When you use step-into, you can keep jumping between lines until the breakpoint, where the breakpoint will stop the debugging.

### Version control -----------------------------------------------------------------------------------------------------------------------------

#### What are the advantages of using a version control system?

    Version control systems allow you to compare files, identify differences, and merge the changes if needed prior to committing any code. 
    Versioning is also a great way to keep track of application builds by being able to identify which version is currently in development, QA, and production.
    Version control systems are useful when working in a team. Whenever someone makes changes you can compare, and new developers can catch up and see the commit history.

#### What is the difference between the working directory, the staging area and the repository in git?

    Working directory: Contains the files that are untracked by Git (still "in the works").
    Staging area: Contains the files that are added from the working directory. Git keeps track of any change that happens to these files.
    Local git repository: The .git/ directory inside a project. Contains the files that are pushed from the staging area. This repository tracks all changes made to files in your project, building history over time. If you delete the .git/ folder, you destroy your whole project's history.

#### What are remote repositories in git?

    A remote repository in Git, also called a remote, is a Git repository that's hosted on the Internet or another network. It contains all the versions of the project.

#### Why does a merge conflict occur?

    A merge conflict is an event that occurs when Git is unable to automatically resolve differences in code between two commits.

#### Through what series of commands could you put a new file into a remote repository connected to your existing local repository?

    git status (to check for rmodifications to make sure)
    git add my_file
    git commit -m "bugfixes"
    git push origin master

#### What does it mean atomic commits and descriptive commit messages?    

    Atomic commit means you make a commit every time you make changes or finish a feature, making commit after 2 feature chagne does not go as an atomic commit. 
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

    First we need to try and understand the code.
    Then we start with checking variable and function names, and replace them if needed.
    Then we eliminate global variables and magic numbers.
    In the end, the code should be free of clutter, complexity and cleverness.

### Error handling

#### What is exception handling?

    An exception can be defined as an unusual condition in a program resulting in the interruption in the flow of the program.
    Whenever an exception occurs, the program stops the execution, and thus the further code is not executed. 
    An exception is a Python object that represents an error.
    Python provides a way to handle the exception so that the code can be executed without any interruption. 
    If we do not handle the exception, the interpreter doesn't execute all the code that exists after the exception.
    
#### What are the basics of exception handling in Python?

    In Python, exceptions can be handled using a try statement. The critical operation which can raise an exception is placed inside the try clause. 
    The code that handles the exceptions is written in the except clause. We can thus choose what operations to perform once we have caught the exception.

#### In which case should we catch an exception? Why?

    If the Python program contains suspicious code that may throw the exception, we must place that code in the try block. 
    The try block must be followed with the except statement, which contains a block of code that will be executed if there is some exception in the try block.

#### What can/should we do with an exception in the ‘except’ block?

    We can use the exception variable with the except statement. It is used by using the as keyword. this object will return the cause of the exception.

#### What does the else and finally statement do in a try-except block in Python?

    1 -> We can use the else statement with the try-except statement in which, we can place the code which will be executed if no exception occurs in the try block.
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

    "wget + URL" with a new name "wget -o filename URL"