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
    Hashing is the process of converting a given key into another value. A hash function is used to generate the new value according to a mathematical algorithm. 
    The result of a hash function is known as a hash value or simply, a hash.
#### What is the difference between encryption and hashing? When would you use which?
    Encryption is a two-way function; what is encrypted can be decrypted with the proper key. 
    Hashing, however, is a one-way function that scrambles plain text to produce a unique message digest. 
    With a properly designed algorithm, there is no way to reverse the hashing process to reveal the original password. 
    An attacker who steals a file of hashed passwords must then guess the password.
#### What encryption methods do you know?
    1. Advanced Encryption Standard (AES)
    Advanced Encryption Standard is a symmetric encryption algorithm that encrypts fixed blocks of data (of 128 bits) at a time. The keys used to decipher the text can be 128-, 192-, or 256-bit long. The 256-bit key encrypts the data in 14 rounds, the 192-bit key in 12 rounds, and the 128-bit key in 10 rounds. Each round consists of several steps of substitution, transposition, mixing of plaintext, and more. AES encryption standards are the most commonly used encryption methods today, both for data at rest and data in transit.

    2. Rivest-Shamir-Adleman (RSA)
    Rivest-Shamir-Adleman is an asymmetric encryption algorithm that is based on the factorization of the product of two large prime numbers. Only someone with the knowledge of these numbers will be able to decode the message successfully. RSA is often used when transmitting data between two separate endpoints (e.g., web connections), but works slowly when large volumes of data need to be encrypted.

    3. Triple DES (Data Encryption Standard)
    Triple DES is a symmetric encryption and an advanced form of the DES method that encrypts blocks of data using a 56-bit key. Triple DES applies the DES cipher algorithm three times to each data block. Triple DES is commonly used to encrypt ATM PINs and UNIX passwords.

    4. Twofish
    Twofish is a license-free encryption method that ciphers data blocks of 128 bits. It’s considered the successor to the 64-bit Blowfish encryption method and more versatile than its specialized successor, Threefish. Twofish always encrypts data in 16 rounds regardless of the key size. Though it works slower than AES, the Twofish encryption method continues to be used by some file and folder encryption software solutions.

#### What hashing methods do you know?
    MD5 (already broken,easy to manipulate),
    SHA-2(Secure Hash Algorithm)
#### How/where would you store sensitive data (like db password, API key, ...) of your application?
    Enviroment variables of the used IDEA.

## Computer science

### Algorithms

#### What is the difference between Stack and Queue data structure?
 Stacks are LIFO (Last In First Out) types, which means the last inserted element
    is the first element to come out of the list. Insert operation called push and Delete is called pop.
    In stacks we maintain only one pointer to access the list, called the top (last) element.
 Queues are FIFO (Fist in First out) types, which means the first iserted element
    is the first element to come out of the list. Insert operation is called enqueue and Delete is called dequeue.
    In queues we maintain two pointer to access the list (first/last position).
#### What is BubbleSort? Describe the main logic of this sorting algorithm.
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
#### Explain the process of finding the maximum and minimum value in a list of numbers!
    Moving along the collection (iterate). Set the first as highest/lowest.
    Then comparing each next element with the firts and replace it with the first accordingly.
#### Explain the process of calculating the average value in an array of numbers!
I can sum up the values of the array and divide the sum with the length of the array.
#### What is Big O complexity? Explain time and space complexity!
    Big O Notation is to describe the complexity of an algorithm. How long an algorithm takes to run.
    It is to compare the efficiency of different approaches to a problem. How quickly the runtime grows:
    use Big O Notation to talk about how quickly the runtime grows. Relative to the input:
    With Big O Notation, we use the size of the input, which we call “n”.
    So we can say things like the runtime grows “on the order of the size of the - input” (O(n)) or “on the order of the square of the size of the input” (O(n²)).
    As the input gets larger: we care more about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as n gets very large.
#### Explain the process of calculating the average value in a list of numbers!
    Sum all of the data values and divide by the number of nodes in the list.

### Procedural
#### How the CASE condition works in SQL?
SELECT result_variable CASE WHEN condition1 THEN result1 END AS result_variable;
#### How the switch-case condition works in JavaScript?
switch(expression) { case x: code break; default: code }
#### How to achieve a switch-case-like structure in Python?
#### Explain variable scoping in Python!
    Where a variable is accessible depends on how it is defined. We call the part of a program where a variable is accessible its scope.
