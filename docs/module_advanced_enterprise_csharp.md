# Enterprise module (C# branch)

## ASP.NET Core

### What Is the difference between .NET Core and .NET Standard? How do them relate to “classic” .NET?
. NET Core is an implementation of the . NET Standard that's optimized for building console applications, Web apps and cloud services using ASP.NET Core. Its SDK comes with a powerful tooling that in addition to Visual Studio development supports a full command line-based development workflow.

### What is ASP.NET MVC?
MVC is a design pattern used to decouple user-interface (view), data (model), and application logic (controller). This pattern helps to achieve separation of concerns.
Using the MVC pattern for websites, requests are routed to a Controller that is responsible for working with the Model to perform actions and/or retrieve data. The Controller chooses the View to display and provides it with the Model. The View renders the final page, based on the data in the Model.

### Can you explain Model, Controller and View in MVC?
above example.

### Explain the page lifecycle of MVC.
At a high level, a life cycle is simply a series of steps or events used to handle some type of request or to change an application state. 
MVC has two life cycles −

    The application life cycle
    The request life cycle

The application life cycle refers to the time at which the application process actually begins running IIS until the time it stops. This is marked by the application start and end events in the startup file of your application. The request life cycle is the sequence of events that happen every time an HTTP request is handled by our application.The MVC framework handles converting the route data into a concrete controller that can handle requests. After the controller has been created, the next major step is Action Execution. A component called the action invoker finds and selects an appropriate Action method to invoke the controller.
After our action result has been prepared, the next stage triggers, which is Result Execution. MVC separates declaring the result from executing the result. If the result is a view type, the View Engine will be called and it's responsible for finding and rending our view. If the result is not a view, the action result will execute on its own. This Result Execution is what generates an actual response to the original HTTP request.

### What is Razor View Engine?
Razor View engine is a markup syntax which helps us to write HTML and server-side code in web pages using C#. It is a server-side markup language however it is not at all a programming language.
Razor is a templating engine and ASP.NET MVC has implemented a view engine which allows us to use Razor inside of an MVC application to produce HTML.

### What you mean by Routing in MVC?
In MVC, routing is a process of mapping the browser request to the controller action and return response back. Each MVC application has default routing for the default HomeController. We can set custom routing for newly created controller.

### What is Layout in MVC?
Layouts are used in MVC to provide a consistent look and feel on all the pages of our application. It is the same as defining the Master Pages but MVC provides some more functionalities.

### What ConfigureServices() method does in Startup.cs?
The ConfigureServices method is a public method on your Startup class that takes an IServiceCollection instance as a parameter and optionally returns an IServiceProvider. The ConfigureServices method is called before Configure. This is important, because some features like ASP.NET MVC require certain services to be added in ConfigureServices before they can be wired up to the request pipeline.

### What Configure() method does in Startup.cs?
The Configure method is used to specify how the ASP.NET application will respond to individual HTTP requests. At its simplest, you can configure every request to receive the same response. However, most real-world applications require more functionality than this. Your Configure method must accept an IApplicationBuilder parameter. Additional services, like IHostingEnvironment and ILoggerFactory may also be specified, in which case these services will be injected by the server if they are available. Each Use extension method adds middleware to the request pipeline. For instance, the UseMvc extension method adds the routing middleware to the request pipeline and configures MVC as the default handler.

### What is wwwroot folder in ASP.NET Core?
By default, the wwwroot folder in the ASP.NET Core project is treated as a web root folder. Static files can be stored in any folder under the web root and accessed with a relative path to that root.

### What’s the usage of [InternalsVisibleTo] attribute? What are pros and cons of it?
The InternalsVisibleTo attribute is a well-known attribute for testing assemblies. The internal methods of an assembly become visible to the test project. This allows you to test the internal methods without using reflection, so your tests are more maintainable.

## Object Relational Mapping, Entity Framework

