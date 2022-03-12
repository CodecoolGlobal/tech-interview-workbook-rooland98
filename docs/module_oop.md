# OOP questions

## Software design

### Error handling
#### What does 'fail fast' mean in terms of exception handling? Why is it a good practice?
It means, when there is a problem, the software fails as soon as and as visibly as possible, rather than trying to proceed in a possibly unstable state.
    Fail fast:
    - Bugs are earlier to detect, easier to reproduce and faster to fix.
    - It’s faster to stabilize softwares.
    - Fewer bugs and defects will go into production.
    - The cost of failures and bugs are reduced.

## Computer Science

### Data structures
#### How to find the middle element of singly linked list in O(n)?
Traverse the whole linked list and count the number of nodes. Now traverse the list again till count/2 and return the node at count/2. 

#### Given an array of integers going from 1 to 100 (both inclusive) there is a duplicated entry. How to find it?
We sort the array and then we compare each element to the previous element. If the next element is not higher than the previous there is the duplication.

#### What is a linked list? How to find if a linked list has a loop?
LinkedList is a linear data structure, which is defined in the System.Collections.Generic namespace in c#.The structure consists of nodes , where each node contains a data field and a reference(link) to the next node in the list. It is a dynamic collection, and it provides a fast way of inserting and removing nodes.
*Important points : 
    - It also supports enumerators.
    - You can remove nodes and reinsert them, either in the same list or in another list, which results in no additional objects allocated on the heap.
    - If the LinkedList is empty, the First and Last properties contain null.
    - The capacity of a LinkedList is the number of elements the LinkedList can hold.
    - In LinkedList, it is allowed to store duplicate elements but of the same type.

A linked list has an instance variable called the head, and a reference with which you can reach to another element.
if you declare the head element to an outer variable and iterate through the list, you can check if the current element is the same as the one declared.
If the list comes to an end, it doesn't have a loop.

#### What is the Big O time complexity of the common operations in an ArrayList, LinkedList, HashMap? And of a bubble sort, quicksort, finding items in a Binary Search tree?
The Big O Notation for time complexity gives a rough idea of how long it will take an algorithm to execute based on two things: the size of the input it has and the amount of steps it takes to complete. We compare the two to get our runtime. Time complexity measures how efficient an algorithm is when it has an extremely large dataset. We look at the absolute worst-case scenario and call this our Big O Notation. 

#### How does HashMap work?
#### Why is it important for keys in a map to have an immutable type? (Consider String for example.)

### Database

#### How can you connect your application to a database server? What are the possible ways?
#### What do you know about database normalization?
Database normalization is the process of structuring a database, usually a relational database, in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity.
Normalization entails organizing the columns (attributes) and tables (relations) of a database to ensure that their dependencies are properly enforced by database integrity constraints. It is accomplished by applying some formal rules either by a process of synthesis (creating a new database design) or decomposition (improving an existing database design). 
 
### Other
#### What is a garbage collector, in a nutshell?
Garbage collector is a system that can be found in programming languages like Java and C#. The garbage collector does what other need to do on the C language manualy, which is memory management. The GC cleanes the memory from variables that we don't use anymore in the program's runtime.

## Programming paradigms

### Procedural
#### What is casting? What is the difference between up vs downcasting?
Casting is when we convert a datatype into another datatype. Upcasting is the typecasting of a child to a parent object. Downcasting is basicaly the same but in the other way.

#### Which order should we catch the exceptions? Why?

### Object-oriented
#### What is a class?
A class is a user-defined blueprint or prototype from which objects are created. A class combines instance fields and methods into a single unit.
In C#, classes support polymorphism, inheritance and also provide the concept of derived classes and base classes.

#### What is an object?
It is a basic unit of Object-Oriented Programming and represents real-life entities. A typical C# program creates many objects, which as you know, interact by invoking methods. 
An object consists of : 
    State: It is represented by attributes of an object. It also reflects the properties of an object.
    Behavior: It is represented by the methods of an object. It also reflects the response of an object with other objects.
    Identity: It gives a unique name to an object and enables one object to interact with other objects.

#### What is a constructor?
Constructors are used in classes for initializing new objects.

#### Do we require parameter for constructors?
We don't have to give parameters to the constructor, unless we want to make the instances more unique. A class can have multiple constructors, for ex.:
class Dog
{
    //field of an object
    public string _name;

