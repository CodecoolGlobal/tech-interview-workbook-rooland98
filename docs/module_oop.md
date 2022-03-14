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
The order is whatever matches first, gets executed. If the first catch matches the exception, it executes, if it doesn't, the next one is tried and on and on until one is matched or none are. So, when catching exceptions you want to always catch the most specific first and then the most generic (as RuntimeException or Exception). It's also a compilation error to catch a generic exception first and then one of it's descendants later ( compilation error: first Exception, next RuntimeException). 

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

Encapsulation, in the context of C#, refers to an object's ability to hide data and behavior that are not necessary to its user. Encapsulation enables a group of properties, methods and other members to be considered a single unit or object.
Encapsulation in C# is implemented with different levels of access to object data that can be specified using the following access modifiers:

    Public: Access to all code in the program
    Private: Access to only members of the same class
    Protected: Access to members of same class and its derived classes
    Internal: Access to current assembly
    Protected Internal: Access to current assembly and types derived from containing class

C# allows encapsulation of data through the use of accessors (to get data) and mutators (to modify data), which help in manipulating private data indirectly without making it public. Properties are an alternate mechanism for private data to be encapsulated in a C# object and accessed in either read-only mode or in read-write mode. Unlike the accessor and mutator, a property provides a single point of access to an object's "set" and "get" values. 

#### Can a static method use non-static members?
Static methods can't use non-static members.In a static method, the method can access only static data members and static methods of another class or same the class.

#### What is the difference between hiding a static method and overriding an instance method?
Instance Methods
An instance method is a method with the same signature and return type as the virtual instance method in the superclass, but it overrides the superclass's method. This ability of a subclass (to override a method) allows a class to inherit from a superclass and modify behaviour as needed. The overriding method has the same name, number and type of parameters, and return type as the method that it overrides. An overriding method can also return a subtype of the type returned by the overridden method. This subtype is called a covariant return type. It is useful as it can be modified in all classes deriving from the superclass.

Static Methods
The static method uses class memory rather than an object. Static Method is called by class name. We can call a non-static function in static function by making an object of the class. We can’t use this keyword inside the static function. It can be used to define simple behaviour.

#### Define the following terms: Instantiation, Attribute, Method
Instantiation: When you create an instance of a class 
Attribute: It's basically a field, but in an another term. 
Method: A collection of statements, that perform a specific task, and it returns a result (if the return type is not a "void" of course) to the caller.

#### Could we access a static variable (or method) from a non-static method? Why?
We can, because a static variable can be accessed from anywhere even without instantiation and so the non-static method can work with it.
#### Could we access a non-static variable (or method) from a static method? Why?
You cannot access a non-static variable from a static method without an instance, because they doesn’t exist without their dad (the instance).

#### How many instances you have of a static variable of a given class?
Only one. Static variables are also known as Class Variables.

#### Why is it not a good practice to write a lot of static methods?
Static methods remain in the memory for a log time and its garbage collection takes long time. Developer's don't have control over destroying or creating Static variables. Excessive usage of static variables can result in the memory overflow.

#### What are the features of static attributes and static methods of a class? What are the benefits, when to use them?
The static can be used mainly for memory management reasons. If we don't want to create an object just so we can access a variable or field in it (like the PI variable for e.g.), then this can be a resons to create a static.

#### What is the ‘this’ reference?
this keyword refers to the current object

#### What are base class, subclass and superclass?
Base class is a class, from which other classes are derived. 
Superclass (Parent class) is the class from which a child class (or a subclass) inherits its constructors, methods, and attributes. 
Subclass (or child class) is the class which inherits its constructors, methods, and attributes from a parent class.

#### Draw an object oriented family (as entities, with relations) on the whiteboard.
--picture saved--

#### Difference between overloading and overriding?
They are very different, the only thing common in them is that they both of them has a connection in a way with the methods. Overloading: When you create more than 1 constructor on a method, and you give different type and number of arguments in it. Overriding: When you "override" the original purpose of the method, and you do something unique with it.

