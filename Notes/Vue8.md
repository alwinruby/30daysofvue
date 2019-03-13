# Methods and Computed Properties


Computed properties are used to handle complex calculations of information that need to be displayed in the view.

What difference is there to using a computed property or having a method instead return a value?

      The key difference to using computed properties is that computed properties are cached based on the dependencies they depend on.

Computed properties are useful because as long as the dependant data property ( message ) remains constant (i.e. unchanged)


| Methods | Computed Properties |
| ------------- | ------------- |
| Functions that are meant to be called  | Intended to compute existing data  |
| Can have parameters passed in  | Shouldn't have parameters passed in  |
| Re-evaluated every time they are called  | Cached based on their dependencies  |
| Not meant to be a property  | Should be used as a property  |

A good rule of thumb to follow:

    Use methods when responding to changes (e.g. clicking a button, submitting a form, etc.) or to run explicit functionality change within the instance (e.g. have a method be called from a lifecycle hook).

    Use computed properties for data manipulation (e.g. create a sorted array from an unsorted array in the instance).
