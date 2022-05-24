# General enterprise questions

## Software engineering

### Architectures

#### What is n-tier (or multi-tier) architecture?
N-tier architecture is also called multi-tier architecture because the software is engineered to have the processing, data management, and presentation functions physically and logically separated. That means that these different functions are hosted on several machines or clusters, ensuring that services are provided without resources being shared and, as such, these services are delivered at top capacity.  The “N” in the name n-tier architecture refers to any number from 1.
#### What are microservices? Advantages and disadvantages?
Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are:

    Highly maintainable and testable.
    Loosely coupled.
    Independently deployable.
    Organized around business capabilities.

Advantages:

    Improved fault isolation: Larger applications can remain mostly unaffected by the failure of a single module.
    Eliminate vendor or technology lock-in: Microservices provide the flexibility to try out a new technology stack on an individual service as needed. There won’t be as many dependency concerns and rolling back changes becomes much easier. With less code in play, there is more flexibility.
    Ease of understanding: With added simplicity, developers can better understand the functionality of a service.
    Smaller and faster deployments: Smaller codebases and scope = quicker deployments, which also allow you to start to explore the benefits of Continuous Deployment.
    Scalability: Since your services are separate, you can more easily scale the most needed ones at the appropriate times, as opposed to the whole application. When done correctly, this can impact cost savings.

Disadvanteges:

    Communication between services is complex: Since everything is now an independent service, you have to carefully handle requests traveling between your modules. In one such scenario, developers may be forced to write extra code to avoid disruption. Over time, complications will arise when remote calls experience latency.
    More services equals more resources: Multiple databases and transaction management can be painful.
    Global testing is difficult: Testing a microservices-based application can be cumbersome. In a monolithic approach, we would just need to launch our WAR on an application server and ensure its connectivity with the underlying database. With microservices, each dependent service needs to be confirmed before testing can occur.
    Debugging problems can be harder: Each service has its own set of logs to go through. Log, logs, and more logs.
    Deployment challengers: The product may need coordination among multiple services, which may not be as straightforward as deploying a WAR in a container.
    Large vs small product companies: Microservices are great for large companies, but can be slower to implement and too complicated for small companies who need to create and iterate quickly, and don’t want to get bogged down in complex orchestration.


#### What is Separation of Concerns?
The separation of concerns (SoC) is one of the most fundamental principles in software development.
It is so crucial that 2 out of 5 SOLID principles (Single Responsibility and Interface Segregation) are direct derivations from this concept.
The principle is simple: don't write your program as one solid block, instead, break up the code into chunks that are finalized tiny pieces of the system each able to complete a simple distinct job.

#### What is a layered design and why is it important in enterprise applications?
Modern enterprise applications can be large and daunting. The sheer amount of users, data, transactions, options, business cases, components, interacting systems, and a host of other factors, make designing business applications require a great deal of expertise. There are many examples of enterprise software that grew too complex, unmanageable, and fragile due to implementation, that did not account for change. It is for this reason that an effective enterprise application should be divided into layers.
The layered architecture is the simplest form of software architectural pattern. If you are going to design a rudimentary application where the user count is very low ( < 100–200 ) and you are sure that there won't be too much requirement changes after you go live, this is the best software architecture pattern to use.
Layered architecture patterns are n-tiered patterns where the components are organized in horizontal layers. All the components are interconnected but do not depend on each other.
There are 4 layers in this architecture. From top to bottom:

    Presentation layer: It contains all categories related to the presentation layer.
    Business layer: It contains business logic.
    Persistence layer: Used for handling functions like object-relational mapping.
    Database layer: This is where all the data is stored.

Pros:

    It is easy to test as components belong to specific layers. As such, they can be tested separately.
    It is simple and easy to implement because naturally, most applications work in layers.

Cons:

    Although changes can be done to a particular layer, it is not easy because the application is a singular unit. Also, the coupling between layers tends to make it harder. This also makes it difficult to scale.
    It must be deployed as a singular unit thus a change to a particular layer means the whole system must be redeployed.
    The larger is it, the more resources it requires for requests to go through multiple layers and thus will cause performance issues.


#### What is Dependency Injection?
Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out.
Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required. You don't need those frameworks to have dependency injection. Instantiating and passing objects (dependencies) explicitly is just as good an injection as injection by framework.

#### What is the DAO pattern? When and how to implement?
Data Access Object Pattern or DAO pattern is used to separate low level data accessing API or operations from high level business services. Following are the participants in Data Access Object Pattern:

    Data Access Object Interface - This interface defines the standard operations to be performed on a model object(s).

    Data Access Object concrete class - This class implements above interface. This class is responsible to get data from a data source which can be database / xml or any other storage mechanism.

    Model Object or Value Object - This object is simple POJO containing get/set methods to store data retrieved using DAO class.