#### What are the Object Oriented Principles? Explain the concepts with realistic examples!

Abstraction: 

It is a process of hiding the implementation details and showing only functionality to the user.
EX.: We have an object Mobile phone. We have 3 mobile phones as following:
    Nokia 1400 (Features: Calling, SMS)
    Nokia 2700 (Features: Calling, SMS, FM Radio, MP3, Camera)
    Black Berry (Features:Calling, SMS, FM Radio, MP3, Camera, Video Recording, Reading E-mails)

Abstract information (necessary and common information) for the object "Mobile Phone" is that it makes a call to any number and can send SMS.

    abstract class MobilePhone {
        public void Calling();
        public void SendSMS();
    }
    public class Nokia1400: MobilePhone {}
    public class Nokia2700: MobilePhone {
        public void FMRadio();
        public void MP3();
        public void Camera();
    }
    public class BlackBerry: MobilePhone {
        public void FMRadio();
        public void MP3();
        public void Camera();
        public void Recording();
        public void ReadAndSendEmails();
    }
Encapsulation:

Wrapping up a data member and a method together into a single unit (in other words class) is called Encapsulation.
Encapsulation in C# is a mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. Therefore, it is also known as data hiding. To achieve encapsulation in C#: Declare the variables of a class as private. Provide public setter and getter methods to modify and view the variables values. The main difference between data hiding and encapsulation is that data hiding focus more on data security and encapsulation focuses more on hiding the complexity of the system.

Inheritance:
Inheritance is a mechanism in which one object acquires all the states and behaviors of a parent object.

Polymorphism: 
Polymorphism is the ability of an object to take on many forms. Polymorphism in OOP occurs when a super class references a sub class object.
Mobile phone but in many forms : phone,camera,mp3player,radio

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
Classes and objects are the two main aspects of object-oriented programming. Class – Fruit, Objects – Apple, Orange, Mango So, a class is a template for objects, and an object is an instance of a class. When the individual objects are created, they inherit all the variables and methods from the class. Encapsulation is a process of wrapping code and data together into a single unit. Inheritance is a mechanism in which one object acquires all the states and behaviors of a parent object. Abstraction is a process of hiding the implementation details and showing only functionality to the user. Polymorphism is the ability of an object to take on many forms. Polymorphism in OOP occurs when a super class references a sub class object.
#### How do you make a class immutable? What do you need to watch out for?
Immutable objects are objects which once loaded cannot be changed / modified by any way external or internal.
If I put it in one line, Immutable objects are used for data WHICH IS STATIC. Below are some of the instances of the same.

    Master data: One of the biggest uses of immutable objects is to load master data. Master data like country, currency, region, etc. rarely change. So we would like to load master data once in the memory and then we do not want it to be modified.
    Configuration data: All application needs configuration data. In the Microsoft world, we normally store these configuration data into Web.config or App.config file. Such kind of data is represented by objects and these data once loaded in the application memory will not change. It's again a good practice to make these kind of configuration data objects as immutable.
    Singleton objects: In applications, we normally create singleton objects for shared static data. So if the shared data is not changing, it’s an awesome candidate for immutable objects.

#### How many instances can be created for an abstract class?
YOu cant make instances from abstract classes.

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
IL(Intermediate language) code is a CPU independent partially compiled code. It’s partially compiled because we do not know in what kind of environment .NET code will run and on runtime IL Code will compile to machine code using the environmental properties(CPU, OS, machine configuration, etc). JIT compiles the IL code to Machine code just before execution and then saves this transaction in memory.
CLR(Common language runtime) is the heart of the .NET framework and it does 4 primary important things:

    1.Garbage collection
    2.CAS (Code Access Security)
    3.CV (Code Verification)
    4.IL to Native translation

