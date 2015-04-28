# **Documentation version 1.0**

---

## **Foreword**

This is not exactly a traditional documentation, but rather an explanation of how this
project is structured along with some musings as to how each of its parts functions. 

The core thing to remember is the purpose of each file. There are a lot of analogies 
to explain how HTML, CSS, & JavaScript come together to form a website or the like,
but I feel the most intuitive uses the human body:

**HTML:** *The Bones*. HTML (hypertext mark-up language) gives the a website its structure.
It serves as the foundation that CSS and JavasScript build on and is a cousin of XML. Before
there was CSS & JavaScript there was HTML. 

**CSS:** *The Skin*. CSS (cascading style sheets) gives a website its look and feel. This 
is what prevents your really cool website from looking like one of those ugly things
from the late 90's. Yuck. 

**JS:** *The Muscle*. JavaScript is the programming. It works by picking up events, such 
as clicking on, hovering on to, or hovering off of an HTML element. Once an event is 
bound to an HTML element, it can trigger a function. Generally, a function can manipulate
*almost* anything in the HTML or CSS of the webpage.

**A Quick Note on Functions**
What do these functions do? This may seem like a silly question, but JavaScript functions
can do a very diverse number of things that can't easily be done in Python and are flat out
impossible in R (unless your using Shiney, which uses JavaScript to do its front-end bidding.)
Here are some examples in the form of common use cases:

* Send data entered into a form on a web page to a server.

* Parse data using a regex and then alter a web pages CSS to indicate whether the data enter
-ed is valid. For example, make a form field green if your password and re-entered passwords 
match and contain both a number and a symbol.

* Change CSS and alter the entire look and feel of a website. Yes! If you wanted to make 
the MyApnea.org website flash back and forth from its day to night looks, you could do that
with a JavaScript timer.

* Animate things! Although these days we generally use CSS to do animations you can, in
fact, use JavaScript to do this.

Combine many functions, and you can stream videos (like YouTube) and music (like Soundcloud), 
create an email client application (like Gmail), or even visualize live data streams on a 
network. Almost all modern web applications have JavaScript at the core of their user
interface. 

---
## **index.html**



---
## **interactive.css**


---
## **interactive.js**

### **A Walk Through A JS File (using interactive.js)**

JavaScript is a prototype based language. Although there are some minor differences,
for our purpose, a prototype is a class; similar to those in Java or Python. JavaScript
(as you probably know) is object-oriented too, so in principle it's a lot like Python 
and almost nothing like R (which occupies the functional programming paradigm.)

In the first comment in the file (marked by the /* ... */), I've defined the parameters 
I'll be passing as an argument to the prototype. Note that comments in JavaScript are
inactive; it is not like Python where document definitions (using the """ comment """ 
format) actually have a functional purpose. The purpose of the @ params: { arguments } 
syntax is essentially to indicate the following:

* The prototype accepts one argument, an object (like a Python dictionary), indicated by
the curly braces {}

* Inside this object is the default data we'll be using to initialize the Interactive
prototype. Note that in describing a function or prototype we call fields of this data
parameters, but when we call a function or instatiate a prototype we call them arguments. 

* Each key in the object is represented by the actual key name, the data type needed, and
a short description of what it is

So in short, although this comment is not strictly necessary, it's a nice way to communicate
what data and data-types the Interactive prototype needs to function correctly. Above, you 
saw one way to create a comment section (/* ...some multi-lined comment */), but there is 
another, more common, way that is similar to the '#' comment in Python: 

~~~~javascript
// some single line comment
~~~~

Moving on, above the comment we see the following code:

~~~~javascript
var Interactive = function (config) {
	this.init(config);
};
~~~~

This small code block is one of the most important pieces of code in the interactive and can
illustrate a few core concepts. I'll walk you through what each part does:


1. **Scope:** The 'var' keyword defines a variable in a *local scope*. In Python you control 
scope by indenting code blocks, but this is not the case in JavaScript. JavaScript is (for 
the most part) whitespace agnostic and instead scope is controlled by the 'var' keyword. What
the 'var' keyword is saying is this: 'whatever new variable name comes after me is in the 
child scope of the current scope.' I realize this may be confusing, but it's very important, 
so here is an example: 

