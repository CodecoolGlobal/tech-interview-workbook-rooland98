# What are arrays?  What are some of the methods on arrays?
Arrays are ordered data structures, reference types in JS. They are dynamic as they dont have a fixed size. Arrays are used to store multiple values. Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.

# What is JSON?
Javascript object notation is a lightweight data format to transfer and store data. We usually use JSON to transfer data between server and client side

# When is a component re-rendered?
In react a component is re-rendered whenever the state of the component changes. In the UI whenever the state of a component is changed anywhere, the whole UI re-renders.

# What kind of CSS selectors do you know?

* universal selector

normal selectors:
    class,id,tag selector
combined selectors:
    select elements based on their child parent location in the dom for Ex div>ul>li{}
pseudo class selector:
    select element based on a state like hover,active,ink
    selector:link
pseudo element selector:
    select a part of an element like first letter or line of an element, inster content before after the content of an element

# What are the primitive data types in Javascript?  What makes them primitive?
Primitive data types are int bigint string null undefined symbol bool. Primitive data types are not objects, they dont have methods or properties.

# What does the `&&` `||` `!` and `!!` operators do?

true && true -> true true && false -> false
true || false -> true false || false -> false

# What is Event Propagation and how can you prevent it?
Event propagation is the mechanism of how an event travels the dom. If an event is triggered it will first travel from the root node to the element which triggered the event, thats the capturing phase, then the event travels back to the root , that is the bubbling phase. event.stopPropagation() cant stop the event from propagating.

# What does `event.preventDefault()` do?
Prevent the default behaviour of some elements in the DOM.
for ex submit of a form

# What is `event.target` and `event.currentTarget`?

event.target -> points to the element on which the event was triggered
event.currentTarget -> points to the element on which the propagation is happening

# What is variable scope?
Variable scoping in JS is the context of code where the variable is declared and can be accessed.

# What are the falsy values in JavaScript?
'' "" `` , null, 0, 0n, -0, false, undefined, NaN   

# How to check if a value is falsy?

if(!variable){
    if the variable is false it will evaluate true
}

# What does "use strict" do?

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.Strict mode changes previously accepted "bad syntax" into real errors.

# What's the value of `this` in JavaScript?

The this keyword refers to an object, but to which object , depends on where the this is invoked.
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.

# What are Higher Order Functions?
Functions can be considered higher order if they can recieve functions as parameters and can return functions as values.

# Why are functions called First-class Objects in Javascript?
In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.

# What are Classes?
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

# What is Object Destructuring?

destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

# What are the data types supported by JavaScript? What are the primitive/ reference data types?

reference data types are objects , which has methods and properties. Reference type data when are not stored in variables, but that variable is a pointer to a place in memory where it is stored. 

# What does the `new` keyword do?

new keyword is used to instantiate objects and classes in JS 

# What is a prompt box?
It is a pop up box, there are 3 type alert,confirm,prompt.

# What is asynchronous programming?

In asynchronous programming we use the await keyword to let the user continue his work , but run some process in the background. when await keyword is used , the program wil lawait the execution of a function. 

# What is a Promise?

A JavaScript Promise object contains both the producing code and calls to the consuming code.When the producing code obtains the result, it should call one of the two callbacks: Success, rejected.
A JavaScript Promise object can be: Pending, Fulfilled, Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.

# List some different ways an HTML element can be accessed in a JavaScript code.
Get HTML element by Id - document.getElementById('id')
Get HTML element by className- document.getElementByClassName('id')
Get HTML element by Name - document.getElementByName('id')
Get HTML element by tagName - document.getElementTagName('id')
Get HTML element by CSS Selector - querySelector('')/querySelectorAll('')

# What are the variable naming conventions in JavaScript?
Camelcase, clear explaining names.
JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or an underscore character. They cant start with boolean or break.JS is case sensitive.Name and name are different variables

# What are Exports & Imports?

The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement. The value of an imported binding is subject to change in the module that exports it. When a module updates the value of a binding that it exports, the update will be visible in its imported value.
Exported modules are in strict mode whether you declare them as such or not. The export statement cannot be used in embedded scripts. default export - 1 per module , normal export - more per module

# Explain Implicit Type Coercion.

Implicit type conversion happens in the background without the dev seeing it.

# What is recursion?

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. Using a recursive algorithm, certain problems can be solved quite easily.

# What is the rest parameter and spread operator?

JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.
The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.
rest : function myBio(firstName, lastName, ...otherInfo)
spread : const myName = "Oluwatobi Sofela";
console.log([...myName]);
[ "O", "l", "u", "w", "a", "t", "o", "b", "i", " ", "S", "o", "f", "e", "l", "a" ]

