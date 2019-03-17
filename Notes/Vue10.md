# Lifecycle Hooks

In a Vue instance, Vue gives us some hooks where we can insert our own functionality at diferent times in the instance’s lifecycle. In order to hook into the lifecycle, we'll need to define functions on an instance which Vue calls at the appropriate time for each hook.


The created() hook is run when an instance has just been created, where the instance data and events are active, and when the instance can be accessed. Since the created() hook is run the moment an instance has been created but before the DOM has been mounted/rendered, it’s often the ideal moment to fetch data that is needed to populate the instance.

The mounted() hook is run after the instance has been mounted and where
the rendered DOM can be accessed.

What does mounting mean?

Vue tracks and makes changes to a virtual representation of nodes in the DOM tree before patching those changes on to the actual DOM. This in-memory view that Vue maintains and manages for us is often known as the Virtual DOM.  Vue uses the virtual DOM to maintain/manage and track the changes in an application in a “less-expensive” way than directly tracking the changes being made on the actual DOM.
When we talk about mounting, we're talking about the process of converting the virtual elements into actual DOM elements that are placed in the DOM by Vue.


The updated() hook gets fired whenever a data change is made that causes the instance to be updated/re-rendered.

The updated() hook behaves like the watch property but for the entire instance. It’s important to know that for specific state changes, the watch property (or oftentimes computed properties) should always be used instead.

The destroyed() hook is fired after an instance has been fully destroyed.
This is the last hook that’s fired in the lifecycle and at this moment the instance event listeners, child instances and directives are all removed.
