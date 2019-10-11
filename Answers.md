1. What problem does the context API help solve?

**_Context API tries to eliminate prop drilling and be able to pass state._**

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

**_Actions are our functions that do something with the state. we write them and put them in an sctions folders and this helps keep our components dumb ._**

**_Reducers is a functions that filters through the different dispatches with if else statements manipulating the initial state based on the dispatch_**

**_A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it, this is why it is reffered to as the 'single source of truth'._**

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

**_Application state is the main state for the whole app that gets used in multiple components. something like user info getting pulled from an api. component state is state that is only needed for the function of a single component something like the state of a form components._**

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

**_Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object._**

1. What is your favorite state management system you've learned and this sprint? Please explain why!

**_Context api , i like how simple it is_**