# What is JavaScript?
Javascript is a scripting language whic is used to develop web based applications. 

# What is a named Function?

Named Functions: In JavaScript, named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function. 

# How to create an Object in JavaScript?

# What is the use of a constructor function?
Create a single object, using an object literal. const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Create a single object, with the keyword new. const person = new Object();

# What are arrow functions?

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
There are differences between arrow functions and traditional functions, as well as some limitations:

Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
Arrow functions don't have access to the new.target keyword.
Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
Arrow functions cannot be used as constructors.
Arrow functions cannot use yield, within its body.

# Which built in method is used for…
-returning character at the specified index?
    chatAt(index)
-combining two strings?
    .concat('')
-calling a function for every element in an array?
    foreach
-returning the length of a string?
    string.Length
-removing the last element from an array?
    array.prototype.pop()
-adding new element to the end of the array?
    array.prototype.push()
-reversing the order of the elements in array?
    array.reverse()
-sosrting elements?
    array.sort()
-returning a substring?
    substring(indexStart, indexEnd)
    slice(start:end)
-converting text to lower/upper case?
    .toUpperCase()
    .toLowerCase()
-converting number to string datatype?
    .toString()

# What is negative infinity?
The negative infinity in JavaScript is a constant value which is used to represent a value which is the lowest available.

# What kind of pop-up dialogs can you open from JavaScript?
JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

# What does a ternary operator do?

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

# Can you tell us when would you utilize CSS float?

The CSS float property controls the positioning and formatting of content on the page. Its most common use is to wrap text around images. However, you can use the float property to wrap any inline elements around a defined HTML element, including lists, paragraphs, divs, spans, tables, iframes, and blockquotes.In CSS, the float property specifies how an element should float. The floated element will be removed from the normal flow of the page, but it will remain part of the flow — meaning, the element will be shifted to the left or right until it touches the edge of its container or another floated element.
This is the key difference between the float property and the absolute position property in CSS.

# Explain what are the difference between Get and Post?

The GET and POST are two different types of HTTP requests. GET is used for viewing something, without changing it, while POST is used for changing something. For example, a search page should use GET to get data while a form that changes your password should use POST. Essentially GET is used to retrieve remote data, and POST is used to insert/update remote data.

GET retrieves a representation of the specified resource and include all required data in the URL. You should be able to request the same URL over and over harmlessly. Note that GET should not be used for operations that cause side-effects, such as using it for taking actions in web applications. One reason for this is that GET may be used arbitrarily by robots or crawlers, which should not need to consider the side effects that a request should cause.

POST is for writing data, submits data to be processed (e.g. from an HTML form) to the identified resource. This may result in the creation of a new resource or the updates of existing resources or both. It may have side effects use the same request several times because will likely result in multiple writes. Browsers typically give you warnings about this. POST is not secure, the data is included in the body of the request instead of the URL but it is trivially simple to view/edit.

# What Are The New Features Introduced In HTML5?

# Explain the difference between classes and IDs in CSS?
The class selector selects elements with a specific class attribute. It matches all the HTML elements based on the contents of their class attribute. The . symbol, along with the class name, is used to select the desired class.

The ID selector matches an element based on the value of its id attribute. In order for the element to be selected, its ID attribute must exactly match the value given in the selector. The # symbol and the id of the HTML element name are used to select the desired element.

# What do you understand by the universal sector?
A universal selector is a selector that matches any element type's name instead of selecting elements of a particular type. 

Example: 

<style>    
* {    
   color: blue;    
   font-size: 10px;    
}     
</style>    

# Tell us about the use of the ruleset.
The ruleset is used for the identification of selectors, which can be attached with other selectors. The two parts of a ruleset are:

Declaration block: contains one or more semicolon-separated declarations
Sector: indicates the HTML element needed to be styled