    //default constructor, upon creating a new instance of Dog object, if we dont add parameters on creation the default constructor will run. Giving a parameter will run the constructor with an expected parameter of same type.

    public Dog(){
        _name = "sanyika";
    }
    public Dog(string dogName){
        _name = dogName;
    }
}

#### What is an interface?
An interface is an abstarct type that is used to specify behavior that classes must implement. If i create a void printHelloWorld(); function without a body, and i tell a class to implement it, that class MUST implement the method. But i get to decide what will be the content of that method.

#### What are access modifiers?
Access modifiers specifies the accessibility of a field, method, constructor or class.

#### What is data hiding?
When you use private access modifier on a field for example, so it can only be access via getters and setters, so no unauthorized access will be done on the field.

#### Can a static method use non-static members?
Static methods can't use non-static members.

#### What is the difference between hiding a static method and overriding an instance method?

#### Define the following terms: Instantiation, Attribute, Method
Instantiation: When you create an instance of a class 
Attribute: It's basically a field, but in an another term. 
Method: A collection of statements, that perform a specific task, and it returns a result (if the return type is not a "void" of course) to the caller.

#### Could we access a static variable (or method) from a non-static method? Why?
We can, because a static variable can be accessed from anywhere even without instantiation and so the non-static method can work with it.
#### Could we access a non-static variable (or method) from a static method? Why?
????

#### How many instances you have of a static variable of a given class?
Only one. Static variables are also known as Class Variables.

#### Why is it not a good practice to write a lot of static methods?
Static methods remain in the memory for a log time and its garbage collection takes long time. Developer's don't have control on destroying or creating of Static variables. Excessive usage of static variables can result in the memory overflow.

#### What are the features of static attributes and static methods of a class? What are the benefits, when to use them?
The static can be used mainly for memory management reasons. If we don't want to create an object just so we can access a variable or field in it (like the PI variable for e.g.), then this can be a resons to create a static.

#### What is the ‘this’ reference?
this keyword refers to the current instance of a class

#### What are base class, subclass and superclass?
Base class is a class, from which other classes are derived. 
Superclass (Parent class) is the class from which a child class (or a subclass) inherits its constructors, methods, and attributes. 
Subclass (or child class) is the class which inherits its constructors, methods, and attributes from a parent class.

#### Draw an object oriented family (as entities, with relations) on the whiteboard.
--picture saved--
#### Difference between overloading and overriding?
#### What are the Object Oriented Principles? Explain the concepts with realistic examples!
#### What is method overloading?
Method overloading allows programmers to use multiple methods with the same name. 
The methods are differentiated with their number and type of method arguments. 
Method overloading is an example of the polymorphism feature of an object oriented programming language.

C# method overloading allows a class to declare multiple methods with the same name, separated by their signatures.
Method overloading can be achieved by the following:
    -By changing number of parameters in a method.
    -By changing the order of parameters in a method.
    -By using different data types for parameters.

#### What is method overriding?
Method overriding in C# allows programmers to create base classes that allows its inherited classes to override same name methods when implementing in their class for different purpose. This method is also used to enforce some must implement features in derived classes.
- Method overriding is only possible in derived classes, not within the same class where the method is declared.
- Base class must use the virtual or abstract keywords to declare a method. Then only can a method be overridden.

#### Explain how object oriented languages attempt to simplify memory management for Programmers.
Garbage collector. It checks if a variable is still referenced through the program, and saves the allocated memory.

#### Explain the “Single Responsibility” principle!
The Single Responsibility Principle in C# states that “Each software module or class should have only one reason to change“. 
In other words, we can say that each module or class should have only one responsibility to do.
We need to design the software in such a way that everything in a class or module should be related to a single responsibility.

#### What is an object oriented program? Explain, show.
#### How do you make a class immutable? What do you need to watch out for?
#### How many instances can be created for an abstract class?

## Programming languages

### Java