### What is an ORM? What are benefits, when to use?
Object-relational mapping is a programming technique that supports the conversion of incompatible types in object-oriented programming languages, specifically between a data store and programming objects. You can use an ORM framework to persist model objects to a relational database and retrieve them, and the ORM framework will take care of converting the data between the two otherwise incompatible states. 

    Productivity: The data access code is usually a significant portion of a typical application, and the time needed to write that code can be a significant portion of the overall development schedule. When using an ORM tool, the amount of code is unlikely to be reduced-in fact, it might even go up-but the ORM tool generates 100% of the data access code automatically based on the data model you define, in mere moments.

    Application design: A good ORM tool designed by very experienced software architects will implement effective design patterns that almost force you to use good programming practices in an application. This can help support a clean separation of concerns and independent development that allows parallel, simultaneous development of application layers.

    Code Reuse: If you create a class library to generate a separate DLL for the ORM-generated data access code, you can easily reuse the data objects in a variety of applications. This way, each of the applications that use the class library need have no data access code at all.

    Application Maintainability: All of the code generated by the ORM is presumably well-tested, so you usually don't need to worry about testing it extensively. Obviously you need to make sure that the code does what you need, but a widely used ORM is likely to have code banged on by many developers at all skill levels. Over the long term, you can refactor the database schema or the model definition without affecting how the application uses the data objects.

### What is Entity Framework? What are the advantages, limitations?
Entity framework is an ORM tool. It is good for data accessing and it provides a lot of benefits, however we should consider its performance for huge enterprise applications.

Advantages of Entity Framework
    It provides auto generated code
    It reduce development time
    It reduce development cost
    It enables developers to visually design models and mapping of database
    It provides capability of programming a conceptual model.
    It provides unique syntax (LINQ) for all object queries whether it is database or not
    It allow multiple conceptual models to mapped to a single storage schema

Disadvantages of Entity Framework
    Lazy loading is the main drawbacks of EF
    Its syntax is complicated
    Its logical schema is not able to understand business entities and relation among each other
    Logical schema of database is not capable of using certain parts of application
    Need to handle data in nontraditional way
    It does not work if we change any schema of the database. We need to update the schema on the solution.
    It is not good for huge domain model.

All in all we can say entity frameworks are good for small range of applications. But if we overcome the drawbacks of EF it will be perfect for any type of applications.

### What is lazy loading?
Lazy loading (also called on-demand loading) is an optimization technique for the online content, be it a website or a web app.
Instead of loading the entire web page and rendering it to the user in one go as in bulk loading, the concept of lazy loading assists in loading only the required section and delays the remaining, until it is needed by the user.

### What is the difference between code first and DB first approach?
In Code First approach, entities or classes are created first with the primary focus on the domain of an application. You can start creating classes and required properties, without designing the database that matches the entities. Then the Entity Framework creates the tables and database accordingly and when the code is run, the database is created.

In Database First approach, database and the related tables are created first. After that, you can create an entity data models using database. It is easier to create a database, as there are multiple options are available by using graphical user interfaces.

### What is a migration script?
Migrations are the version control for your database, allowing your team to easily modify and share the application’s database schema. Basically, you affect the way the data gets stored! This alteration can be as simple as adding or removing a column to a table, or a complex refactoring task such as splitting tables or changing column properties.Migration scripts are customizable SQL scripts created by user through franewroks containing any specific configuration changes, or overrides that need to be executed before or after applying an object change from source control, or they can be executed instead of a change. 

    Automated Migration Script — this is a script generated by a synchronization tool such as SQL Compare and normally checked, and perhaps altered, by a developer.

    Manual Migration Script — this is a script written by a database programmer. Sometimes it is impossible for a tool to create a migration script that will preserve the data in the correct place. Although it knows what the ‘before’ and ‘after’ versions of the database look like, there is sometimes ambiguity regarding the correct transition path.

### What is a navigation property?
A navigation property is an optional property on an entity type that allows for navigation from one end of an association to the other end. Unlike other properties, navigation properties do not carry data.

### Name 3 different attributes used in EF Core, what can they do for you?
Key Attribute - The Key attribute marks the property as the Primary Key. This will override the default Primary Key. 
DatabaseGenerated - You can disable/enable the ->identity<- on the numeric column by using the DatabaseGenerated attribute.
 [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
 [MaxLength(500)] - Configuring a maximum length provides a hint to the database provider about the appropriate column data type to choose for a given property. Maximum length only applies to array data types, such as string and byte[].