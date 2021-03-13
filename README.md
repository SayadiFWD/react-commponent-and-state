React.js
React is a user interface component libreary.
react interact with DOM using virtual DOM.
In a process called "reconcilition react detects that the state of the app has changed,then it will update the vurtual DOM,taking note of which nodes have changed due to the state change.
Finally,once it knows which node have changed it will only change those specific nodes on the actual DOM.




Intro to React
OVERVIEW
React is a UI library that is used in various forms to create complex, rich user interfaces. Facebook had a need to build something that could power their user experiences in such a way that was decoupled and unconcerned when and where the data was received.

React is one of the most popular UI libraries today, and in terms of Single Page Applications many (including the React team) tend to think of the library as the “V” in MVC. That is, the View layer of the Model, View, Controller paradigm. React is a pattern, a mindset, that will help developers that use it, build small, reusable pieces of UI that can be easily put together to make a large scale application.

REACT COMPONENTS AND COMPONENT STATE
Components are the building blocks of React applications. We use components to display some data (often called “state”) to the screen for our users. In this module, we will learn how to build components that can hold state to create a great experience for our end users.

COMPOSING REACT COMPONENTS AND PASSING DATA VIA PROPS
As you build bigger applications, you’ll want to start splitting up your app into smaller pieces so that it is easier to work on and maintain. These small pieces you will build are called components. Components will need to share state, so we will learn how to do this with a helper object called props.

COMPONENT SIDE EFFECTS
Side effects in web apps are very common. It’s important to understand what side effects are so we can handle them properly in our components.

ADVANCED STYLING TECHNIQUES
CSS by itself can be hard to scale in large applications. In this module we will see multiple libraries that have been built to help us style our apps in a lot more scalable way.

React Components and Component States
Web FT36 w/ Gabriel Cabrejas

Web PT21 w/ Emily Seibert

Web PT19 w/ Emily Seibert

Web PT21 w/ Keiran Kozlowski

Web PT16 w/ Dan Frehner


OVERVIEW
React has quickly become one of the most commonly used libraries for building applications today. Because you've now seen some code that allows you to build custom components with so-called vanilla Javascript, you've come to an understanding of how you can use JS to manipulate DOM elements. React is going to take that knowledge you have learned, and abstract away a lot of the document.getElementByClassname syntax. As you'll see later on, your entire application will live within one targeted DOM element. React will handle the rest for you.

Because we have such rich user interfaces today that interact with ever-changing data, users interacting with DOM elements, and lots of animations and events firing, the DOM is certainly doing a lot of work. Imagine an app like Twitter or Facebook that has users clicking all over the place, with data changing and almost instant status updates. For these types of large scale applications, React is very important. Simply put, we need a way to offload a lot of the state (data) that our apps need to use, from the DOM. To keep up with today's demands of the web, we need a way to build applications that can take care of a lot of the work for us.

Lets face it, working with the DOM API is hard. The React team recognizes this, so they built a simple engine called the virtual DOM that interacts with the actual DOM for us. We tell the virtual DOM which elements and state (data) to render to the actual DOM, and it will do so. Beyond that, it will "react" when the state (data) in our app changes, and will update the DOM accordingly. All on its own!

In a process called "reconciliation", React will detect that the state of the app has changed. Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. This takes a lot of pressure off of our browsers and it's why React is as powerful as it is.

Today, web applications are enormous, complex pieces of software that millions and millions of users interact with simultaneously. React provides a smooth experience for our users, as well as those developing applications.

FOLLOW ALONG
Please read through the 'Try React' tutorial found here and follow along with the documentation there. Take it as far as you'd like. But we'd love for you to come into class on Monday having played around with React and seen some React code.

Read through this portion of the React documentation.
CHALLENGE
In your own, write a paragraph about what ReactJS is and what problems that it tries to solve.

Submit that paragraph to your Team Lead via Slack.


OVERVIEW
Anatomy of a React Component
import React from 'react';

const Intro = () => {
  return (
    <div>
      <h1>Hi Lambda!</h1>
    </div>
  );
};
This is an example of a React "component." A "component" is a pretty loose term to describe a discrete chunk of your site. A header could be a component, for example. Or a footer. Or a hero section, etc. This one's pretty simple, all we're doing is rendering a div with an h1 inside of it.

his is going to generate pretty much what you'd expect.

hi lambda component

So what's so odd about this? Well, we're mixing two different syntaxes here. Part of this block is a regular Javascript function and part is HTML.

Javascript:

const Intro = () => {
  return (
   ...
  );
};
HTML:

    <div>
      <h1>Hi Lambda!</h1>
    </div>
That's weird! You can't do that in JavaScript so what the heck is going on here? We don't need to understand all the details yet, but the basic idea is that the above block only looks like HTML. In actuality, it is something else.

The fake HTML is called JSX and underneath its disguise, it's just a JavaScript object. This is a simplification, but what our example above effectively translates into is something like this.

import React from 'react';

const Intro = () => {
  return (

      {
          type: 'div',
          props: {
              children: {
                  type: 'h1',
                  props: {
                      children: "Hi Lambda!"
                  }
              }
          }
      }

  );
};
So when we return what looks like HTML in a React component, what we're secretly returning is a JavaScript object that describes the kind of HTML we want to make. React is going to figure out how to make it for us later.

It's important to understand early on that a React component is just a regular JavaScript function. We could return an object (sort of) like the one written above, and it would work, but we want to use JSX for a couple of reasons. First, it's easier to read than that big nested object. And second, it's going to allow us to put our application's logic where it belongs: directly next to the thing the logic applies to.

A brief demonstration of React's power
In the above example, we've hardcoded the text of our h1 tag to read Hi Lambda!. But React gives us the ability to control our app's content dynamically. Look at this:

import React from 'react';

const Intro = () => {
  const greeting = "Hi Lambda!";
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};
hi lambda component

Our code changed, but our output is the same. Because we're just in a regular JavaScript function, we're free to declare a variable the way we normally do: const greeting = "Hi Lambda!";

Once we're in our JSX, React gives us the power to escape back into regular JavaScript and refer to that variable by using the curly brackets <h1>{greeting}</h1>.

These curly brakets will evaluate any valid JavaScript expression. So if we change<h1>{greeting}</h1> to <h1>{2 + 2}</h1>