#### What does “managed code” mean?
A code whose execution is managed by a runtim(CLR).
CLR is in charge of taking the managed code, compiling it into machine code and then executing it. On top of that, runtime provides several important services such as automatic memory management, security boundaries, type safety etc.

#### What is an assembly?
An assembly is a collection of types and resources that are built to work together and form a logical unit of functionality.Assemblies provide the common language runtime with the information it needs to be aware of type implementations.
In .NET and .NET Framework, you can build an assembly from one or more source code files. In .NET Framework, assemblies can contain one or more modules. This allows larger projects to be planned so that several developers can work on separate source code files or modules, which are combined to create a single assembly.

#### What is the difference between an EXE and a DLL?
-EXE: executable
-DLL: dynamic link library

#### What is the difference between `dotnet build` and `dotnet restore`?
dotnet build - Builds a project and all of its dependencies.
dotnet restore - Restores the dependencies and tools of a project.

DEpendencies of a project is created in a json format when dotnet restore is executed , but you dont have to run dotnet restore implicitly because every command which builds and requires the restore to run will run it automatically.

#### What is strong-typing versus weak-typing? Which is preferred? Why?
C# is a strongly typed language.
Strong typing means that the type check is done at compile time and weak typing means that the type check is done at run time. .NET languages incorporate strong typing.

#### What is a namespace?
The namespace keyword is used to declare a scope that contains a set of related objects. You can use a namespace to organize code elements and to create globally unique types.

#### Explain sealed class in C#?
A sealed class, in C#, is a class that cannot be inherited by any class but can be instantiated.
The design intent of a sealed class is to indicate that the class is specialized and there is no need to extend it to provide any additional functionality through inheritance to override its behavior. A sealed class is often used to encapsulate a logic that needs to be used across the program but without any alteration to it. 

#### What is explicit vs. implicit conversion? Give examples of both of them.
Implicit conversion is the simplest type of conversion. This type of conversion is type-safe and no loss of data happens during conversion. These conversions deal in converting a derived class to base class.
Implicit conversion can be used directly if the value that needs to be stored in another variable can fit directly without data loss. Like int -> long

int i = 75;
long j = i;

If there is a chance of data loss then the compiler will require performing an explicit conversion.
Explicit conversion or cast is a process of passing information to the compiler that the program is trying to perform conversion with the knowledge of possible data loss.
IF we are converting a higher numeric value into a lower one:
double d = 75.26;
int i;
i = (int)d;

The numbers after the decimal will be lost in the conversion.

#### Is a struct stored on the heap or stack?
Structs are not stored anywhere, local variables and fields are.
Local variables are stored on stack no matter what type (class or struct) they have. The difference is that a local variable of struct type stores the struct instance and a local variable of reference types stores a reference to the class instance that's stored on the heap.
Fields are stored in the object they belong too. If the object is of reference type then it's stored on the heap and so are its fields. If the object is of struct type then it may be stored on stack (as a local variable) or on the heap (as a field of another object).

#### Can a struct have methods?
In C#, a structure is a value type data type. It helps you to make a single variable hold related data of various data types. The struct keyword is used for creating a structure.
Structures can have methods, fields, indexers, properties, operator methods, and events.
Structures can have defined constructors, but not destructors. However, you cannot define a default constructor for a structure. The default constructor is automatically defined and cannot be changed.
Unlike classes, structures cannot inherit other structures or classes.
Structures cannot be used as a base for other structures or classes.
A structure can implement one or more interfaces.
Structure members cannot be specified as abstract, virtual, or protected.

#### Can DateTimes be null?
DateTime? myDate = null;
The question mark will give you a nullable type. The one that can either be set to its native value or to null.
DateTime itself is a value type. It cannot be null.

#### List out the differences between Array and ArrayList in C#?
Array:
Array is strongly typed, it can only store a specific type of items/elements.
Array we store only one type ot data.
Array cant accept null
Array belong to System.Array namespace 
using System;

