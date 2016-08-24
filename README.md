#Project 2 - <i>Via Media</i>

## Overview

####Live Site: [Heroku](https://floating-escarpment-94518.herokuapp.com/)

This project is a "MEN" (MEAN without Angular.js) stack app that was largely inspired by learning how to create a simple "TODO" app.

The inspiration for my project, <i>Via Media</i>, came from my love for journalism and appreciation for the media. Yet, I noticed over the years through conversations and interactions on social media that our consumption of media is largely one-sided and biased, making most of us gravely uninformed of various perspectives/worldviews when it comes to important issues of our day.

Therefore, I wanted to create a website/app that would take a major news story and provide a "Conservative", a "Progressive", and a "Mainstream" perspective side-by-side on one single page so that the reader: 1) doesn't have to scour the internet looking for websites and 2) can gain a more complete/holistic worldview with minimal effort (just read).

I also wanted to create a feature that would allow a user (would would sign-up and subsequently login to the website/app) to save for later reading an article that intrigued them. They can type in the name of the article, list which category it belongs to (Conservative, Progressive, Mainstream), and copy and paste a hyperlink to the article. When saved, it would create a list called the "File Cabinet" where they can go to to create, read, update, and delete articles with simplicity.

## Technologies Used

* HTML, CSS, JavaScript
* Mongo DB
* Express
* NodeJS
* Mongoose (for Object Document Mapping)
* EJS (Embedded JavaScript for HTML)
* Passport (for Security - Auth N and Auth Z)
* Method Override (for use of HTTP verbs in places where the client doesn't support it.)
* bcrypt-nodejs (for Password Encryption)
* Pixelmator (for Logo and Background Image design)
* Heroku (for App Deployment/Hosting)
* mLab (for DB on Heroku)
* Text Editor - Atom
* Project Planning & User Stories - Trello
* Wireframe Design - Mockingbird

## Features

* Home Page with a "Top News" story from three different journalistic perspectives from top media websites.
* Exclusive access where a user can sign up and login to create a "File Cabinet" to save articles one comes across on the Internet for later reading.

## Wireframe

Link to my <b>[Mockingbird](https://gomockingbird.com/projects/mjja794)</b> Wireframe.

## Project Planning & User Stories

Link to my <b>[Trello](https://trello.com/b/GncHotMA/ga-wdi7-project-2)</b> Board.

## Unsolved Problems/Major Hurdles

#### Unsolved Problems

* How to dynamically load articles into the Home Page.
 	* Which Approach?
		* Ajax & JSON?
		* RSS API?
	* This can also create potential copyright/intellectual property issues if ever launched into production.

* How to create a "sticky" footer without overflow issues from Bootstrap panels and scrolling issues.

#### Major Hurdles

* How to save hyperlink to article.
	* Solved using EJS correctly.

* How to blur background image.
	* Solved using Pixelmator to blur image.

## Future Development

* To dynamically load "Series" of articles into Home Page.
* For user to be able to "Switch" stories on Home Page by clicking a button.
* Social Media "Share" buttons to share favorite articles on Facebook, Twitter, etc.
* Creating "Comment" feature to have discussion on particular article.
* Create "Notes" feature to save personal thoughts on article in "File Cabinet".
* More refined/clean style.
* Create "About", "Contributors", and "Curators" pages. An "About" page to describe the purpose of website, a "Contributors" page to describe why I choose the media websites I desire to be featured on website, and a "Curators" page where for a small donation users can contribute to project and be featured on website.