#### What is SOA? When to use?
Service-Oriented Architecture (SOA) is a style of software design where services are provided to the other components by application components, through a communication protocol over a network. Its principles are independent of vendors and other technologies. In service oriented architecture, a number of services communicate with each other, in one of two ways: through passing data or through two or more services coordinating an activity

### Testing

#### What are unit test, integration test, system test, regression test, acceptance test? What is the major difference between these?

    Unit test -- Test individual component (low-level): Specify and test one point of the contract of a single method of a class. This should have a very narrow and well defined scope. Complex dependencies and interactions to the outside world are stubbed or mocked. Some characteristics:
        examine a single class,
        require just the source code of the application, instead of a running instance,
        are fast,
        are not affected by external systems, e.g. web services or databases, and
        perform little or no I/O, e.g. no real database connections -- no side-effects.

            Positive Testing: testing the system by giving the valid data.
            Negative Testing: testing the system by giving the invalid data.

    Integration test -- Test component groups: Test the correct inter-operation of multiple subsystems. There is whole spectrum there, from testing integration between two classes, to testing integration with the production environment.

    System test -- Test the integrated System: Tests a system as a black box. Dependencies on other systems are often mocked or stubbed during the test (otherwise it would be more of an integration test).

    Acceptance test -- Test the final System: Test that a feature or use case is correctly implemented. It is similar to an integration test, but with a focus on the use case to provide rather than on the components involved.

    Functional testing:

        Functional Testing is the type of testing done against the business requirements of application. It is a black box type of testing (mostly).
        Smoke test (aka sanity check): A simple integration test where we just check that when the system under test (SUT) is invoked it returns normally and does not blow up. Smoke testing is an analogy with plumbing, where a system of pipes is literally filled by smoke and then checked visually. If anything smokes, the system is leaky.
        Regression test: A test that was written when a bug was fixed. It ensures that this specific bug will not occur again. The full name is "non-regression test". It can also be a test made prior to changing an application to make sure the application provides the same outcome.

    Non-functional testing:

        Done against the non functional requirements. Most of the criteria are not consider in functional testing so it is used to check the readiness of a system.
        Performance testing
        Stress testing
        Security testing
        etc.

#### What is code coverage? Why is it used? How you can measure?
Code Coverage is a measurement of how many lines/blocks of your code are executed while the automated tests are running.
While code coverage is a good metric of how much testing you are doing, it is not necessarily a good metric of how well you are testing your product. There are other metrics you should use along with code coverage to ensure the quality.

#### What does mocking mean? How would you do it 'manually' (i. e. without using any fancy framework)?

Unit testing means testing units independently, so in some cases we need to isolate the component under test using test doubles (dummies, stubs, fakes, mocks).
In short, mocking is creating units (class instances) that simulate the behaviour of real units.
Mocking is the act of removing external dependencies from a unit test in order to create a controlled environment around it. Typically, we mock all other classes that interact with the class that we want to test.

Common targets for mocking are:

    Database connections,
    Web services,
    Classes that are slow,
    Classes with side effects,
    Classes with non-deterministic behavior.

Mocks and stubs are fake classes that replace these external dependencies. Most of the time, we're fine using only stubs.

Stub: A stub is a fake class that comes with preprogrammed return values. It's injected into the class (component) under test to give you absolute control over what's being tested as input. A typical stub is a database connection that allows you to mimic any scenario without having a real database.
Mock: A mock can be examined after the test is finished for its interactions with the class (component) under test. For example, you can ask it whether a method was called or how many times it was called. Typical mocks are classes with side effects that need to be examined, e.g. a class that sends emails or sends data to another external service.

We usually use libraries (Mockito, NSubstitute, Moq) that make mocking of objects easy. To make mocking possible you should use the Dependency Injection design pattern in your code!
Without a library, the easiest way would be to create an inner class that implements the interface, implement the methods to return the data that you want, then use it in the test case.

#### What is a test case? What is an assertion? Give examples!
A test case is a document, which has a set of test data, preconditions, expected results and postconditions, developed for a particular test scenario in order to verify compliance against a specific requirement.
Test Case acts as the starting point for the test execution, and after applying a set of input values, the application has a definitive outcome and leaves the system at some end point or also known as execution postcondition.
The term ‘assertion’ means a boolean expression that concerns a defined item of the software program that will be true until the system error happens. A test assertion is a statement that describes the logic of the system under test.