ArrayList:
ArrayLsit can store multiple type of items/elements.
Arraylist can store all the datatype values.
ArrayList collection accepts null.
Arraylist belongs to System.Collections namespace 
using System.collections;

#### How is the using() pattern useful? What is IDisposable? How does it support deterministic finalization?
The using statement defines a scope at the end of which an
object will be disposed. You create an instance in a using statement to ensure that
Dispose is called on the object when the using statement is
exited.The object you instantiate must implement the
System.IDisposable interface.

using (expression | type identifier = initializer) statement
where: 

expression
An expression you want to call Dispose on upon exiting the
using statement.

type
The type of identifier.

identifier
The name, or identifier, of the type type. It is possible
to define more than one identifier of type type. Precede
each identifier = initializer with a comma.

initializer
An expression that creates an object.

statement
The embedded statement or statements to executed. 

#### How can you make sure that objects using dedicated resources (database connection, files, hardware, OS handle, etc.) are released as early as possible?
Implement the dispose pattern. This requires that you provide an IDisposable.Dispose implementation to enable the deterministic release of unmanaged resources. A consumer of your type calls Dispose when the object (and the resources it uses) are no longer needed. The Dispose method immediately releases the unmanaged resources.

#### Why to use keyword “const” in C#? Give an example.
The const (read: constant) keyword in C# is used to define a constant variable, i.e., a variable whose value will not change during the lifetime of the program. const int Pi = 3.14;

#### What is the difference between “const” and “readonly” variables in C#?
Readonly:
- Readonly is a runtime constant
- The value of readonly field can be changed
- It cannot be declared inside the method
- In readonly fields we can assign values in declaration and in the constructor
- It can be used with static modifiers.

Const:
- Const is a simple compile time constants
- The value of the field can not be changed
- It can be declared inside the method
- In const fields, we can only assign values in declaration part
- IT cannot be used with static modifiers

#### What is a property in C#?
Property in C# is a member of a class that provides a flexible mechanism for classes to expose private fields. 
C# properties are special methods called accessors. A C# property have two accessors, get property accessor and set property accessor.
A get accessor returns a property value, and a set accessor assigns a new value. The value keyword represents the value of a property.

#### List out two different types of errors in C#?
There are mainly five types of errors exist in C programming:

    Syntax error.
    Run-time error.
    Linker error.
    Logical error.
    Semantic error
    
#### What is the difference between “out” and “ref” parameters in C#?
The out is a keyword in C# which is used for passing the arguments to methods as a reference type. It is generally used when a method returns multiple values. The out parameter does not pass the property.

The ref is a keyword in C# which is used for passing the arguments by a reference. We can say that if any changes made in the argument the method will reflect it in that variable when the control return to the calling method. The ref parameter does not pass the property.

ref:
It is necessary the parameters should initialize before it pass to ref.
The passing of value through ref parameter is useful when the called method also need to change the value of passed parameter.
It is not necessary to initialize the value of a parameter before returning to the calling method.
When ref keyword is used the data may pass in bi-directional.

out:
It is not necessary to initialize parameters before it pass to out.
The declaring of parameter through out parameter is useful when a method return multiple values.
It is necessary to initialize the value of a parameter before returning to the calling method.
When out keyword is used the data only passed in unidirectional.

#### Can we override private virtual method in C#?
First of all private methods in the inherited class can't be accessed, so there is no question of overriding of private virtual methods. They have to be protected instead of private to be accessed in derived classes.
#### What's the difference between IEquatable and just overriding Object.Equals()?
#### Explain the differences between public, protected, private and internal. Explain access modifier – “protected internal” in C#!
    Public: Access to all code in the program
    Private: Access to only members of the same class
    Protected: Access to members of same class and its derived classes
    Internal: Access to current assembly
    Protected Internal: Access to current assembly and types derived from containing class

#### What’s the difference between using `override` and `new` keywords when defining method in child class?
The override modifier extends the base class virtual method, and the new modifier hides an accessible base class method.

