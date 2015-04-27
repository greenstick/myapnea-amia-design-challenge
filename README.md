# **Documentation version 1.0**
---
## **index.html**


---
## **interactive.css**


---
## **interactive.js**

### **A Walk Through A JS File**

JavaScript is a prototype based language. Although there are some minor differences,
for our purpose, a prototype is a class; similar to those in Java or Python. JavaScript
(as you probably know) is object-oriented too, so in principle it's a lot like Python 
and almost nothing like R (which occupies the functional programming paradigm.)

In the first comment in the file (marked by the /* ... */), I've defined the parameters 
I'll be passing as an argument to the prototype. Note that comments in JavaScript are
inactive; it is not like Python where document definitions (using the """ comment """ 
format) actually have a functional purpose. The purpose of the \@params { } syntax is 
essentially to indicate the following:

* The prototype accepts one argument, an object (like a Python dictionary), indicated by
the curly braces {}

* Inside this object is the default data we'll be using to initialize the Interactive
prototype

* Each key in the object is represented by the actual key name, the data type needed, and
a short description of what it is

So in short, although this comment is not strictly necessary, it's a nice way to communicate
what data and data-types the Interactive prototype needs to function correctly. Above, you 
saw one way to create a comment section (/* ...some multi-lined comment */), but there is 
another, more common, way that is similar to the '#' comment in Python: 

// some single line comment

Moving on, above the comment we see the following code:

~~~~javascript
var Interactive = function (config) {
	this.init(config);
};
~~~~

This small code block is one of the most important pieces of code in the interactive and can
illustrate a few core concepts. I'll walk you through what each part does:


1. **Scope:** The 'var' keyword defines a local scope. In Python you control scope by indent
-ing code blocks, but this is not the case in JavaScript. JavaScript is (for the most part) 
whitespace agnostic and scope is instead controlled by the 'var' keyword. What the 'var' 
keyword is saying is this: 'whatever variable name comes after me is in the child scope of 
the current scope.' I realize this may be confusing, but it's very important, so here is an 
example: 

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
 			name: "legs",
 			count: 2,
 			children: []
 		},
 	]
} 
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

---