We get:

four

Now you know the underlying mechanism of React. We don't want to have to hardcode the content of our HTML; instead, we want to compute it.

By now some of you are probably thinking, "Computing our markup, isn't that what we learned DOM manipulation for?" and it's a good question.

Why do it this way?
We're going to focus on two major pillars of React's design philosophy for now. The separation of concerns and declarative programming.

Separation of concerns
How can We know the dancer from the dance

In computer programming, "the separation of concerns" refers to a design philosophy that each piece of your code should do one and only one thing. Functions with a lot of moving parts are hard to debug. One large function might be tricky to test. If we can split that function apart into smaller pieces that are easy to test individually, our application will be more robust and easier to understand.

At first glance, it might appear that putting our markup right next to our JavaScript is a violation of this principle, but the React team thinks otherwise. They argue that we can't truly separate a <button> tag from the function the button invokes. Separating the two, one in an HTML file and another in a JavaScript file, isn't a separation of concerns, it's cutting one concern in half and then putting one half in the bedroom and the other half in the garage. It's a headache we don't need.

Consider the difference between this, the way you're used to doing it:

//HTML FILE
<button class="button"></button>

//JS FILE
let button = document.querySelector('.button');
button.addEventListener("click", (data)=>{...logic} )
And the React way:

<button onClick={ () => submitForm(data) } />
I would argue there are a lot more opportunities for something to go wrong in the first approach.

Imperative Programming vs Declarative Programming
We have an array:

let myArray = [1,2,3,4,5];
And we want to iterate over it and double each number. Here are two ways we could go about it.

for (i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] * 2;
}
Or:

const double =  number => number * 2;

myArray.map(double);
The first approach is an example of imperative code, and this is the kind of approach we're most familiar with. There's nothing wrong with imperative code, it's very explicit, and at a lower level, all code is ultimately imperative. The problem with imperative code is it's pretty difficult and in more complex examples, it can be hard to understand what the code does at a glance.

The second approach is an example of declarative code. Instead of telling the computer, step by step, how we want it to do something, we just tell it what we want it to do.

myArray.map(double)

"Map over my array and double everything inside of it."

With practice, declarative code is easier to parse. This is important because, believe it or not, as a programmer, most of your time isn't spent writing code. It's spent reading other people's code and trying to understand what it does. If you can grasp this distinction, and appreciate its value, congratulations. You now understand the basis of functional programming, the programming paradigm that React is modeled after.

So now we know the very basics of what React does and why it does it this way. In the next objective, we're going to introduce one of the single most important concepts in programming: state.

FOLLOW ALONG
Let's build a component that displays an image. This is how we would do that.

import React from "react";
function App() {
  return (
    <div className="App">
      <img
        src="https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png"
        alt="lightbulb"
      />
    </div>
  );
}
Notice how we have className instead of class in our JSX? That is because JSX is just JavaScript, and class is a reserved word in JS.

Now, one more trick we can do with JSX. We can evaluate JavaScript expressions. So we can read variables, run functions, read data from objects or arrays, all kinds of things! To do this, we use curly braces - {}. Here we will use curly braces to render the value of an object property as a header, and then we will evaluate a string variable as the src of the image.

import React from "react";

const image =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
const titleObj = {
  title: "Light Bulb!"
};

function App() {
  return (
    <div className="App">
      <h2>{titleObj.title}</h2> // this evaluates down to the string "Light
      Bulb!"
      <img src={image} alt="lightbulb" /> // this will evaluate down to the image
      url string for the img src
    </div>
  );
}
JSX is so powerful!

CHALLENGE
Start to build out React components from scratch. Have fun with this. Experiment with different elements.


OVERVIEW
You actually already know this, though you may not realize it. If you're at a soccer game, and each team has three goals, you might say that the "state" of the game is "tied." A traffic light has three possible states: red, yellow, and green. Similarly, our applications also have states. If you have a to-do app, it might be said to have a state of "three to-dos, none of which are completed." Upon completing one of the to-dos you've changed the application's state.

To see what this means concretely, let's start with the simplest state possible: a boolean. We'll create an app that displays a light. The light will either be on or off.

FOLLOW ALONG
Let's get some code on the page.

import React from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
This doesn't quite get us where we want to go.

drawing

Our application has the assets we want, but we only want one lightbulb image to show at a time. To achieve this, we're going to have to keep track of its state.

