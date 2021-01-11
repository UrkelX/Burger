# Burger App

## Description
This project uses node, handlebars, SQL to allow users to add, eat, and delete burgers from their list(belly). 

## Table of Contents

* [Installation](#installation)

* [Code](#code)

* [Usage](#usage)

* [Contributions](#contributions)

* [Tests](#tests)

* [License](#license)

* [Contact](#contact)

## Installation
To generate run app you must install:
* express
* express-handlebars
* mysql

## Code
```
$(function() {
  $(".eat").on("click", function(event) {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newDevoured");

    let newEaten = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEaten,
    }).then(
      function() {
        console.log("changed burger to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
```


## Usage

See sample here:
![Eat Bob's Burgers!](https://user-images.githubusercontent.com/70240665/104140851-2dd4c880-5379-11eb-906e-9dd4622f46ff.gif)



## Contributions
Thank you for the support from my TAs, intructor, and classmates. 


## Tests
N/A

## Deployed 
[Heroku](https://whispering-garden-69034.herokuapp.com/)

## License
[MIT License](https://github.com/UrkelX/README_Generator/files/5646505/MIT.txt)


## Contact
GitHub: @[UrkelX](https://github.com/UrkelX)

Email: jordon@blackbirdrevolt.com
