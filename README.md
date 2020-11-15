# Fitness Tracker
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Website that displays all employees and is able to search through and change the DOM dynamically.

<!-- ![Image of Webstite](public/assets/images/web.png) -->

### Table of Contents

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Questions](#questions)


## Usage
 
To use the application, simply click on the deployed link. 
The deployed link will be posted shortly.

## Process

### Creating a React App

To create a react app, open an integrated terminal and run the following code.

```bash
npx create-react-app appName
```

After creating the app, many files and directories will be instantiated.

### App.js

Within return statement in App.js, call components the program may implement to place elements into the DOM.

### Components

There were three main components to this program.
1. The Search Bar
2. The Table
3. The Component changing the table

#### The Search Bar

The Search Bar could be created by implementing a form and input. Whenever anything was inputted or deleted from the search bar, an onChange was called task the third component to change the table.

#### The Table

The table could created by implementing the built in HTML tag of table.
Using react props, different keys can be called to fill in the DOM.
*the code below shows implementation of this*

```js
<td>{props.keyName}</td>
```

#### Changing the Table

This component contains most of the workload of the program.
Unlike the previous components, this one will extend React's Component.
By extending, the program will be able to make use of state. State declares keys corresponding values or data types that will be referenced throughout the class.

After declaring the state, several functions will be made.

First is the componentDidMount function. This function will be called as soon as the page is ready to be loaded in. In this function, the list of employees instantiated in the state will be filled by the API. For the sake of demonstration, the api was taken from [randomuser.me](randomuser.me).

The next function identifies the onChange called within the search bar. 
*The code is shown below*

```js
    handleInputChange(event) {
        event.preventDefault();
        let { search } = this.state.search;
        console.log(search);
        const lowerCaseSearch = search.toLowerCase();
        console.log(lowerCaseSearch);
        let { employees } = this.state.employees;
        console.log(employees);
        let filteredEmployees = employees.filter(employee => {
           return(
                employee.name.first.toLowerCase.includes(lowerCaseSearch)||employee.name.laste.toLowerCase.includes(lowerCaseSearch)
           );
        });
    }
```

A basic understanding of this code is to first take the input from the search bar and make it lower case, for consistency. By running a filter on the array of employees from the state and comparing to the search parameter, a new array of filtered employees is created.

## License

This Project is licensed under the MIT License

## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JS)
* [REACT](https://developer.mozilla.org/en-US/docs/Web/React)


## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)


## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    

