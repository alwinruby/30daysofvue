# Data - Driven Applications

Data in Vue is treated as reactive since modifying data often directly causes the view to update. For every key-value pair we declare in the data property of an instance, the Vue library creates getters and setters pertaining to that property. These setters and getters work under the hood to track the data properties and cause the template to re-render when a change has been made.

Reactive state (i.e. data) is different to how data is handled in React.

React, state should often be treated as __immutable__

Reactive state is one of the key differences that make Vue unique. State (i.e. data) management is often intuitive and easy to understand since modifying state directly causes the view to update.

The reactive nature of data in Vue help facilitates the possibility of building applications in a data-driven manner.

The Mustache Syntax and certain directives will help us in binding all or some of this information to the template. With the help of methods and other inline capabilities, *we can trigger changes to the instance data* which would update the template to the situations we intend to see. This sort of explains the __data-driven mindset__ of how we build our UI.
