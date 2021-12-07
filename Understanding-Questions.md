# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event listener calls the handler function
* The handler function calls the dispatch function 
* The dispatch function calls the addOne function
* The addOne function returns a case which is called as a reducer action
* The reducer action executes the change of the reducer state
* The reducer state is updated and reflected in the DOM
...

* TotalDisplay shows the total plus 1.