If you want to test the boolean conditions (true or false), you can use following assert methods
    assertTrue(condition)
    assertFalse(condition)

If you want to test equality of two objects, you have the following methods
    assertEquals(expected, actual)

#### What is TDD? What are the benefits?
Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle:
    - requirements are turned into very specific test cases
    - then the code is created / improved so that the tests pass

Benefits:

    You get immediate feedback on if your code is working, so you can find bugs faster
    By seeing the test go from red to green, you know that you have both a working regression test, and working code
    You gain confidence to refactor existing code, which means you can clean up code without worrying what it might break
    At the end you have a suite of regression tests that can be run during automated builds to give you greater confidence that your codebase is solid

#### What are the unit testing best practices? (Eg. how many assertion should a test case contain?)

    - Never push a failing test to the repository.
    - Use separate folder for tests as you might not want to deliver (ie. give to the user) your test along with the production code.
    - Give descriptive names to test methods so that you can see what fails easier
    - Write tests for the error cases and corner cases.
    - Check only a single thing in one test method (practically: use 1 assert per test method)
    - Use assert (or expected exception) in all of the test methods.
    - Use the expected result as the first argument of an assert method: Assert.AreEqual(expected, actual);
    - Use the AAA pattern

#### What is arrange/act/assert pattern?
    A Unit Test tests a single "Act" in a program, typically a single method call on an object instance. Arrange, Act, Assert (AAA) organizes a unit test into three parts: before, during and after the Act.

    Arrange: Everything up to, but not including, the method call of interest. We set up the state that we want the world (the object that we're calling the method on, other objects that it interacts with, etc.) to be in when we call the method.

    Act: The call of the method we're testing.

    Assert: The rest of the test, where we Assert that the Act had the effects on the world that we expect.

### DevOps

#### What is continuous integration? Why is CI important?
Software developers often work in isolation and therefore the advantage of CI is a great practice when working in a team because prior to the emergence of Continuous Integration, it took days or even weeks for software developers to integrate their code and also to merge changes from different branches of code. These long periods of time created many merge conflicts, stubborn bugs, code strategy divergence and duplicated effort. CI requires the team’s code to be merged to a shared control branch, continuously, to avoid these problems.

#### Why are tests important in the CI workflow?
You can run your code to your new branch and the Continuous Integration server will take care of running the tests for you. If everything is fine, you can be sure that you didn’t break the code. And if the code fails on another person’s machine, you have evidence that your code is not at fault.

#### Name some software that help the CI workflow! 
    jenkins, gitlab CI
#### What is Continuous Delivery?
Continuous delivery is the important process of delivering the software/updates to production in smaller increments, ensuring that the software can be released at any time. With this approach of DevOps, the team will be always ready on ‘Delivering any time’ to the production. Continuous delivery is a state of being ready and able to release any version at any time on any platform.

#### What is Continuous Deployment?
Continuous deployment (CD) is a software engineering approach in which software functionalities are delivered frequently through automated deployments. CD opposite with continuous delivery, a similar approach in which software functionalities are also frequently delivered and they think to be potentially able of being deployed but are actually not deployed. Continuous deployment is being able to continually deploy.

#### What is DevOps?
    DevOps is a set of processes, methods and systems for communication, collaboration and integration between departments for Development (Applications/Software Engineering), Technology Operations and Quality Assurance (QA).
    DevOps integrates developers and operations teams in order to improve collaboration and productivity by automating infrastructure, automating workflows and continously measuring application performance.  

### Software Methodologies

#### What kind of software-lifecycle models do you know?
Software development life cycle (SDLC) is a series of phases that provide a common understanding of the software building process. How the software will be realized and developed from the business understanding and requirements elicitation phase to convert these business ideas and requirements into functions and features until its usage and operation to achieve the business needs.

Waterfall :
The Waterfall Model is a linear sequential flow. In which progress is seen as flowing steadily downwards (like a waterfall) through the phases of software implementation. This means that any phase in the development process begins only if the previous phase is complete. The waterfall approach does not define the process to go back to the previous phase to handle changes in requirement.

Agile methodology:
It is based on iterative and incremental development, where requirements and solutions evolve through collaboration between cross-functional teams.
It can be used with any type of project, but it needs more engagement from the customer and to be interactive. Also, we can use it when the customer needs to have some functional requirement ready in less than three weeks and the requirements are not clear enough. This will enable more valuable and workable piece for software early which also increase customer satisfaction.

#### What is a UML diagram? What kind of diagram types do you know?
The Unified ing Language is a standard visual modeling language intended to be used for:

    Modeling business and similar processes,
    Analysis, design, and implementation of software-based systems

There are two major kinds of UML diagram, structure diagrams and behavior diagrams:

    Structure diagrams: show the static structure of the system and its parts on different abstraction and implementation levels and how they are related to each other. The elements in a structure diagram represent the meaningful concepts of a system, and may include abstract, real world and implementation concepts.
    Behavior diagrams: show the dynamic behavior of the objects in a system, which can be described as a series of changes to the system over time.

#### What is a UML class diagram? What are the typical elements?
Before implementating a bunch of classes, you'll want to have a conceptual understanding of the system — that is, what classes do I need? What functionality and information will these classes have? How do they interact with one another? Who can see these classes? And so on.

That's where class diagrams come in. Class diagrams are a neat way of visualizing the classes in your system before you actually start coding them up. They're a static representation of your system structure.

Why do we need class diagrams:

    Planning and modeling ahead of time make programming much easier.
    Besides that, making changes to class diagrams is easy, whereas coding differnent functionality after the fact is kind of annoying.
    When someone wants to build a house, they don't just grab a hammer and get to work. They need to have a blueprint — a design plan — so they can ANALYZE & modify their system.
    You don't need much technical/language-specific knowledge to understand it.

UML Class Notation:

A class is represented as a box with 3 compartments. The uppermost one contains the class name. The middle one contains the STATE = class attributes and the last one contains the BEHAVIOR = class operations (methods). Each attribute has a type. Each operation has a signature.

Class visibility:

    - private
    # protected
    ~ package
    + public

Relationships:

    Association:
        Associations are relationships between classes in a UML Class Diagram. They are represented by a solid line between classes. Associations are typically named using a verb or verb phrase which reflects the real world problem domain.
        General association is simply a solid line.
        E.g. Airplane -- Ticket

    Generalization (inheritance):
        Represents an "is-a" relationship.
        An abstract class name is shown in italics.
        Represented by a solid line + an empty arrow pointing to the extended class.
        E.g. Square --|> Rectangle

    Realization:
        Same as Inheritence but with interfaces.
        Interface is shown between two diamond operators + name in italics: <<interface>> IMyInterface
        Represented by a dashed line + an empty arrow pointing to the implemented interface.
        E.g. MotorCar ..|> Car

    Aggregation:
        A special type of association.
        It represents a "has-a" relationship.
        Objects of Class1 and Class2 have separate lifetimes.
        Represented by a solid line + an empty diamond pointing to the aggregator class.
        E.g. Tortoise --o Creep

    Composition
        A special type of aggregation where parts are destroyed when the whole is destroyed.
        It represents a "has-a" relationship.
        Objects of Class1 and Class2 have the same lifetimes.
        Represented by a solid line + a filled diamond pointing to the composite class.
        E.g. Heart --* Human

    Dependency:
        An object of one class might use an object of another class in the code of a method. If the object is not stored in any field, then this is modeled as a dependency relationship.
        A special type of association.
        Exists between two classes if changes to the definition of one may cause changes to the other (but not the other way around).

    Cardinality:
        Cardinality is expressed in terms of:
            one to one
            one to many
            many to many
        E.g.:
            1: ecactly one
            0..1: zero to one
            *: zero or more
            1..*: at least one
            {ordered}: ordered

#### What kind of design patterns do you know? Bring at least 3 examples.
    - Singleton pattern : The singleton pattern is used to limit creation of a class to only one object. This is beneficial when one (and only one) object is needed to coordinate actions across the system.
    - Iterator pattern :  The iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers in most cases.(foreach)
#### What is the purpose of the Iterator Pattern?
The purpose of the iterator pattern is to abstract away the underlying structure in which the data are kept. Data-structure can be an array, a tree, a list, etc.
#### What do you know about the SOLID principles?
The SOLID principles were first conceptualized by Robert C. Martin. These design principles encourage us to create more maintainable, understandable, and flexible software. Consequently, as our applications grow in size, we can reduce their complexity and save ourselves a lot of headaches further down the road.

The following 5 concepts make up our SOLID principles:

    Single Responsibility principle:
        A class should only have one responsibility. Furthermore, it should only have one reason to change.
        Benefits:
            Testing: A class with one responsibility will have far fewer test cases
            Lower coupling: Less functionality in a single class will have fewer dependencies
            Organization: Smaller, well-organized classes are easier to search than monolithic ones

    Open/Closed principle:
        Open for extension, Closed for modification
        In doing so, we stop ourselves from modifying existing code and causing potential new bugs

    Liskov Substitution principle:
        If class A is a subtype of class B, then we should be able to replace B with A without disrupting the behavior of our program

    Interface Segregation principle:
        Larger interfaces should be split into smaller ones.
        By doing so, we can ensure that implementing classes only need to be concerned about the methods that are of interest to them.

    Dependency Inversion principle:
        The DIP is neither dependency injection (DI) nor inversion of control (IoC). Even so, they all work great together.
        Simply put, DI is about making software components to explicitly declare their dependencies (or collaborators) through their APIs, instead of acquiring them by themselves.
        The principle of Dependency Inversion refers to the decoupling of software modules.
        This way, instead of high-level modules depending on low-level modules, both will depend on abstractions.
        With DI, the responsibility of providing the component dependencies and wiring object graphs is transferred from the components to the underlying injection framework.

#### How would you separate data storage code and business logic code (which uses stored data) in an application?
The Data Access Object (DAO) pattern is a structural pattern that allows us to isolate the application/business layer from the persistence layer (usually a relational database, but it could be any other persistence mechanism) using an abstract API.
Repository design pattern is another way to do so. In an ASP.net Web app, controllers can get the Repositories with DI, and repositories will communicate and send requests to some kind of file/data storage.

## Computer science

### Data Structures
#### What is the difference between Stack and Queue data structure?
Stack and Queue both are the non-primitive data structures. The main differences between stack and queue are that stack uses LIFO (last in first out) method to access and add data elements whereas Queue uses FIFO (First in first out) method to access and add data elements.
Stack has only one end open for pushing and popping the data elements on the other hand Queue has both ends open for enqueuing and dequeuing the data elements.
Stack and queue are the data structures used for storing data elements and are actually based on some real world equivalent. For example, the stack is a stack of CD’s where you can take out and put in CD through the top of the stack of CDs. Similarly, The queue is a queue for Theatre tickets where the person standing in the first place, i.e., front of the queue will be served first and the new person arriving will appear in the back of the queue (rear end of the queue).

#### What is a graph? What are simple graphs? What are directed graphs? What are weighted graphs?
#### What are trees? What are binary trees? What are binary search trees?
#### How can you store graphs in programs? What are the advantages/disadvantages per each?
#### What are graph traversal algorithms? What is BFS, how does it work? What is DFS, how does it work?
#### How does dictionary work?
A dictionary is a general-purpose data structure for storing a group of objects. A dictionary has a set of keys and each key has a single associated value. When presented with a key, the dictionary will return the associated value.
A dictionary is also called a hash, a map, a hashmap in different programming languages (and an Object in JavaScript). They're all the same thing: a key-value store.
The concept of a key-value store is widely used in various computing systems, such as caches and high-performance databases. Typically, the keys in a dictionary must be simple types (such as integers or strings) while the values can be of any type. Keys in a dictionary must be unique; an attempt to create a duplicate key will typically overwrite the existing value for that key.

#### Why is it important for keys in a hashmap to have an immutable type? (Consider string for example.)
HashMap is a data-structure where data is organized as key and values pairs. i.e. for every value there must be a key to be produced to be stored into the hashmap.

Keys are normally generated using hashcode() method. Key’s hash code is used primarily in conjunction to its equals() method, for putting a key in map and then searching it back from map. So if hash code of key object changes after we have put a key-value pair in map, then its almost impossible to fetch the value object back from map. It is a case of memory leak. To avoid this, map keys should be immutable.

### Algorithms
#### What is QuickSort? Describe the main logic of this sorting algorithm.
A searching algorithm, what it does is that it picks one element called the pivot and compares every element to this element, and if an element is smaller than the pivot it changes an element that is bigger, this way the list gets partitioned into part one that is biggeror equals and one that is smaller than the pivot and makes the same operation on the two parts again until the list is eventually sorted.

## Software design

### Security

#### What is OAuth2?
#### What is Basic Authentication?
#### What is CORS, why it’s needed in browsers?
Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin. This is useful because, thanks to the same-origin policy followed by XMLHttpRequest and fetch, JavaScript can only make calls to URLs that live on the same origin as the location where the script is running. For example, if a JavaScript app wishes to make an AJAX call to an API running on a different domain, it would be blocked from doing so thanks to the same-origin policy.
#### How can you initialize a CSRF attack?
#### What is JWT used for? Where to store it on client side?

### Threaded programming

#### When do you need to use threads in an application?
#### What is a daemon thread?
#### What is the difference between concurrent and parallel execution of code?
#### What is the most important problem developers are faced when using threads?
#### In what kind of situations can deadlocks occur?
#### What are possible ways to prevent deadlocks from occurring?
#### What does critical section or critical region mean in the context of concurrent programming?
