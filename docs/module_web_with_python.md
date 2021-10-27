# Web with Python questions

## Software design

### Clean code

#### Point out 5 suggestions, how to format an SQL query!
    Explain your queries in comments.
    Keep the queries readable with proper indentation and alignment.
    Avoid repetition.
    A reusable query should do one thing, and do it properly.
    Name objects in your database logically and consistently.
#### What layers can you name in a simple web application?
     user interface , application, data
### Error handling
#### What error can occur, when an array does not have an element on the requested index?
    IndexError: List index out of range
#### What is the “finally” block, and how would you use it?7
    The try statement can have a finally block (it is optional). It executes no matter what, as the last step of the error handling.
#### Why should we catch special exception types?
    General exceptions will not let you know the exact root cause of the issue especially if many steps are involved in a method implementation. Also, in many cases, we need to react to errors based on their type with different exception handling.


### Security
#### What is SQL injection? How to protect an application against it?
    SQL injection is a technique by which vulnerable (poorly designed) web applications can be attacked by harming the database. You can protect your application by: sanitizing user input, escaping, parameterising (%s), random table names
#### What is XSS? How to protect an application against it?
    XSS (also called cross-site scripting) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It is often used to impersonate a user and access data/funcionalities/permissions that the user has. It is based on manipulating a vulnerable web site so that it returns malicious JavaScript to users. You can protect your application by: filter input, encode data on output, use Content Security Policy.
#### How to properly store passwords?
    Usage of bcrypt module for example for hashed and salted password with pip.
#### What is HTTPS?
    Hypertext Transfer Protocol Secure. It is used for secure communication in a network and widely used on the internet. It protects the privacy and integrity of the exchanged data and prevents third-party attacks. HTTPS uses an encryption protocol to encrypt communications. The protocol is called Transport Layer Security (TLS). This protocol secures communications by using what’s known as an asymmetric public key infrastructure.
#### What is encryption and decryption?
    Encryption is the practice of modifying information in a way that only someone with a corresponding key can get the original data and read it. It is a two-way function, which means that encripted data can be decrypted with the appropriate key.
#### What is hashing?
#### What is the difference between encryption and hashing? When would you use which?
#### What encryption methods do you know?
#### What hashing methods do you know?
#### How/where would you store sensitive data (like db password, API key, ...) of your application?
    Enviroment variables of the used IDEA.

## Computer science

### Algorithms

#### What is the difference between Stack and Queue data structure?
#### What is BubbleSort? Describe the main logic of this sorting algorithm.
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
#### Explain the process of finding the maximum and minimum value in a list of numbers!
#### Explain the process of calculating the average value in an array of numbers!
I can sum up the values of the array and divide the sum with the length of the array.
#### What is Big O complexity? Explain time and space complexity!
#### Explain the process of calculating the average value in a list of numbers!

### Procedural
#### How the CASE condition works in SQL?
#### How the switch-case condition works in JavaScript?
#### How to achieve a switch-case-like structure in Python?
#### Explain variable scoping in Python!
    Where a variable is accessible depends on how it is defined. We call the part of a program where a variable is accessible its scope.
#### What’s the difference between const and var in JavaScript?
    Const is block scoped and cannot be reassigned, var is function scoped and can be reassigned
#### How the list comprehension looks like in Python?
    result = [number for number in range(10)]
#### How the “ternary expression” looks like in Python?
#### How the ternary expression looks like in JavaScript?
#### How to import a function from another module in Python?
    from (module name) import (function name)
    but if you import the whole module all the functions can be accessed
#### How to import a function from another module in JavaScript?


### Functional
#### What is recursion?
    Recursion is a method where a function calls itself once or more in its body.
#### Write a recursive function which calculates the Fibonacci numbers!
    def fibo_num(i): if i <= 1: return i else: return(fibo_num(i-1) + fibo_num(i-2))
#### How to store a function in a variable in Python?
#### List the ways of defining a callable logical unit in JavaScript!
#### What is an event listener? How to attach one?
    Event listeners are meant to determine which item of the html should react to what type of event and what function should it trigger. Event listeners can be attached in javascript to dom elements by the addEventListener built-in function.
#### How to trigger an event in JavaScript?
#### What is a callback function? Tell some examples of its usage.
    A callback function is an executable code that can be passed as the argument of another function which executes the callback function. For e.g.: the built-in setTimeout function