import React, {useState} from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {

  const [lightOn, setLightOn ] = useState();

  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
A couple of things have changed here. First, we're importing the useState hook from the React library so we can use it.

import React, {useState} from "react";

Second, we've got this odd bit of syntax.

const [lightOn, setLightOn ] = useState();

This is the useState hook, and it's fundamental to understanding modern React. If its syntax looks strange to you you're not alone, but we'll get back to why it looks like that later. For now, what you should understand is that while the line may look strange, all it's really doing is declaring two variables the way you normally might. For now, it's okay to imagine that it's doing something real close to this:

let lightOn;
let setLightOn = (value) => {lightOn = value;};
(Note: ignore the discrepancy between the use of const in the hook and let in my example. It's not important for now.)

The sharp-eyed among you might have noticed that lightOn doesn't have a value.
But as you can see, if we were to invoke setLightOn and pass a value in as an argument, we can change the value of lightOn.

setLightOn("sup");
console.log(lightOn); // "sup"
But what if we don't want to have to assign a value to lightOn right away? What if we want that variable to be initialized with a value from the get-go? We can do that.

Let's change:

const [lightOn, setLightOn ] = useState();

To:

const [lightOn, setLightOn ] = useState(false);

Now it's sort of like we're saying this:

let lightOn = false;
let setLightOn = (value) => {lightOn = value;};
In summation the useState hook const [lightOn, setLightOn ] = useState(false); works like this:

lightOn is a variable the value of which is whatever we passed in to useState. In this case, it's value is the boolean primitive false. setLightOn is a function that will change the value of lightOn. We'll also note that I could have named lightOn and setLightOn whatever I wanted. I could've named them peanutButter and jelly if I wanted but that would've made it pretty confusing for someone reading my code to understand what they do.

Recap State
Okay, so what have we learned? We know what state is in an application. We also know how to keep track of a state variable from within a component, we know how to initilize it with a value, and we know how we can change that value. What's missing?

Well for one we still have two light bulbs. We have a state variable initialized and a way to change it, but our lightbulbs don't know it exists. We have to make our lightbulbs aware of what the state is in some way so that they can know what to do when it changes. We're going to need to learn a critically important pattern to make that happen.

WHAT IS CONDITIONAL RENDERING?
Conditional rendering is just a fancy name for a very common pattern in React. We don't want to see both lightbulbs at once. We only want to render one or the other based on some condition. In this case, if the lightOn boolean is set to false we want to see the white lightbulb. If it's set to true we want to see the yellow one. This is a straightforward use-case for the ternary operator in JavaScript.

import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
This is the only part that changed:

    <div className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
A ternary operator acts as a single line if/else statment. This line:

{lightOn === false ? <img src={white} /> : <img src={yellow} />}

It's saying "Is the lightOn state variable set to false? If so render <img src={white} />, otherwise render <img src={yellow} />

Remember this pattern, you'll use it a lot.

So what's the result of this code? Well, let's find out.

drawing

Progress. It's only showing the white bulb. What if we want it to show the yellow one now? Well, remember, our ternary operator is conditionally rendering one lightbulb or the other. It's being told to show the white one if lightOn is set to false, and to show the yellow one if it's true. What happens if we hard code the initial value of lightOn to true?

const [lightOn, setLightOn] = useState(true);

The result?

drawing

Victory is nearly ours. We setup up a condition on which to render one bulb or the other. That condition was based on our application's state. When we forced the state of the application to change what appeared on the page reacted to that change. That's what React is really all about. Your state changes and your application reacts.

The last step is figuring out how to change the state.

Remember our hook from earlier?

const [lightOn, setLightOn] = useState(false);

You'll recall that setLightOn is a function that can change the value of lightOn. Now we just have to find a way to invoke this function.

CHALLENGE
Build a component that holds a person object in state. Display the person's data in the component.


OVERVIEW
You've already used click listeners outside of React, so we're finally going to look at something that feels familiar. To attach a click listener to a react component, we need to use this camel-casing: onClick. This event listener will take in a callback function. There are a couple of "gotchas" with this, but don't worry; we'll describe them below.

FOLLOW ALONG
Now that we know what the click event listener is in React let's put one on our <div>.

Before we talk about the right way to do this, however, I want to show you a couple of wrong ways. I want to do this for two reasons. 1) It will help us think more critically about how React works and 2) You will almost certainly make this mistake at some point, and it'll help to know what to look out for.

So again, this is wrong:

import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={setLightOn} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
This is the relevant line:

<div onClick={setLightOn} className="App">

The reason this is wrong is because setLightOn is expecting an argument. Wewps! Common mistake. Well, no problem we'll just pass it one like so:

<div onClick={setLightOn(false)} className="App">

Now our code looks like this:

