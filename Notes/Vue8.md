# Methods and Computed Properties


Computed properties are used to handle complex calculations of information that need to be displayed in the view.

What difference is there to using a computed property or having a method instead return a value?

      The key difference to using computed properties is that computed properties are cached based on the dependencies they depend on.

Computed properties are useful because as long as the dependant data property ( message ) remains constant (i.e. unchanged)