#### What’s the difference between const and var in JavaScript?
    Const is block scoped and cannot be reassigned, var is function scoped and can be reassigned
#### How the list comprehension looks like in Python?
    result = [number for number in range(10)]
#### How the “ternary expression” looks like in Python?
    'true' if True else 'false'
    'even' if num % 2 = 0 else False
#### How the ternary expression looks like in JavaScript?
    condition ? exprIfTrue : exprIfFalse
#### How to import a function from another module in Python?
    from (module name) import (function name)
    but if you import the whole module all the functions can be accessed
#### How to import a function from another module in JavaScript?
    First we have to add type="module" to our main.js script in html template. Then if we want to acces a function from datahandler.js, then we will have to put export before the function declaration. for EX.: export function socialCall(), and then in the main.js we can call that function if we import it in the first lines of ours file. syntax is import { functionName } from "./controller/datahandler.js"
    We have to import every variable, function we want to access or use in other js files.


### Functional
#### What is recursion?
    Recursion is a method where a function calls itself once or more in its body.
#### Write a recursive function which calculates the Fibonacci numbers!
    def fibo_num(i): if i <= 1: return i else: return(fibo_num(i-1) + fibo_num(i-2))
#### How to store a function in a variable in Python?
        def value():
                resp = requests.get('http://www.google.com').elapsed.total_seconds()
                return resp

        test = value()

        while True:
                print test
                time.sleep(10)
#### List the ways of defining a callable logical unit in JavaScript!

    function a(){} 
    let a = function a(){} 
    let a = { newHandles: function(){}}
    let add = (num1, num2)=> num1+num2;

#### What is an event listener? How to attach one?
    Event listeners are meant to determine which item of the html should react to what type of event and what function should it trigger. Event listeners can be attached in javascript to dom elements by the addEventListener built-in function. ˝ An event listener is waiting for an event and it is called when that event happens hmtlObject.addEventListener('event', function)
#### How to trigger an event in JavaScript?
    element.fireEvent("on" + event.eventType, event);
#### What is a callback function? Tell some examples of its usage.
    A callback function is an executable code that can be passed as the argument of another function which executes the callback function. For e.g.: the built-in setTimeout function
#### What is a Python decorator? How does it work? Tell some examples of its usage.
    A decorator takes in a function, adds some functionality and returns it without permanently modifying it. For e.g.: in Flask the app.route is used as decorator.
#### What is the difference between synchronous and asynchronous execution?
    synchronous is run sequentially, line after line, asynchrnonous is run differently, it awaits a functions's execution if the await keyword is put beofre the function call.
## Programming languages

### SQL

#### How can you connect your application to a database server? What are the possible ways?
    psycopg2 and idea built in database handler
#### When do you use the DISTINCT keyword in SQL?
    When i want to remove duplicate values from the table only showing unique elements
#### Talk about the behavior/goal of these base SQL clauses: WHERE, GROUP BY, HAVING, ORDER BY?
#### What are aggregate functions in SQL? Give 3 examples.
    These are used with a group by, the data inside a group can be manipulated/selected according to the functions SUM COUNT MIN MAX or AVG
#### What kind of JOIN types do you know in SQL? Could you give examples?
    LEFT JOIN: Returns all of the records from the left table, and the matched records from the right 
    RIGHT JOIN:returns all records from the right table, and the matched recors from the left table 
    FULL JOIN: returns all recrods when there is a match in either left or right table 
    INNER JOIN: returns records that have matching values in both tables
#### What are the constraints in sql?
    Constraints are the rules enforced on the data columns of a table. These are used to limit the type of data that can go into a table. e. g.: Primary KEY(a combination of a not null and UNIQUE. Uniquely identifies each row in the table),Foreign KEY(Uniquely indifies a row/records in another table), UNIQUE(Ensures that all values in a column different)
#### What is a cursor in SQL? Why would you use one?
    It is a database object is used to retrieve, store information from the database and to manipulate this data.
#### What are database indexes? When to use?
    Indexes are special lookup tables that the database search engine can use to speed up data retrieval. Simply put, an index is a pointer to data in a table. An index in a database is very similar to an index in the back of a book.