# What are the elements of the CSS Box Model?
The CSS box model defines the layout and design of CSS elements. The elements are content (like text and images, padding (the area around content), border (the area around padding), and margin (the area around the border). 

# Differentiate between CSS3 and CSS2.
The main difference between CSS3 and CSS2 is that CSS divides different sections into modules and supports many browsers. It also contains new General Sibling Combinators responsible for matching similar elements. 

# How can CSS be integrated into an HTML page?
There are three ways of integrating CSS into HTML: using style tags in the head section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag. 

# What is meant by RGB stream?
RGB represents colors in CSS. The three streams are namely Red, Green, and Blue. The intensity of colors is represented using numbers 0 to 256. This allows CSS to have a spectrum of visible colors.

# Define z-index.
This is one of the most frequently asked CSS interview questions. Z-index is used to specify the stack order of elements that overlap each other. Its default value is zero and can take both negative and positive values. A higher z-index value is stacked above the lower index element. It takes the following values- auto, number, initial, and inherit. 

# What are the benefits of CSS Sprites?
With CSS sprites, loading multiple images is not an issue. 

Blinking is not seen. 
Advanced downloading of assets does not take place until needed. 

# How can you target h3 and h2 with the same styling?
Multiple elements can be targeted by separating with a comma:

h2, h3 {color: red;}

# Name media types allowed by CSS.
The different media types allowed by CSS are: 

speech
audio
visual
tactile media
continuous or paged media
grip media or bitmap
interactive media

# How can you use CSS to control image repetition?
The background-repeat property is used to control the image. Example:

h3 {

background-repeat: none;

 }

# Tell us about the property used for image scroll controlling?
The background-attachment property is used to set whether the background image is fixed or it scrolls with the rest of the page. Example for a fixed background-image:

body {

  background-image: url(‘url_of_image’);

  background-repeat: no-repeat;

  background-attachment: fixed;

}

# Name some font-related CSS attributes. 
The font-related attributes are Font- style, variant, weight, family, size, etc. 

# Define contextual selectors.
In CSS, contextual selectors allow developers to specify styles of different parts of the document. Styles can be assigned directly to specific HTML tags or create independent classes and assign tags to them. 

# Explain responsive web design. 
Responsive Design is a web page creation approach that uses flexible images, flexible layouts, and CSS media queries. This design approach aims to build web pages that detect the orientation and screen size of the visitors so that the layout can be changed accordingly.  

# Tell us about the general CSS nomenclature.
In CSS, the styling commands are written in value and property fashion. CSS includes a system terminator- semicolon. The entire style is wrapped in curly braces and attached to the selector. This creates a style sheet that can be applied to an HTML page.

# When should you use translate () instead of absolute positioning?
Translate is a CSS transform value. On changing opacity or transform, browser reflow or repaint is not triggered. Transform requires the browser to create a GPU layer for elements but using the CPU changes absolutes positioning properties. Translate () is more efficient and results in shorter paint times. On using translate (), element occupies original space, unlike in changing absolute positioning. 

# Name different ways to position some aspects in CSS. 
The positioning property specifies the positioning method type. The five different position values are fixed, static, absolute, sticky, and relative. The elements are positioned using top, left, right, and bottom properties. These properties need to be set first, and they work depending on position value. 

# What are mixins?
A mixin is similar to a function block of code returning a single value—mixin output lines of Sass code that directly compiles into CSS styles. At the same time, the function returns a value that becomes the value for a CSS property or something that can be passed to another mixin.

# How can you optimize the webpage for prints?
Identify and control 'content areas' of the website. A website generally has a footer, header, sidebar, navbar, and main content area. Most of the work is done by controlling the content area. So, conquer print media without changing the website's integrity by using page breaks, creating a stylesheet for print, size your page for print, and avoid unnecessary HTML tables.  

# What is meant by CSS working under the hood?
When a browser displays a document, it combines style information and document content. The document is processed in two stages:

Conversion of HTML and CSS into Document Object Model
DOM displays contents of browser

# Differentiate between the use of ID selector and class selector.
ID Selector:

<style>

{

text-align: right;

color: blue;

}

</style>

CSS class Selector: 

<style>

.right {

text-align: right;

color: blue;

}

</style>

# Tell us about CSS float property.
The float property of CSS positions an image to the right or left as needed, including text wrapping around it. All properties of elements used before it remain unchanged. 

# What do you understand by pseudo-elements?
Pseudo-elements provide special effects to some selectors. CSS finds use in applying styles in HTML markups. If additional markup or style is not feasible for a document, the pseudo-elements help by allowing extra markup without interfering with the original document. 

# Differentiate between logical and physical tags.
Logical tags mainly focus on content and are older as compared to physical ones. Logical ones do not find much usage in presentation and terms of aesthetics. At the same time, physical ones find application in presentation. 

# How media types in CSS work?
The four types of media properties are print, speech, and screen. Example of using print-media type: 

@media print {

h2 {

background-color: blue;

 }

}

# Explain CSS specificity.
CSS specificity is a rank or score that decides style declaration to be used to an element. ID selectors have high specificity, while universal selector * has low specificity. The four CSS categories that authorize the selector's specificity level are IDs, inline style, elements/pseudo-elements, and classes and attributes. 

# What are the position states in CSS?
The four-position states in CSS are relative, static, absolute, and fixed. The default position state is static. 

# Differentiate between absolute and relative in CSS. 
The main difference is that relative is used for the same tag in CSS. If we write right:20 px, then padding shifts 20 px in the right. Whereas absolute is relative to the non-static parent, i.e., if we write right:20 px, the result will be 20 px far from the right edge of the parent element.  