#### What is autoboxing and unboxing?
#### If you have a variable, that shall store a positive whole number between 0 and 200, what primitive type would you use to store it?
#### What is the "golden rule" of variable scoping in Java? What is the lifetime of variables?
#### What is the purpose of the ‘equals()’ method?
#### What is the difference between '==' and 'equals()'?
#### What does the ‘static’ keyword mean?
#### Why is the main() method declared as static? Explain.
#### What is the default access modifier in a class?
#### What is the JVM?
#### What is the difference between the JRE and the JDK?
#### What is the difference between long and Long?
#### Can a long store bigger numbers than a Long?
#### What kind of packages do you know under java.util.* ? Bring at least 3 examples.
#### What are the access modifiers in Java? Which one could we use for class?
#### Can an “enum” contain methods in Java? Explain.
#### When would you use a private/protected/public attribute? What is the difference?
#### How do you prevent developers from subclassing a class?
#### How do you prevent developers from overriding a method in a subclass?
#### How do you prevent developers from changing the value of a variable?
#### Think about money ;) How would you store a currency value, that shall support decimal parts? Think it through again, and try to think outside of the box!
#### What happens if you try to call something, that you have no access to, because of data hiding?
#### What happens if you try to delete/drop an item from an array, while you are iterating over it?
#### What happens if you try to delete/drop/add an item from a List, while you are iterating over it?
#### What happens if you try to add an item to the end of an array, while you are iterating over it?
#### If you need to access the iterator variable after a for loop, how would you do it?
#### Which interfaces extend the Collection interface in Java. Which classes?
#### What is the connection between equals() and hashCode()? How are they used in HashMap?
#### What is the difference between checked exceptions and unchecked exceptions? Could you bring example for each?
#### What is Error in Java and how does it relate to Exception?
#### When does 'finally' block run? What it is used for? Could you give an example from your projects when you would use 'finally'?
#### What is the largest number you can work with in Java?
#### When you use method overriding, can you change the access level of the method, from protected to public? Why?When you use method overriding, can you change the access level of the method, from public to protected? Why?
#### Can the main method be overridden? Explain your answer!
#### When you use method overriding, can you throw fewer exceptions in the subclass than in the parent class? Why?
#### When you use method overriding, can you throw more exceptions in the subclass than in the parent class? Why?
#### What does "final" mean in case of a variable, method or a class?
#### What is the super keyword?
#### What are “generics”? When to use? Show examples.
#### What is the benefit of having “generic” containers?
#### Given two Java programs on two different machines. How can you communicate between the two? What are the possible ways?
#### What is an annotation? What can be annotated and how? Show examples.

### C#;
#### Explain the purpose of IL and how does it relate to CLR?
#### What does “managed code” mean?
#### What is an assembly?
#### What is the difference between an EXE and a DLL?
#### What is the difference between `dotnet build` and `dotnet restore`?
#### What is strong-typing versus weak-typing? Which is preferred? Why?
#### What is a namespace?
#### Explain sealed class in C#?
#### What is explicit vs. implicit conversion? Give examples of both of them.
#### Is a struct stored on the heap or stack?
#### Can a struct have methods?
#### Can DateTimes be null?
#### List out the differences between Array and ArrayList in C#?
#### How is the using() pattern useful? What is IDisposable? How does it support deterministic finalization?
#### How can you make sure that objects using dedicated resources (database connection, files, hardware, OS handle, etc.) are released as early as possible?
#### Why to use keyword “const” in C#? Give an example.
#### What is the difference between “const” and “readonly” variables in C#?
#### What is a property in C#?
#### List out two different types of errors in C#?
#### What is the difference between “out” and “ref” parameters in C#?
#### Can we override private virtual method in C#?
#### What's the difference between IEquatable and just overriding Object.Equals()?
#### Explain the differences between public, protected, private and internal. Explain access modifier – “protected internal” in C#!
#### What’s the difference between using `override` and `new` keywords when defining method in child class?
#### Explain StringBuilder class in C#!
#### How we can sort the array elements in descending order in C#?
#### Can you use a value type as a generic type argument in C#? For example when implementing an interface like (IEquatable).
#### What are Nullable Types in C#?
#### Conceptually, what is the difference between early-binding and late-binding?
#### What is delegate, event, callback, multicast delegate?
#### What is enum in C#?
#### What is null-conditional operator?
#### What is null-coalescing operator?
#### What is serialization?
#### What is the difference between Finalize() and Dispose() methods?
#### How do you inherit a class from another class in C#?
#### What is difference between “is” and “as” operators in C#?
#### What are indexers in C# .NET?
#### What is the difference between returning IQueryable<T> vs. IEnumerable<T>?
#### What is LINQ? Explain the idea of extension methods.
#### What are the advantages and disadvantages of lazy loading?
#### How to use of “yield” keyword? Mention at least one practical scenario where it can be used?
#### What are attributes in C#? Give some examples of usage of them.
#### By what mechanism does NUnit know what methods to test?
#### What is the GAC? What problem does it solve?
#### What is the largest number you can work with in C#?