#### What are database transactions? When to use?
    A transaction represents a change in the database and they are generally used with DML commands. 
    It is usually used to catch an error, and in that case the transaction is aborted and it rolls back the changes. 
    If the transaction doesn't catch an error it is saved to the database(commit). Transactions work independently to each other.
#### What kind of database relations do you know? How to define them?
    One to One: Each table contain one primary key of the relation. For example: In the students table every student has one student_id and in the addresses table one address has one student_id, 
    One to Many: A table has a record that relates to many records in the other table. For example: In the teachers table one teacher has one teacher_id but in the classes table more classes can have the same teacher_id. 
    Many to Many: In both tables any record can relate to any record in the other table. For example: In the classes table one class can have many students and in the students table one student can have many classes
#### You have a table with an “address” field which contains data like “3525, Miskolc, Régiposta 9.” (postcode, city, street name and address). How would you query all records related to Miskolc?
    SELECT * FROM table WHERE addres LIKE '%Miskolc%'
#### How would you keep track of what kind of data has changed after an UPDATE or DELETE operation in a table?
    A foreign key with cascade delete means that if a record in the parent table is deleted, then the corresponding records in the child table will automatically be deleted. 
    This is called a cascade delete in SQL Server


### HTML & CSS

#### What’s the difference between XML, XHTML and HTML?
    HTML : is the HyperText Markup language, which is designed to create structured documents and provide for semantic meaning behind the documents(the skeleton of the website)
    XML : is the Extensible Markup Language which provides rules for storing, creating, structuring and encoding documents
    XHTML : is an XML-based HTML. it serves the same function as HTML, but with the same functionas XML documents
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
#### What is XML, XSLT, DTD?
    XML is eXtensible Markup Language used for storing data. XSLT is ((eXtensible Stylesheet Language) Transformation) used for styling XML. DTD is Document Type Definition used for defining the structure and attributes of XML.
#### What is the difference between HTML and XML?
    There are many. 1.HTML is used to display data, XML is used to store, transport 2.HTML is a markup language,XML provides framework to define markup language 3.HTML is not necceseray to use closing tags, in XML is mandatory

### Javascript

#### What is javascript?
    JavaScript is a scripting programming language for the Web. JS can update, and change both HTML and CSS. JS can calculate, namipulate and validate data. Can be backend and frontend.
#### When to use AJAX? Bring examples of its usage.
    AJAX stands for Asynchronous Javascript and XML. The most valuable feaute of AJAX is allow to refresh, update datathe webpage without reloading.
#### What is DOM and how to manipulate it from Javascript?
    It stands for Document Object Model.When a web page is loaded, the browser creates a Document Object Model of the page. With DOM, Js can access and change all the elements of the HTML content. 
    Each branch is a node and these nodes contain objects. For example you can access and manipulate html element : document.getElementById("demo").innerHTML = "Hello World!";
#### What are events and how/why to use them in Javascript?
    HTML events are the 'things' that happen HTML elements. When JS is used HTML pages, JS can react on these events. User interacton e.g.: click, hover, keydown, etc. 
    You can attach eventlisteners where you want to wair, and you can make a function on it
#### What is event bubbling/capturing? How would you use it?
    Event bubbling is when an aevent happens on an element, it first runs the handlers on it, then on its parent, then all the way up on the other ancestors.
    Event capturing is the event starts from top element to the target elements. It is the opposite of event bubbling, which starts from target element to the top element.
#### What is JSON and how do we use it?
    JSON stands for JavaScript Object Notation.It is a lightweight format for storing and transporting data. It is used when date is sent from a server to a webpage or reverse.

## Software engineering

### Version control

#### What type of branching strategy would you use?
Basic branching strategy. Live version on master branch, development version on development branch, and for every and eaech feature i would create a new branch, once finished i would pull from developement origin to
merge and check if its fully functional all together, review it with others then create a pull request to merge into developement.
#### What would you do if you find a bug on the production code (master branch)?
    Create a branch to fix the problem.
#### How can you move changes from one branch to another in GIT?
    Cherry pick for one commit, rebase for more, merge for the entire.
#### How does a VCS help with code reviews?
    Every little change can be seen with an exact history. You can also see who wrote specific changes to the code.