#### Explain StringBuilder class in C#!
In C#, the string type is immutable. It means a string cannot be changed once created. For example, a new string, "Hello World!" will occupy a memory space on the heap. Now, by changing the initial string "Hello World!" to "Hello World! from Tutorials Teacher" will create a new string object on the memory heap instead of modifying an original string at the same memory address. This behavior would hinder the performance if the original string changed multiple times by replacing, appending, removing, or inserting new strings in the original string. To solve this problem, C# introduced the StringBuilder in the System.Text namespace. The StringBuilder doesn't create a new object in the memory but dynamically expands memory to accommodate the modified string. The StringBuilder is not the string. Use the ToString() method to retrieve a string from the StringBuilder object.

#### How we can sort the array elements in descending order in C#?
Array.Sort() then Array.Reverse();
OR 

        int[] arr = new int[] {1, 9, 6, 7, 5, 9};
        int temp;
  
        // traverse 0 to array length
        for (int i = 0; i < arr.Length - 1; i++)
  
            // traverse i+1 to array length
            for (int j = i + 1; j < arr.Length; j++)
            {
                // compare array element with 
                // all next element
                if (arr[i] < arr[j]) {
  
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
OR
arr.OrderByDescending(c => c).ToArray();

#### Can you use a value type as a generic type argument in C#? For example when implementing an interface like (IEquatable).
#### What are Nullable Types in C#? 
The Nullable type allows you to assign a null value to a variable. Nullable types introduced in C#2.0 can only work with Value Type, not with Reference Type. The nullable types for Reference Type is introduced later in C# 8.0 in 2019 so that we can explicitly define if a reference type can or can not hold a null value.
The Nullable type is an instance of System.Nullable<T> struct.

#### Conceptually, what is the difference between early-binding and late-binding?
The Early Binding occurs at compile time while the Late Binding occurs at runtime. The key difference between Early and Late Binding is that Early Binding uses the class information to resolve method calling while Late Binding uses the object to resolve method calling

#### What is delegate, event, callback, multicast delegate?
Delegate is a pointer to a function and you can invoke the pointed function via the delegate.
Events and Multicast are types of delegates. So delegate is the base for events and multicast.
Multicast delegates help to invoke multiple callbacks.

delegate void SomeMethod();
SomeMethodPtr ptrDelegate = SomeMethod;
ptrDelegate.Invoke();
#### What is enum in C#?
An enumeration type (or enum type) is a value type defined by a set of named constants of the underlying integral numeric type.

#### What is null-conditional operator?
A null-conditional operator applies a member access, ?., or element access, ?[], operation to its operand only if that operand evaluates to non-null; otherwise, it returns null.
    If a evaluates to null, the result of a?.x or a?[x] is null.
    If a evaluates to non-null, the result of a?.x or a?[x] is the same as the result of a.x or a[x], respectively.
#### What is null-coalescing operator?
The null-coalescing operator ?? returns the value of its left-hand operand if it isn't null; otherwise, it evaluates the right-hand operand and returns its result. The ?? operator doesn't evaluate its right-hand operand if the left-hand operand evaluates to non-null.
#### What is serialization?
Serialization is the process of converting an object into a stream of bytes to store the object or transmit it to memory, a database, or a file. Its main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization.
#### What is the difference between Finalize() and Dispose() methods?
Finalize is the backstop method, called by the garbage collector when it reclaims an object. Dispose is the "deterministic cleanup" method, called by applications to release valuable native resources 
#### How do you inherit a class from another class in C#?
class Dog : Animal{

}
in this case i mark that the dog is the child or subclass of Animal superclass/parent class
#### What is difference between “is” and “as” operators in C#?
The is operator will check if the result of the expression is compatible with a given type by simply testing an expression against a pattern.
The as operator is used to perform conversions between compatible types. It has a very similar role to the is operator, however, it works differently under the hood.

The is operator is used to check if the run-time type of an object is compatible with the given type or not, whereas the as operator is used to perform conversion between compatible reference types or nullable types.
The is operator is of Boolean type, whereas the as operator is not.
The is operator returns true if the given object is of the same type, whereas the as operator returns the object when they are compatible with the given type.
The is operator returns false if the given object is not of the same type, whereas the as operator returns null if the conversion is not possible.
The is operator is used for only reference, boxing, and unboxing conversions, whereas the as operator is used only for nullable, reference, and boxing conversions.

#### What are indexers in C# .NET?
Indexers allow instances of a class or struct to be indexed just like arrays. The indexed value can be set or retrieved without explicitly specifying a type or instance member. Indexers resemble properties except that their accessors take parameters.

#### What is the difference between returning IQueryable<T> vs. IEnumerable<T>?
The main difference between “IEnumerable” and “IQueryable” is about where the filter logic is executed. One executes on the client side (in memory) and the other executes on the database.

#### What is LINQ? Explain the idea of extension methods.
LINQ (Language Integrated Query) is uniform query syntax in C# to retrieve data from different sources and formats. It is integrated in C#, thereby eliminating the mismatch between programming languages and databases, as well as providing a single querying interface for different types of data sources. In C#, the extension method concept allows you to add new methods in the existing class or in the structure without modifying the source code of the original type and you do not require any kind of special permission from the original type and there is no need to re-compile the original type.

#### What are the advantages and disadvantages of lazy loading?
When you request a website, your browser loads all the required resources to display the page as desired. This means that all objects are requested, even those that are not visible to the user (i.e. objects that are “below the fold”). This results in unnecessarily long load times. To get around this issue, developers use lazy loading. Using a script such as LazyLoad, the browser only loads images and other data when they are in the viewport (i.e. the visible area), such as when scrolling or enlarging the browser window.

advantages:
Improved performance, less traffic load for the host
disadvantages:
UX may be affected, additional code when integrating with JS, External libraries may be required, JS integration requires that users have scripts enabled

#### How to use of “yield” keyword? Mention at least one practical scenario where it can be used?
When you use the yield contextual keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class.

IEnumerable<object> FilteredList()
{
    foreach(object item in FullList)
    {
        if(IsItemInPartialList(item))
            yield return item;
    }
}
The function returns an object that implements the IEnumerable<object> interface. If a calling function starts foreaching over this object, the function is called again until it "yields".

#### What are attributes in C#? Give some examples of usage of them.
Attributes provide a powerful method of associating metadata, or declarative information, with code (assemblies, types, methods, properties, and so forth). 
For ex. In ASP.Net MVC we mark the Routes for each action in controllers such as [Route("Home/Index")]

#### By what mechanism does NUnit know what methods to test?
Arrange/Act/Assert
The classic method of arranging our NUnit test code conforms to the “Arrange/Act/Assert” pattern. Using this pattern, we setup our code so that it is in the state we need it to be to perform the test. Then we perform some distinct action on the code. This action should exercise one and only one feature. And then, finally we assert that the action we performed resulted in some expectation being fulfilled.

#### What is the GAC? What problem does it solve?
Global Assembly Cache (GAC):

- Any system that has the CLR (common language runtime) installed, has a machine-wide code cache known as GAC.
- Assemblies deployed in the global assembly cache need to have a strong name.
- The Global Assembly Cache tool (Gacutil.exe), provided by the .NET Framework SDK can be used to deploy assemblies to GAC.

GAC solves the problem of DLL Hell and DLL versioning. GAC can hold two assemblies of the same name but different version. This ensures that the applications which access particular assembly can continue to access the same assembly even if another version of that assembly is installed on that machine.

#### What is the largest number you can work with in C#?
Max integer range is, on just about every (modern) platform, 2^31 - 1 (although, by the standard, int is only required to be at least 16 bits). For your given platform, it'll be defined as INT_MAX in <limits.