#### What is a Python decorator? How does it work? Tell some examples of its usage.
    A decorator takes in a function, adds some functionality and returns it without permanently modifying it. For e.g.: in Flask the app.route is used as decorator.
#### What is the difference between synchronous and asynchronous execution?

## Programming languages

### SQL

#### How can you connect your application to a database server? What are the possible ways?
    psycopg2 and idea built in database handler
#### When do you use the DISTINCT keyword in SQL?
    When i want to remove duplicate values from the table only showing unique elements
#### Talk about the behavior/goal of these base SQL clauses: WHERE, GROUP BY, HAVING, ORDER BY?
#### What are aggregate functions in SQL? Give 3 examples.
#### What kind of JOIN types do you know in SQL? Could you give examples?
    Inner join, Join, Left join, Right join, outer join
#### What are the constraints in sql?
#### What is a cursor in SQL? Why would you use one?
#### What are database indexes? When to use?
#### What are database transactions? When to use?
#### What kind of database relations do you know? How to define them?
#### You have a table with an “address” field which contains data like “3525, Miskolc, Régiposta 9.” (postcode, city, street name and address). How would you query all records related to Miskolc?
#### How would you keep track of what kind of data has changed after an UPDATE or DELETE operation in a table?

### HTML & CSS

#### What’s the difference between XML, XHTML and HTML?
#### How to include a JavaScript file in a webpage?
    <script src={path/to/file.js}></script>
#### How to include a CSS file in a webpage?
    Include them with a <link> tag in the header.
#### How to select an element using its id in CSS?
    for example #container -> # + id-name
#### How to select elements using their class in CSS?
    for example .container -> . + classname
#### How to select elements which have the ‘alpha’ and ‘beta’ classes in CSS?
    .alpha.beta{

    }
#### How to select all list items in all ordered lists on the page in CSS?
    ol li{

    }
#### How to select elements using their attributes in CSS?
    [attribute='value']
#### What are UX and UI?
    UI = User interface
    UX = User experience
#### Please list some points that an application should fulfill to have good UX.
    User friendly design,
    Good looking easy to overview,
    clear and readable,
    user friendly
#### What is XML, XSLT, DTD?
#### What is the difference between HTML and XML?

### Javascript

#### What is javascript?
#### When to use AJAX? Bring examples of its usage.
#### What is DOM and how to manipulate it from Javascript?
#### What are events and how/why to use them in Javascript?
#### What is event bubbling/capturing? How would you use it?
#### What is JSON and how do we use it?

## Software engineering

### Version control

#### What type of branching strategy would you use?
#### What would you do if you find a bug on the production code (master branch)?
#### How can you move changes from one branch to another in GIT?
#### How does a VCS help with code reviews?
#### What is your favorite git command? Why?
#### What does remote/local mean in Git? 

### DevOps

#### Why is it good to use a package manager software?
#### Why is it good to use a virtual environment for a project?

### Networks

#### What kind of HTTP status codes do you know?
    1xx: Informational response, 2xx: Success, 3xx: Redirection, 4xx: Client error, 5xx: Server error
#### What is a API?
    API stands for application programming interface, it is a software intermediary that allows two applications to talk to each other
#### What is REST API?
#### What is JSON? When to use?
#### What is TCP/IP? What layers does it define, what are they responsible for?
#### What’s the difference between TCP and UDP?
#### How does an HTTP Request look like? What are the most relevant HTTP header fields?
#### How does an HTTP Response look like? What are the most relevant HTTP header fields?
#### What is DNS? How does it work?
#### What is a web server?
#### Explain the client-server architecture.
#### What would you use a session for?
#### What would you use a cookie for?

## Software Development Methodologies

#### What kind of software development methodologies do you know? What are the main features of these?
    Waterfall Project Management, Agile Project Management
#### What are the SCRUM roles?
    ScrumMaster, Product Owner (PO), Scrum Team
#### What are the SCRUM ceremonies?
    Sprint Planning Meeting, Daily Standups, Retrospective, Sprint Review Meeting, Project Retrospective meeting
#### What are the SCRUM artifacts?
    the product, product backlog, sprint backlog, sprint burndown chart, release burndown chart
#### What is the main goal of a retrospective meeting?
    The main goal of the retrospective meeting is to evaluate the latest sprint, identify the good and bad practices and improve future sprints.
#### Explain, when would you recommend to use the waterfall methodology?
    The waterfall project is suitable for shorter projects, which includes clear requirements and there is a low possiobility that the project scope would change.
