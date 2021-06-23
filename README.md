# Angular-Exercise

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 

# How to install this repository

Install the master branch using the following commands:

    git clone https://github.com/starkkumarkk1611/Angular-Web-App.git
    
# How to install all dependencies

    npm install 
    
# To run the Development Backend Server

 Start the Node REST API backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

# API endpoints

  * Get all tours: [GET] /api/tours 
  * Get tour by ID and Destination Location: [GET] /api/tours/:id
  * Update any tour: [PUT] /api/tours/:id
  * Making Login Request : [POST] /api/login
  * ':id' is a variable
# Log In Credential in "server/db-data.ts" -> USERS
  * Email : test@test.com
  * Password : Test6201@