#### What is your favorite git command? Why?
#### What does remote/local mean in Git? 
    Local is in your computer, remote is on the web.

### DevOps

#### Why is it good to use a package manager software?
    It is a convenient way to get updates for you existing packages, and to get new ones. You don't have to google through everything.
#### Why is it good to use a virtual environment for a project?
    It helps you to keep your code functional if something changes. 
    For example a tool gets updated and suddenly your code crashes, but with virtual environment your versions can stay the same.
    For each and every project you can have different packages installed and not mixed up saving space , and keeping it clean.

### Networks

#### What kind of HTTP status codes do you know?
    1xx: Informational response, 2xx: Success, 3xx: Redirection, 4xx: Client error, 5xx: Server error
#### What is a API?
    API stands for application programming interface, it is a software intermediary that allows two applications to talk to each other
#### What is REST API?
    In order for an API to be considered RESTful, it has to conform to these criteria:

    A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP.
    Stateless client-server communication, meaning no client information is stored between get requests and each request is separate and unconnected.
    Cacheable data that streamlines client-server interactions.
    A uniform interface between components so that information is transferred in a standard form. This requires that:
    resources requested are identifiable and separate from the representations sent to the client.
    resources can be manipulated by the client via the representation they receive because the representation contains enough information to do so.
    self-descriptive messages returned to the client have enough information to describe how the client should process it.
    hypertext/hypermedia is available, meaning that after accessing a resource the client should be able to use hyperlinks to find all other currently available actions they can take.
    A layered system that organizes each type of server (those responsible for security, load-balancing, etc.) involved the retrieval of requested information into hierarchies, invisible to the client.
    Code-on-demand (optional): the ability to send executable code from the server to the client when requested, extending client functionality. 
    Though the REST API has these criteria to conform to, it is still considered easier to use than a prescribed protocol like SOAP (Simple Object Access Protocol), which has specific requirements like XML messaging, and built-in security and transaction compliance that make it slower and heavier. 

#### What is JSON? When to use?
     JSON stands for JavaScript Object Notation.It is a lightweight format for storing and transporting data. It is used when data is sent from a server to a webpage or reverse.
#### What is TCP/IP? What layers does it define, what are they responsible for?
    TCP/IP (Transmission Control Protocol/Internet Protocol) is a set of protocols, that are used for data transmission over computer networks. It is a set of communication rules that defines how data should be transferred.
    It.contains four layers :
    1. Process/Application Layer(HTTP, Browser), 
    2. Host-to-Host/Transport Layer(TCP, it packets the data with headers), 
    3. Internet Layer(IP, it knows where it comes from and where it goes), 
    4. Network Access/Link Layer(receives and converts the data)

#### What’s the difference between TCP and UDP?
    -TCP is a connection-oriented protocol, whereares UDP is a connectionless protocol 
    -The speed for TCP is slower while the speed of UDP is faster 
    -TCP uses handshake protocol like SYN, SYN-ACK, ACK while UDP uses no handshake protocols 
    -TCP does error checking and also makes error recovery, on the other hand, UDP performs error checking, but it discards erroneous packets.

#### How does an HTTP Request look like? What are the most relevant HTTP header fields?
    "GET /software/htp/cics/index.html HTTP/1.1" HTTP headers let the client and the server pass additional information with an HTTP request or response.

#### How does an HTTP Response look like? What are the most relevant HTTP header fields?
    Request URL: https://developer.mozilla.org/favicon-48x48.97046865.png Request Method: GET Status Code: 200 Remote Address: 13.32.12.71:443 Referrer Policy: strict-origin-when-cross-origin

#### What is DNS? How does it work?
    The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources

#### What is a web server?
    A web server is used for hosting websites. It usually runs on a dedicated hardware which stores data about the web page. This can handle incoming requests and respond to them.

#### Explain the client-server architecture.
    In this architecture a server can handle many connecting clients over a network. The server contains the data about the page. They communicate through requests and responses. A request is made by the client, the server processes that request (eg: Which page is to be loaded? Which cookies did you send?) and then it sends a response.

#### What would you use a session for?
    I'd store login data with this. Is the user logged in or not.
    
#### What would you use a cookie for?
    Personalised ads. Other: Saving forms, saving the state of the basket (any useful information that is not sensitive).

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
