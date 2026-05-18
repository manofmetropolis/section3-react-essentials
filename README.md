# section3-react-essentials
Working code for Section 3 of React Course
From beginning to end, creating a React project using essentials like Components, JSX, Props, State and More. Let's do this.

* Building user interfaces with Components
* Using, sharing, outputting data
* Handling user evets
* Building interactive UIs with State

# COMPONENTS
- Reusable UI building blocks. React apps are built by combining components. It's truly the core concept of working in React. ALL react apps use components.
- Components really just wrap HTML, CSS and necessary JS and control part of the UI.
- Split up complex UIs into smaller, reusable, easier to manage parts. Really helpful to be able to make a change in one place and have it apply in multiple places.
- Related code can be stored closely together.
- Vastly simplifies the process and separates concerns. This is crucial to good code.

* Whenever you want to start coding and seeing it like, hit npm run dev.

# Let's get started
- The app.jsx file uses non-standard JS to allow devs to describe and crate HTML elements by writing HTML markup in JS files. Craxy, right?
- Browsers actually do not support JSX. So it's transformed by the browser into code that DOES work.

# Function rules
- Function must start with capital letter
- Must return renderable content

# PROPS (This is where I get goofy)
- Used to pass data into components and then use that data.

# OBJECT DESTRUCTURING
We can target the different properites of the incoming object by name.

# Good Project File Structure
- It's best practice to atomize the files, storing different components in different files.
- OK to put more than one together if they're SUPER closely related.

# THE SPECIAL CHILDREN PROP

# Reacting to Events
- Don't interact with the DOM directly. Let React do it.
- For the button at least: Add an onClick prop (works on lots of different things, though.)

# React needs to be told to reevaluate whether to execute functions again.
- Updating with a regular variable doesn't work.
- If you want something to change, you gots to use state.
- I had trouble with state last time.
- A function, provided by React, called useState, must be imported and called inside of React functions.