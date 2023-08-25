# NoSQL: Social Network API

<br>

![Github MIT licence](https://img.shields.io/badge/license-MIT-limegreen)

![NODE](https://img.shields.io/badge/-Node.js-orange) ![JS](https://img.shields.io/badge/-JS-yellow) ![Exspress](https://img.shields.io/badge/-Express.js-darkred) ![Dotenv](https://img.shields.io/badge/-Dotenv-purple)  ![JSON](https://img.shields.io/badge/JSON-0F2BF2) ![MongoDB](https://img.shields.io/badge/-MongoDB-blue) ![Mongoose](https://img.shields.io/badge/-Mongoose-darkgreen) 

<br>

## Table of Contents


* [Project Description](#project-description)

* [User Story](#user-story)

* [Getting Started](#getting-started)

* [MockUp](#mockup)
 
* [Links](#links)

* [License](#license)

<br>

## Project Description

This project is an API for a social network web application that allows users to share their thoughts, react to a friends thoughts, and create a friend list. 

This project uses Express.js for routing, MongoDB, a NoSQL database, and Mongoose ODM (Object Document Mapper), and JavaScript's timestamp. 

`PLEASE NOTE: This project is not deployed`

<br>

## User Story

AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data


<br>

## Acceptance Criteria

GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


## Getting Started

To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project to your machine by using the "git clone + URL" command. 
3. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code ."). 
4. Install Node.js from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. Install MongoDB from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).
6. Install [Nodemon](https://www.npmjs.com/package/nodemon).
7. Install [Insomnia](https://insomnia.rest/download). 
8. This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". This will install the packages specified in the next section. 

<br>

## Mock-Up

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Alt text](assets/18-nosql-homework-demo-04.gif)



The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Alt text](assets/18-nosql-homework-demo-02.gif)



The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Alt text](assets/18-nosql-homework-demo-03.gif)


In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

<br>

## Links

GitHub Repo Link:   <a href="https://github.com/WHT-RBT/MVC-Tech-Blog.git">GitHub Repo </a>

GitHub Profile Link: <a href="https://github.com/WHT-RBT"> GitHub Profile </a>

<br>

## License

NOTICE: This application is covered under the MIT License
