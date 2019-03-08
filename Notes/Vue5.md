# List rendering with V-for

List rendering is one of the most commonly used practices in front-end
web development. Dynamic list rendering allows us to present a series of
similarly grouped information in a concise and friendly format to the user. In almost every web application we use, we can see lists of content in numerous areas of the app.


Though this data is dynamically obtained, the way this data is shown remains the same. This is in part due to rendering lists of reusable elements.

The v-for directive is used to render a list of items based on a data source.
The directive can be used on a template element and requires a specific syntax along the lines of item in items, where items is a data collection and item is an alias for every element that is being iterated upon:

      v-for = "_item_ in _items_"

      Where _item_ is alias
      & _items_ is the data collection

Vue uses the key attribute to create unique bindings for each node’s identity      
