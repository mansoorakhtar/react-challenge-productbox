ProductBox Frontend Code Challenge
=======================

Hello! Your task is to create RandoStore; an online store where anyone can put up any random item up for sale and anyone else can buy it.

## Overview

I have provided you with a simple [NodeJS](https://nodejs.org)
application server for item additions and listing.
This app does two things:
* Hosts static content from the 'static' directory
* Serves a JSON REST API for [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on items stored in memory

I would like you to build four pages: 
* A page for listing all items that you can add to your cart
* A page to view all the items that you've checked out
* A page that allows you to add new items
* A homepage that allows you to navigate to the last three pages

I've provided a placeholder for these four pages in the 'static' directory.
**In addition** you need to add a cart to the top of EACH page that shows how many items have been added to cart. Once the cart is clicked it should take you to the checkout page where you can see all the chosen items.

You have to use reactJs for this task.

In terms of design & layout, that's entirely up to you :). I suggest you use [Skeleton](http://getskeleton.com/) or Bootstrap since it's very simple and looks elegant. I would recommend you use whatever you're most comfortable with.


## Getting Started

Install the package dependencies by running the following command:
```
npm install
```

Once the dependancies are installed, you can start the application server by running
```
npm start
```

Once the server is running, you can access the start page (index.html) by opening your browser to [http://localhost:3000](http://localhost:3000).

## REST API

The Items JSON REST API is exposed at [http://localhost:3000/items](http://localhost:3000).

On server start, item data is read into memory from init_data.json. All subsequent actions are done against this memory store.  Stopping and starting the server will re-initialize data from init_data.json.  

#### API Endpoints

* **/items**  
HTTP GET: returns array of all items  
HTTP POST: creates a new item, returns the created item data
* **/items/:id**  
HTTP GET: returns the item with given id (numeric, auto-incrementing).  HTTP 404 if item not found  
HTTP DELETE: removes the items with given id, returns nothing (HTTP 204)

Here is an example of results returned from HTTP GET on /items:
```
[{"id":1,"name":"King Size Bed","price":"300","img":"./img/bed.jpg"},
{"id":2,"name":"Comfy Slippers","price":"15","img":"./img/slippers.jpg"},
{"id":3,"name":"CD Rack","price":"100","img":"./img/rack.jpg"},
{"id":4,"name":"Glow Stick Bundle","price":"10","img":"./img/sticks.jpg"},
{"id":5,"name":"Cookie Jar","price":"25","img":"./img/cookies.jpg"}]
```

You must have noticed that from the top endpoints there is no mention of a cart. This is because I want you to implement the cart entirely in the front end. I _suggest_ that you use [browser local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 

## Requirements

At a minimum, there are 5 things I need to see:
* You should be able to add items through the front end application
* A list of all the items on the items page
* The checkout page should have all the items that you chose to checkout
* The number of items in cart is persistant amongst different browser tabs
* Decent design/layout of content

I will be examining your code for readability, architectural decisions, and modularity. This application is a simple one and doesn't require expertise to build, that being said, I'll be grading how well you built it not just if you did it. Communication is key, thus if/when you meet with us, be prepared to talk about why and how you built your interfaces.

Design isn't a point I'm concerned about here, so I suggest you just make it usable or just organized and not spend too much time on it.

You should be able to finish this in 4-8 hours, I cannot fairly judge how much time you spent on this project but **please don't spend more than 8 hours on this project**.

## Idea inspiration

If you have additional time after completing the requirements (I _think_ you should), then I'd love to see what else you can do. Here are some ideas to get you started (but please don't limit yourself to these!).

* Add Items form validation
* Automated testing
* Sorting/Searching of items
* Optimize assets (minimize and/or bundle css/js)
* Dynamically load items when they're added to backend (no need to refresh)

To be perfectly clear, I don't expect that anyone could complete _all_ of these. This is simply a list of ideas to inspire you.

## Submission

Create a new public repo and then send the link to [waleed@productbox.dev](mailto:waleed@productbox.dev) with the subject title "Frontend Code Challenge"

## Questions / Problems / Stuck?

Email me [waleed@productbox.dev](mailto:waleed@productbox.dev)