import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={setLightOn(false)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
Wewps. Everything broke again. What happened?

Essentially <div onClick={setLightOn(false)} className="App"> is invoking setLightOn(false) over and over again and each invocation is triggering a rerender. We stumbled into an infinite loop. What we meant to write was this.

<div onClick={ ()=> setLightOn(false) } className="App">

See the difference?

// Everything is on fire
<div onClick={ setLightOn(false) } className="App">

// Everything is fine
<div onClick={ ()=> setLightOn(false) } className="App">
The first invokes the function every nanosecond. The second only invokes it when you click the div.

There's one last little tweak we need to make to get our application to work. Try to figure it out for yourselves before reading on.

Make our lightbulb app work
In this case, we're passing false as an argument to setLightOn every time. That means the state will always be false, which means we're only ever going to hit one of our two conditions in our render. Instead of passing false, let's pass the opposite of whatever the state is.

<div onClick={ ()=> setLightOn(!lightOn) } className="App">

The final code looks like this:

import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
And the result?

drawing

It's glorious.

CHALLENGE
Build a counter app that keeps track of how many times you click on a button and displays that count in the component.

Composing React Components
Web FT36 w/ Gabriel Cabrejas

Web PT19 w/ Emily Seibert

Web PT18 w/ Keiran Kozolwski

Web PT16 w/ Dan Frehner

Web PT15 w/ Emily Seibert


OVERVIEW
When JavaScript was first introduced, inserting it into a web application meant writing the code inside of a script tag inside of an HTML file. The script ran sequentially, that is, from top to bottom. Back then, if you wanted to use the same code in another project, you had to copy and paste it. There were also performance issues - namely, functions and variables were all global - if you weren't careful, you could quickly see the trouble with declarations holding unexpected values. Eventually, including a <src> attribute did allow for more reusability, but it was still dependant on order and still globally scoped.

Then, a little over ten years ago, developers used module patterns like IIFE (Immediately Invoked Function Expression, pronounced 'iffy'). This function runs as soon as it is defined. Take the seemingly normal looking code below. On closer inspection, you’ll notice the enclosing parentheses wrapping the anonymous function, as well as another set of calling parentheses, which results in the immediate execution of the code. While this keeps the global space tidy and grants privacy to any inner variables, it’s somewhat fragile and none too eloquent.

(function() {
  //lexically enclosed function statement
})();
You can read more about the history of programming modules and IIFE here

Server side JS
The release of Node.js in 2009 meant that JavaScript could now execute outside of the browser. With the adoption of a common JavaScript specified standard library known as CommonJS, we now have defined terms for sending data to and from our file systems. These advances were a complete game-changer for JavaScript developers, but all still relied heavily on third-party bundlers and transpilers to address common issues. Tools like webpack and rollup would compile packs of modules and assign any missing dependencies before sending them off to the browser. Transpilers such as Babel handle translating source code for the browser and convert the latest features of ES6 (any not supported in the browser) into compatible ES5. While handy, all of these programs require downloading, updating, and configuring.

JS modules (ECMAScript modules)
This brings us to today. The first standardized syntax for using modules in JavaScript. Where past methods relied on specific functions or third-party libraries, with the latest version of JS, we can now export functions, data, components from our files by merely prefixing the export keyword. Then, when we want to bring such features into our file, we use the import keyword, the name of the exported item, and specify where it's located. And that's basically it. No dependencies or configurations, everything is ready to go right out of the box.

FOLLOW ALONG
Let's go through some examples. If you open a new codesandbox and create a few different files, you can try this out.

export exports a single named function that can now be imported into another module using the import keyword

export const emphasize = str => {
  return str.toUpperCase();
};
When export default is specified (either inline or at the end of the file) the declaration that follows is exported by default and additional modules will need to be exported (and imported) by name.

const emphasize = str => {
  return str.toUpperCase();
};

export default emphasize;
Multiple items exported from one module can then either be imported into separate modules or can all be extracted for use with object destructuring in the import declaration (see Import examples below).

When set up properly, this pattern is incredibly efficient; the majority of errors being syntactical, or from renaming or changing your file structure. Another advantage of modules is that top-level variables do not pollute the global object. In addition to connecting our project files, bringing in a library or an external component to our project is a matter of downloading it with our CLI and then directly importing it to our file. Fonts, loaders, middleware, pretty much anything you need. We won't go into any detail about any of these libraries right now but refer to the docs for download commands and directions for implementation. For now, let's take a better look at the import and export line syntax.

Importing a file/module starts with declaring the import keyword followed by the name of the import, then the from keyword followed by the module specifier. The module specifier usually is a file path or an npm module name. We will be working with file paths today.

Import examples

A single named export
import { a } from './directory/fileName'
Multiple named exports
import { item1, item2, item3 } from './directory/items.js'
Exported as default
import Component from './folderName/Component.js'
File path specification

The prefixing './' on the file URL points to a unique location of your file system. It indicates the file for import is exported elsewhere in the current directory. When the file is read, the loader knows where it is located in the directory tree. Adding an additional dot ('../') to the path will indicate a location one directory higher. Use the table below to reference quick file location indicators.

File Location	Path prefix
Current Directory	./
Parent Directory	../
Parent of Parent Dir	../../
CHALLENGE
Using the codesandbox you've been trying this out in, make a React component in one file that is exported as the default export, and see if you can import it and render it in the App component. This is a good chance to try it out on your own before we do it together later.


OVERVIEW
What are props?
When we want to pass information held on state inside one component to another component, we pass them as props. We'll learn plenty about the how and why of props, but for now, the important thing to remember is that we never make changes to props data - props are read-only. This helps ensure that our data flow remains clean and organized. This way, we know exactly where changes are made to our application. And if something goes wrong, we can find the issue and fix it. Imagine an application with data changes occurring in every file. How easy would it be to understand how it worked, and how long would it take to locate a problem with the code?

Managing state and props within components
A stateful component is one that holds state data, either as an object placed inside the constructor function, or a function component that includes the .useState function made available in the React v16.8 release (the one with hooks). We'll be learning about function components for now; you'll see class components later in the curriculum.

When data comes into our application, it is loaded and stored on state, either in a centralized component specifically for state management, or a component rendering other components. When data is consumed in multiple components, it is probably best to centralize that data in state in a top-level component. Other data that is specific to a certain component can live locally, just inside that component. Components rendered in a stateful component can receive state data via a props attribute. Here, it can be sent down on the props object to the child component, and there we can access it just like we would with most any other object. However, if we decide we want to make any change to our data we do not change the prop data itself. Instead, we send back what changes we should make to our state holding component; often, stored changes are sent back up to the parent container as enclosed information in a called function. You'll learn plenty more about sending data in the coming days and weeks. For now, let's take a closer look at class components and function components, and how they differ for holding state.

FOLLOW ALONG
Take the following example of data we'll be passing, a simple user object holding two key/value pairs.

const user = { name: "Hubert", age: 27 };
Next, we save our user object to a state variable using the state hook you learned in the previous lesson. Then, we declare a named prop object inside the JSX in our return statement and set it equal to the state variable. The naming convention may appear confusing at first glance, but try to understand which 'user' name is the props object, and which is referencing the state variable. It makes sense for them to have the same name because the data is identical. That said, their intended use is not. Once data is set as props data, it is no longer state data and should never be mutated. If you wish to change the value of the props data, it must be done using the provided setUser function.

const App = () => {
  const [user, setUser] = useState({ name: "Hubert", age: 27 });

  return <UserInfo user={user} />;
};
Below, the function component UserInfo receives the state variable as props from its parent component. The props are passed in as an object argument and then sent down as a named "props" object to the child component (of UserInfo) seen later as DisplayName.

When the props data is passed as a JSX attribute on DisplayName, it is set to a variable and passed inside curly braces as object data. The named variable is now set as an object (containing our user data) on our props object and is now reachable from inside the component.

const UserInfo = (props) => {
    return (
        <div>
            <DisplayName user={props.user} />
        <div>
    )
}
DisplayName receives the props object as an argument and returns a React element where we pass the selected data to display by first referencing props -> then our named props object -> then the attribute name of the data we want to display; in this case "Hubert".

const DisplayName = props => {
    return (
        <div>
            <h2>Hello, my name is {props.user.name}.</>
        <div>
    )
}
The above code block will render "Hello, my name is Hubert"

So why do we pass information around in this way? A few reasons are listed below.

Control. As we learned with modules, when we break our components down into smaller functions, we gain greater control over what we display and how it works. By keeping state in one of a few select components and passing as props, we minimize the risk of making unintended changes to our state data.
Readability. Separate files are easy to keep in order, and make it easier for other developers to read through our code, know where our state is held, and where it's being sent. The easier your code is to read and understand, the more likely someone is to ask you write more it for them.
Maintenance. If we want to make changes, we can find components quickly, and working in files that only manage one or two different aspects of our application is a much easier task than scrolling through hundreds of lines of code! Also, this way, we can isolate any problems that come up and debug faster.
Reusability. This is huge! Now we have reusable components, and they can render any data that we pass through, so long as it matches to type on our object. And with a few modifications, we render additional data if we added to our object. Or we could even pass in an array of hundreds of objects and render the information contained on each one. This would only require a few additional lines of code.
CHALLENGE
Create a new component to render the user's age and pass it to UserInfo.

Stretch goal - Replace the single user object with an array containing several user objects with name and age properties, and any other information you would like to display. Use a map function to iterate over the props data in UserInfo and return a single DisplayUser component. Pass the iterated object data to each newly created component and render the data dynamically in your JSX.


OVERVIEW
Now that we know all about functional components and how to pass arguments (props) through to those components and render those props data to the screen using JSX, we're going to learn all about nesting components that may rely on one or another prop value from a parent component.﻿

Let's take a look at the following code example and learn how we can achieve this idea of nesting components:

const App = props => {
  return (
    <div>
      <h2>Hello world from, {props.name}</h2>
      <div>
        <h4>My best friend in this world is: {props.bestFriend}</h4>
        <p>My favorite book is: {props.favoriteBook}</p>
      </div>
    </div>
  );
}
This component is doing some simple rendering of DOM elements. It only relies on 3 props, so it's not super sophisticated, but it makes for some cumbersome programming. Meaning, here we essentially have a component nested inside of another component. So lets start by breaking out the inner DOM elements that's purpose is to render the best-friend data into it's own component.

const BestFriend = props => {
  return (
    <div>
      <h4>My best friend in this world is: {props.bestFriend}</h4>
      <p>My favorite book is: {props.favoriteBook}</p>
    </div>
  );
};
While this is good, we really should make it so that BestFriend can be reused and nested. Now, when we use this component inside of our App component, we can pass data to it as props.

```js
const App = () => {
return (

);
};
Now our component looks a little cleaner. But we can take it one step further. Notice that our `<p/>` tag could also be (if we so wanted) it's very own component. For demonstration purposes of why this is neat, we'll go ahead and make it happen.
js
const Book = props =>

My favorite book is: {props.favoriteBook}

;
And to use it nested within the `BestFriend` component
js
const BestFriend = props => {
return (
My best friends in this world is: {props.bestFriend}

);
};
Now things are getting a little ridiculous, but this demonstration shows that react can pass props down as far as you'd like. We recommend not nesting components super deep because, in the long run, this can cause issues when attempting to work with the props that you're passing down as well. 

## Follow Along

Now let's build a few container components that each render their children and grandchildren. Let's build out an ancestry tree that shows off the generations of the Simpsons.

Here is our data set: 
js
const simpsonData = {
name: "Orville Simpson",
spouse: "Yuma Hickman",
children: [
{
name: "Abraham Simpson",
spouse: "Mona",
children: [
{
name: "Homer Simpson",
spouse: "Marge Bouvier",
children: [
{
name: "Bart Simpson"
},
{
name: "Lisa Simpson"
},
{
name: "Maggie Simpson"
}
]
}
]
}
]
};

Let's start by building out our `Parent Component`. Luckily our Parent components will be pretty straightforward.
js
const Parent = props => {
return

Parent: {props.name}
;
};
Now that we have our data and component, we can mount up this component inside of a container component. 
js

Should mount an `h1` with `Abraham Simpson's` name printed to the screen. Now let's tweak our Parent component to be able to conditionally mount a child component if a `child` prop is on the `props object`. To achieve this we'll need a `Ternary Operator` that checks if the `child` prop is defined. If it is, we want to mount a `Child` component; if not, we want to mount `null`.
js
const Parent = props => {
return (
Parent: {props.name}
{props.child ? : null}

);
};
Now we have to build out our child component so that we can properly use this one. 
js
const Child = props => {
return (
CHILD: {PROPS.NAME}
{props.grandChild ? : null}

);
};
Notice we have the same behavior here as we did in the Parent. We'll mount a `<GrandChild />` component if the correct prop exists. So now we need to build out `GrandChild`.
js
const GrandChild = props => {
return (
{props.name}

);
};
So now that everything is put together let's see how we can mount all these components up correctly. 
js

```

Ok, so our data set isn't the greatest, and the way this app works is entirely stringent upon specific data formatting, but it gets the idea across.

Your goal now is to try and extend this to GreatGreatGrandchild to be able to render out Bart, Lisa, and Maggie to the screen!

A good place to start would be right here.

You can use CodeSandbox to build Live ReactJS applications. I recommend logging in through their Github OAuth portal. Have fun!

CHALLENGE
Create an object that represents a generational tree of your family similar to the Simpsons Object found in our follow along example. Keep it simple. Build out a few nested components that demonstrate the ability to pass data and conditionally render components if certain props are available.


OVERVIEW
We're going to build a button component that, when clicked, returns a button and renders a new app component. The button component will have an array of colors represented by string hex values that we can use to describe our dynamic data. We'll need to pass our state variable from app down via props to our button component. Also, we need to pass along a function that takes in an array and calls our setter function. While hooks make it easy to bring this functionality directly into any component, we'll build this app and pass it for demonstrative purposes. In case you want to build additional components, you'll be all set to go ahead and update their color as well. Let's begin.

Since we'll be using hooks, the first thing we need to is import the useState function to our file as named import.

import React, { useState } from "react";
Next call useState at the top of your app function component and set its value to a destructed array containing the state variable and its setter function, in this example, color and setColor, respectively. Set the default value to the hex value for the color 'white'. Then render our soon to be built Button component inside App and pass it our state variable as props.

function App() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className="App">
      <Button color={color} />
    </div>
  );
}
Now let's write the function that our button will accept. We'll name this function changeColor and have it take an array as its parameter. In our function statement, we call setColor and pass our array parameter using bracket notation to select a random index of the data given in the array dynamically. You probably recognize most of the code, but all that matters is it evaluates to random whole number from 0 to the max-index of the given array. Don't forget to pass the function to button component as props; otherwise, it won't be there when you try to access it.

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const changeColor = array => {
    setColor(array[Math.floor(Math.random() * array.length)]);
  };

  return (
    <div className="App">
      <Button color={color} changeColor={changeColor} />
    </div>
  );
}
Alright, now all we need is the button. We'll go ahead and build it in the same file to keep things simple. Below our app component declares the button function component. While it's accessible anywhere in the file, we want to also place our array of colors inside of Button in case we decide to put it in its own file later. Next, return a <button> element and give a style and onClick attribute. Here is where we'll pass our, now dynamic, props. In the style tag set background to props.color to represent our state value back in App. Set the onClick attribute to an anonymous arrow function that returns props.changeColor() and pass in our colors array as an argument.

const Button = props => {
  const colors = [
    "#FFBAAA",
    "#27576B",
    "#D47F6A",
    "#AA7539",
    "#003D19",
    "#6E91A1",
    "#552D00"
  ];

  return (
    <button
      style={{ background: props.color, height: "50px", width: "200px" }}
      onClick={() => props.changeColor(colors)}
    >
      Click Me!
    </button>
  );
};
Now click away and watch the magic happen! The button is now dynamic because our setter function can set the color variable the button receives. Now, this might not be the most practical example, and you may not spend your career building buttons that randomly change color (although dark mode is pretty great), but think about the processes that led us here. We use functions, variables, and an array of data. What else could you do with these things to make changes to components? What changes could you make to the existing so instead of random color, the user can cycle through the array in order? The point is, once you have the patterns down, you're really just writing Javascript.

Composing Side Effects
Web FT36 w/ Gabriel Cabrejas

Web PT19 w/ Emily Seibert

Web PT18 w/ Keiran Kozolwski

Web PT15 w/ Emily Seibert

Web FT29 w/ Christina Gorton


OVERVIEW
What are "side effects"? A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don't require cleanup and those that do require cleanup. We will discuss effects which require cleanup later in this module.

A React component without side effects is called a pure component. A component is considered pure if it always renders the same output for the same state and props. Similarly, a side effect is something that can cause a component to return a different output for the same state and props. Pure components don't have any side effects. React offers us tools for managing side effects so we can avoid bugs and inconsistencies in our app. The effect hook (useEffect()) is one of those.

The Effect Hook
The effect hook tells React that a component needs to run, or execute, some side effect. This hook takes in two parameters. The first is a callback function where we can run the side effect. Let's take a look at an effect hook that is handling a console.log side effect:

useEffect(() => {
  console.log("Hello from the effect hook!");
});
Used inside the component, puts the effect function inside the component's function scope. This gives it access to state, props, and local variables. So we could also do something like this:

useEffect(() => {
  console.log(props.someProp, stateValueOne);
});
Here are some basic examples of other common side effects we might see in React Components:

// Making API calls
const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});

// Manipulating the DOM
const [count, setCount] = useState();
useEffect(() => {
  document.title = `Count is: ${count}`;
});
useEffect(() => {
  console.log("The component has mounted.");
}, []);

OVERVIEW
In the examples we saw above, the effect hooks used were not synced with any particular pieces of data. Because of that, each of those hooks would run every single time a piece of state or a prop changed. With a lot of side effects, this would be somewhat concerning from a performance standpoint. Or, in the worst-case scenarios, where a side effect causes the state to change, we would find ourselves in an infinite loop and eventually crash our browser 😳.

Luckily we can sync our side effects with state and props changes. We do this by passing in a dependency array as the second argument to the effect hook. Note that this argument is optional. If we don't pass in an array after the callback function, the effect will fire after every change. Let's take a look at a data fetch that sets state in our component.

const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});
When this effect fires, it calls either setUser or setError. That means that one of those pieces of state will change, which would, in turn, cause the effect to fire again, causing the state to change, firing the effect again, and placing us in an infinite loop!

If you look closely at the effect hook, you'll notice that this effect also relies on another piece of data. That is props.userId. As we think about the component that this hook would be in, we can imagine that we only want this effect to fire if that userId prop changes, right? We definitely don't want it to fire if user or error change! So, that means that we want this effect to sync up with props.userId only - nothing else. Let's go ahead and add a dependency array argument with that particular dependency in the array.

const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
}, [props.userId]); // Dependency array added
Now this effect will fire when and only when props.userId changes!

But wait, wouldn't we want this effect to fire when the component first mounts? Yes, definitely. Even with a dependency array added to the effect hook, it will fire when the component mounts, and then only fire when the given dependencies change.

This brings up one last thought. How can we add an effect to our component that we only want to fire off once as the component mounts, and not any other times during the life of the component? Essentially, we would want to tell the effect hook to not synchronize that particular effect with any state/props changes, right? We can solve this by adding the dependency array to the effect hook, but leaving it blank. Let's set up an effect hook that runs a data fetch side effect that we don't want to sync with any state/props changes.

const [data, setData] = useState();
const [error, setError] = useState();
useEffect(() => {
  getInitialData()
    .then(res => setData(res.data))
    .catch(err => setError(err.response));
}, []);
Summary
Using a dependency array as the second argument in the effect hook, we can tell it with which state or props the effect should be synced. This is a handy guide to use as you begin the build the mental model for this principle:

… the question is "with which state and props does this effect synchronize with"

useEffect(fn); // all state and props
useEffect(fn, []); // no state or props
useEffect(fn, [these, states, props]);

OVERVIEW
Now that we know how to sync effects with data, and we know how to avoid infinite loops, let's take a more in-depth look at fetching data using an effect hook. There are a couple of possible situations we want to look at when fetching data in a component. First is writing an effect that is not synced with any state or props so that it only fetches data once as the component mounts. Next, is writing an effect that makes an API call that could fire again during the life of the component, depending on a piece of state or a prop.

FOLLOW ALONG
Fetching Data when a Component Mounts
Let's fetch a random dog image to render when this component mounts. We'll do this using the "dogs" API. Open a new sandbox and follow along.

The first thing we'll do is get our App component ready with some state and the proper JSX:

function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
Next, we'll add the effect hook (minus the data fetch logic) with an empty dependency array.

function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {}, []); // Not synced with any data, so this effect only fires once

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
Now we can add the fetch logic. We'll use Axios here as we've previously learned.

function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      // Which we then set to state
      .then(res => setDogPic(res.data.message))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
See a working example of the completed example here.

FETCHING DATA MULTIPLE TIMES WITH SYNCED EFFECT HOOKS
Often, we will want to make the same fetch call multiple times during the life of a component, all based on when certain data changes. It can be tempting to write a function outside of the effect hook that calls an API, then call that function from the effect hook during the mounting stage, and then subsequently call it from a handler function later. Like this:

  const [data, setData] = useState();
  const [query, setQuery] = useState("react");

  // This effect will only fire once when the component mounts
  useEffect(() => {
    fetchData(); // calls an external function that is dependent on state or props ⚠️
  }, []);

  // external function that relies on (or is dependent on) query
  const fetchData = () => {
    axios.get("some/api/endpoint/" + query)
      .then(res => setData(res.data));
  }

  const handleChange = e => {
    setQuery(e.target.value)
    fetchData(); // calls same external function after setting query
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      ...
    </>
  );
}
This is not safe, as the effect hook calls fetchData which relies on query. According to the React docs

It’s difficult to remember which props or state are used by functions outside of the effect. This is why usually you’ll want to declare functions needed by an effect inside of it. Then it’s easy to see what values from the component scope that effect depends on.

Let's put the fetchData function inside the effect hook, and sync the hook with query:

  const [data, setData] = useState();
  const [query, setQuery] = useState("react");

  // This effect will fire when the component mounts, AND each time "query" is updated! ✅
  useEffect(() => {
    const fetchData = () => {
      axios.get("some/api/endpoint/" + query)
        .then(res => setData(res.data));
    }

    fetchData(); // calls an external function
  }, [query]);


  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      ...
    </>
  );
}
So, to examine this more closely, we will fetch data from the algolia API based on a query string typed into an input. Again, open a new sandbox to follow along.

To start out, we will have our state and JSX ready.

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
Next, we will add the effect hook, synchronizing the hook to the query state, tied into the input.

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {}, [query]); // when query changes, fire this effect again

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
Finally, we will add the fetch logic.

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=" + query)
        .then(res => setData(result.data));
    };

    fetchData();
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
See the final sandbox here.


OVERVIEW
Perhaps you've created a subscription to a chat API to give a live chat functionality to your app. Or, more simply, you've added an event listener to the DOM. These are both functions that need to be "cleaned up" when the component is unmounting, so we don't cause an unnecessary memory leak. Thankfully, the Effect Hook has a built-in way to handle cleanups.

To clean up an effect, we return a function from the effect hook's callback function, like this:

useEffect(() => {
  // We write our desired effect as before.
  console.log("The Effect Hook has run.");
  // Returning a function will tell React that you want this
  // code to run when the component unmounts or re-renders
  return () => console.log("The Effect Hook has been cleaned up.");
});
The returned function is called when the component is unmounting, giving us a place to clean up subscriptions and event listeners.

FOLLOW ALONG
Let's add an event listener to a function that listens for the mouse position. When the mouse moves, the event listener will update some state with the new mouse position, and the component will render the mouse position state to the DOM. Follow along in a new sandbox.

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {}, []); // We only want to create the event listener once, so this effect will only fire when the component mounts

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
Now add the event listener with the event listener's callback function.

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add an event listener
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
  }, []);

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
Finally, return a function from the effect hook to clean up the event listener.

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    // the function returned here will remove, or "clean up", the event listener
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
See a working example of the completed example here.

CHALLENGE
Try this out again, but this time with the resize event listener. That listener will listen for the browser to change size. So if you set your state with window.innerHeight and window.innerWidth, then listen for the resizing event to happen and update your state with those same properties, you should be able to render the browser size continuously.

Advanced Styling Techniques
Web FT36 w/ Gabriel Cabrejas

Web PT18 w/ Keiran Kozlowski

Web PT15 w/ Emily Seibert

Web FT29 w/ Christina Gorton

Web FT28 w/ Christina Gorton


OVERVIEW
You can build a React app from scratch with just an HTML page and some JavaScript, but that method is not scalable. If you want to use the latest Javascript features, and pre-processors, and all the fun toys that make our jobs fun, then you will have to do a lot of configuration upfront. However, this gets very cumbersome very quickly. After a while, React developers started talking about how this was causing JavaScript fatigue - a term that has many many articles written on it. There was just so much to do to set up every single React project.

Understanding this frustration, the React team built a tool called Create React App that sets up our entire app for us. It gives us all the "boilerplate," or necessary configuration and setup code, that we need for a React app so we can start building the app, and not spend hours on configurations.

We run this tool in the command prompt/terminal. You can run Create React App (CRA) with yarn, npm, or even download it and run it on its own. Since everyone's computer is different and not everyone's will work with just one of these tools, we will learn a couple of different methods. Find which one works best on your machine, and use that throughout your time here.

FOLLOW ALONG
Previously, global installs of create-react-app were common and you may still see this suggested in older tutorials.

This is no longer recommended. Here is the documentation of the new process, and it is also explained below.

You can list your global packages by running npm list -g --depth=0. If you have create-react-app installed globally, uninstall it with npm uninstall -g create-react-app to prevent npm from running the outdated version of create-react-app installed on your computer.

We will now use the npx utility, which was introduced in npm v. 5.2.0. Here, animals is the name of the React project you want to build:

npx create-react-app animals --use-npm
As soon as you run the command successfully, CRA gets to work installing all necessary files, folders, and dependencies using npm. It will even initialize a git repository and perform an initial commit. Once the process completes (it might take a while!) you should see a Happy hacking! success message in your terminal.

If npx does not work for you, you would need to install create-react-app globally and then execute it from the command line:

npm install -g create-react-app
create-react-app animals --use-npm
Starting your React App
Now we want to fire the app up:

// move into the project folder
cd animals

// start up the project
npm start
The start command here will launch the bundler (Webpack) and a transcompiler (Babel's Webpack loader), and spin up a dev server so you can visit your project at the default http://localhost:3000. This server will also listen for you to make changes to your project and refresh the browser page every time you save your files in your editor. This process is called "hot reloading."

Some other commands you can run here are as follows.

npm test will launch tests with the testing library jest.

npm run build will launch the bundler and transcompiler to produce a minified bundle appropriate for deployment.

npm run eject will unhide all the configuration and dependencies that CRA-generated react apps use under the hood. No way back from this, so don't do it unless you are sure you need to! Ejecting is usually NOT necessary for toy apps or small prototypes, but often inevitable when building real-world apps.

Project dependencies
Learn to install additional packages. We can use npm to install any other JavaScript packages as dependencies besides react and react-dom (which you'll find already among the project's dependencies inside package.json).

Example of installing and uninstalling the moment library as a project dependency:

npm install moment
npm uninstall moment
Example of installing and uninstalling the chai library as a dev project dependency:

npm install -D chai
npm uninstall chai
Dev dependencies are packages you as a developer need for performing specific operations like spinning up the app in your laptop, creating a bundle, or running tests. Non-dev or "regular" dependencies are the packages imported and consumed directly by your application code.

Study the file structure. Your file structure (as of this CRA release) will look like this:
file-struct

You should have a main index.js file in the src, which is mounting our App component to the root div found in the index.html file which lives in public. Notice how we're importing in App.js from inside of index.js.

Inside of src/App.js, we can see a class component. This approach is helpful because, in a typical React app, this main App.js component is used to hold onto state and sort of acts as the data control center for the rest of our application. Of course, you can build out many other components but app's main purpose is to be the one single component that we pass to ReactDOM.render to compose our application.

Add your own code! Inside of App.js, make modifications to make this component "yours."
Then, go ahead and run npm start to bundle the app and boot up our web developer server. This is a step that you're pretty familiar with at this point. You should be able to tell if something is wrong pretty quickly. Now that your server is up and running, head to localhost:3000 to see if you can inspect with the react-dev-tools in the browser.

CHALLENGE
Use CRA to build a new app. Explore the app. Make changes and see what happens. Share what you discover with your team lead!


OVERVIEW
This lesson is all about getting you up and running with Reactstrap, the de-facto Bootstrap Styling library for React Components.

What's great about this library is that you have some pre-built components that are already styled out for you using the Bootstrap styling library. So not only do you get a chance to use the Bootstrap styling library, but you also get interactive styled components that you can use for interactivity throughout your react application.

Let's figure out how to get this all installed and start playing around with it. If you head over to the documentation, you'll find that the installation process is pretty darn easy.

npm install reactstrap bootstrap
Notice that we're installing BOTH Reactstrap and Bootstrap here. Reactstrap is the component library that uses Bootstrap under the hood. So you'll need both. To get the stylesheet included to your React Application, you can either use the script tag option or, my preferred choice, import the bootstrap library into your index.js file.

import 'bootstrap/dist/css/bootstrap.min.css';
Adding that line to your index.js file will make the bootstrap style sheet available. Now how do we use the React Strap component library? Well, it's as simple as any other node package we're using. Wherever you want to include any of your Reactstrap components, you'll have to explicitly import them into any component that you'd like to use them in.

import React from 'react';
import { Alert } from 'reactstrap';
That Alert component is now available for use like any other component that you've worked with/built on your own. And we'll use it as such.

<Alert color="primary">
  This is a primary alert — check it out!
</Alert>
This example comes straight from the docs, and of course, there is a bit more to it than that. So we'll dive into an example and have you all follow along with me right now.

FOLLOW ALONG
We're going to learn how to get this package installed into a react application from Create React App.

Step 1 Build your application
run npx create-react-app reactstrap-project --use-npm
or if you have CRA installed globally run create-react-app reactstrap-project --use-npm
cd into your project and run run npm start to start your webpack-dev-server
navigate to localhost:3000 to see your app
Step 2 installing Reactstrap
inside the root of your reactstrap-project run npm install reactstrap bootstrap to get both bootstrap and reactstrap installed
Step 3 configuring your index.js file to use the Global bootstrap.css stylesheet
inside of the index.js file add import 'bootstrap/dist/css/bootstrap.min.css';
This will install the bootstrap styling lib globally for your project.
CHALLENGE
Use Create React App to build a project from the ground up.

Include the Reactstrap, and bootstrap libraries using npm
Build out a Todo App using the styled components only provided to you by Reactstrap
Feel free to use your previous Todo Project as a reference.

OVERVIEW
Styled Components is a library for writing CSS in our JS files. As mentioned in the article above, it's not that the idea of having HTML or CSS written in JS is bad, it's more that the implementation isn't properly implemented for either. React introduced JSX as a better tool for writing HTML in JS, and now we have great libraries to write CSS in JS.

To get started with styled-components we run npm install styled-components. And that's it! Now you're ready to roll! We can import it into our js files, and start building components.

Now that I have installed styled-components Let's look at how you can use them.

First, import the styled default object from styled-components . This gives you access to every property on that object. Each property is a React component that will print out whatever property you reference as a DOM element.

import styled from 'styled-components'
// div
const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p``;

// section
const StyledSection = styled.section``;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;

// etc.....
Hopefully, you're starting to get the point. You'll notice that I'm using that fancy template literal syntax. That's because each one of the properties found on the styled objects are actually methods. In JS, we can pass in string arguments using string literals.

FOLLOW ALONG
Link to codesandbox from the video to follow along

Lets build out div component
To import styled-components, add import styled from 'styled-components'; to your js file. Then we will use styled.div to create a new component. Look at how we set this up, then we'll talk about the funny syntax:

import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

function SomeComponent() {
  return (
    <div className="wrapper">
      <h1>Hello From the Home Component</h1>
    </div>
  );
}

export default SomeComponent;
We have created a component called WrapperDiv that is going to take the place of the .wrapper div. We have passed two css properties and values - width and height. But what is up with the backtick syntax?

From their docs: "This unusual backtick syntax is a new JavaScript feature called a tagged template literal. You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks!"

So we are just invoking a function! And when we invoke this function, we are passing a string with our styles to it. Under the hood, styled-components is going to render a div with a funny looking class name, and apply the styles that we passed to it. Now we can take our new component, and put it into the JSX.

import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

function SomeComponent() {
  return (
    <WrapperDiv>
      <h1>Hello From the Home Component</h1>
    </WrapperDiv>
  );
}

export default SomeComponent;
There's more…
While this is all really cool, it seems like a little too much work if that is all we are gaining from style-components, right? Until we realize that there is so much more we can do! How about passing in props to change the color of buttons?

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function SomeComponent() {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

export default SomeComponent;
drawing

Note that inside the ${} we are running a function that takes in props, and returns the correct background color based on props.type. This has endless possibilities!

So we just created a single, reusable <Button /> component that will change colors based on what we pass to the type prop! But wait… there's more!!! Let's create a "base" Button component, then create a TomatoButton component that extends some extra styles to it (this example is straight out of the docs)!

import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function SomeComponent() {
  return (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);

export default SomeComponent;
drawing

(You may have noticed that we are invoking a function, passing in a component, and it is returning a new component with added functionality… styled is an HOC!!!!)

Now we're talkin! With this, and so much more that we can learn from the styled-components docs, we can move styling into our JS, create a lot of dynamic reusable components, and we could even create our own style library, simply and quickly, full of components that can be plugged in anywhere!

CHALLENGE
Take your Todo APP that you built out last week, and apply the principles you've learned here today to style that app. Make it look nice and pretty! Share your newly polished app with your peers in the #show_it_off channel!