> *Let's say we have a house and that this house, like most houses, has a kitchen. Further,*
> *this kitchen (among many things) has a stove. In this house also lives a person and this*
> *person, being a good chef, has fingers (still.) If we're talking about scope we might look*
> *at the situation like this:*
> 
> 1. There are two parent scopes; the house and the person. Neither belongs to the other; they
> are completely seperate entities.
> 
> 2. For the house, we have a child scope, the kitchen.
> 
> 3. For the kitchen, we have another child, the stove. 
> 
> 4. Being in the kitchen and the house, the stove is part of the house and the kitchen. The 
> stove knows that both the kitchen (its parent) and the house (its grandparent) exist.
> 
> 5. Most importantly, however, is the concept that only the kitchen is aware that the stove 
> exists. The house does not; it only knows of the kitchen itself and not the stove, fridge, 
> oven, sink, etc. 
> 
> 6. Lastly, this house and the person live in the world. We would call this world the 
> 'global scope', of which the house and the person themselves are children.
> 
> *If we wanted to codify such a set of relationships, hardcoded, it might look something*
> *like this:*

~~~~javascript
var House 	= {
	kitchen		: {
		stove		: {
 
 		}
 	}
}
 
//Similarly...
var Person = {
 	fingers: [
 		1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 	]
}
 
//The person has 10 fingers!
 
~~~~

> *A more extensible version of the same code might be something like this:*
 
~~~~javascript
var House 	= {
 	rooms		: [
 		{
 			name: "bedroom",
 			contains: [
 				"bed",
 				"bedside table",
 				"lamp",
 				"book"
 			]
 		},
 		{
 			name: "kitchen",
 			contains: [
 				"stove",
 				"fridge",
 				"oven",
 				"dishwasher"
 			]
 		}
 	],
 	size: {
 		measurement: 1200,
 		unit: "square feet"
 	}
}
 
//And for a person...
var Person 	= {
 	parts 		: [
 		{
 			name: "hand",
 			count: 2,
 			children: [
 				{
 					name: "fingers",
 					count: 5
 				}
 			]
 		},
 		{
 			name: "leg",
 			count: 2,
 			children: []
 		},
 	]
} 
~~~~

> Did you catch it? You may be asking yourself, where did you define the 'global scope'. Well,
> to answer, you astute observer, it need not be defined. Traditionally in JavaScript, the
> global scope is the browser's window. When we create a House or Person object in the global
> scope, it automatically attaches itself to the window object. So, using the example above, 
> if you wanted to call the Person object in the browsers JavaScript console, you could type 
> the following:

~~~~javascript
// Calling the Person variable would print the object assigned to it to the console
Person

> *outputs the Person object*

// The following is exactly the same command, just more explicit
window.Person

> *outputs the Person object*

// Let's say we want to figure out what parts this person has, this is how we may
// access the more extensible version of the Person object
for (var i = 0; i < Person.parts.length; i++) {
	console.log("A person has " + Person.parts[i].count + " " + Person.parts[i].name + "s!");
}

> "A person has 2 hands!"
> "A person has 2 legs!"

// The above section of code will look familiar if you've worked with Java;
// note that the console.log() function is similar to the printf() function
// in Java or C. The console object has other functions too, such as
// console.debug() and console.trace(), but they're really just different
// flavors of a similar function.
~~~~

2. **Assignment & Functions:** After the var, we name our variable: Interactive. This is going 
to be the core variable where the entire interactive lives. Using this variable, we can 
reference the interactive as needed. This variable is assigned to a function (the function key
word in JavaScript is synonymous with the def key word in Python.) This function accepts one 
argument, named 'config', which is the object we described in the previouly discussed commented
section. We then see an opening curly brace, which you may recognize from Java as the start of 
a closure. Closures (beginning with an open curly brace '{' and ending with a closing curly 
brace '}') work in conjunction with the key word 'var' to delimit where a given scope begins 
and ends. You can see this illustrated in the Person and House code examples above. 

3. **Calling a Function:** Inside of the closure we see the code 'javascript this.init(config);'
This code does one thing: it takes the config parameter we handed into the Interactive function
as an argument and, again, passes it to the child scope of the Interactive. With the config
now within the scope of the init function, the data from the config is made available to the
Interactive prototype. 

4. **Semicolons:** One of the most confusing aspects to beginners is often where to put a 
semicolon. It's actually fairly simple. There are two main rules, and the block of code 
illustrates them both:

* After an assignment, as in:

~~~~javascript
// An assignment
var Interactive = function (config) { ... };
~~~~

* And after a function call:

~~~~javascript
// A function call
this.init(config);
~~~~

### **Python to JavaScript Syntax Cheat Sheet**



---
