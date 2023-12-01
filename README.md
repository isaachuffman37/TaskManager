# Overview


This is a web application thst I created using React. It is purely a front-end website, but I wanted there to be some memory of the tasks so that the user did not have to restart every time the page was refreshed. This project helped me do just that. I created a local json-server so that when the user clicks "Add Task", the task information is not only added to the current dictionary, but the program also uses "fetch" to do an API query to the json-server so that it is added to a json file that will save the task information. By using API queries, I am also able to GET, PUT, and DELETE the infromation so that the tasks can be preserved by the json file, but not be displayed on the web app if the user does not want them to be. If the user wants to delete a task from the actual json file, they must presss the delete button in the history section, not the To-Do or Done section. Otherwise the task still exists, it is just no longer displayed.  



The purpose of this addition to my web application was to help me understand a little more about how to integrate API calls in a React environment. I have only used API's in one project before this and have never used REACT before I created this task manager, so there was a lot to learn. I needed to learn how to use an API to preserve and manipulate state as well as familiarize myself with more javaScript functionality when using fetch. I have a better understanding of state, page rendering, and data manipulation through APIs as a result of this project.  


[Software Demo](https://youtu.be/_-X05Rv7Nk8)

# Development Environment

VSCode

JavaScript, React, Node.js, HTML, CSS

# Useful Websites

- [React Documentation](https://react.dev/learn)
- [Fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Free Code Camp JSON-server tutorial](https://www.freecodecamp.org/news/json-server-for-frontend-development/)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Right now this web app does not have the ability to hide the history so that it is always displaying. I want to be able to hide the history until the user clicks on a buttton
- The CSS is not very good right now. The page is not very visually pleasing so I hope to make it more welcoming in the future
- I want to connect a real database to it someday, not just use a json server.
