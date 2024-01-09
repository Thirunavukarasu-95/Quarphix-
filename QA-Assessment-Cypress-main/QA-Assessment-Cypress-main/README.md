# Quarphix: QA Cypress technical face-to-face

## Solved by: *please replace this with your full name*

## Pre-requisites

Candidates should have the following installed:

- An up to date version of [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/). We suggest
  using [nvm](https://github.com/nvm-sh/nvm) to manage node/npm.
- [docker](https://docs.docker.com/get-docker/)

### Windows users

If you are planning on running this test in native Windows then you can follow instructions
found [here](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows). You can also run
the tests in WSL but unfortunately we can't provide instructions on how to set this up.

## Starting the Application

Execute `./run.sh` from the project root. If you are using Windows then run `.\run.bat`. The service can be reached via
a browser [here](http://localhost:3000/)

## Getting Started

Download all project specific packages with: `npm install`

## Running the tests

To run the tests execute: `npm run tests`

## Tasks to complete

Assume that this is an existing test framework within a company that leans heavily
on [Cypress](https://www.cypress.io/). You are required to complete the **three** tasks described below to the
best your abilities. We ask that you take a couple of hours to complete the exercise, but feel free to take a little
more time if necessary. Your code should be well-structured and easy to follow. Don't forget to include assertions.

### Things we expect to see

* Tests that run **successfully** out of the box.
* Be sure to include assertions in the tests.
* Clean code
* Well commented code if required (i.e. you made fundamental changes to the framework in some way).

### Task 1: Create customer

Start the JuiceShop application and access it via a browser. Manually register a user taking note of the email and
password values you provide. Record those value in the Customer object in the setup function of
the `Juice Shop Homepage` spec.

_Note: the application only persists users in memory. If the container dies you will need to repeat this step to get
your tests passing._

### Task 2: UI test

Using the credentials you recorded in Task 1, automate the Review Posting journey (Login is provided) via the UI. Don't
forget to assert that your review appears on the appropriate screen.

### Task 3: API test

Using the credentials you recorded in Task 1, automate the Juice Shop Login (to get an authentication token) and Review
Posting journeys via the API. We've provided some [API documentation](JuiceShopApiReference.md) to help.

## Ways to submit your solution

The solution you submit should:

* Include the original code that we sent you.
* Not include the dependencies downloaded by `npm`.
* Include your solution to the tasks.
* Any instructions/comments that you would like to include. If you do include any additional documentation please make
  us aware of it so it doesn't get missed. For example, it could be worth mentioning if you have built a solution that
  runs on Windows or requires a specific version of Java.

### Method 1

Push your solution to a private repository on Github or Gitlab and give access to the following email addresses:

* ctumwebaze@gmail.com

### Method 2

Zip up your solution and email it to the Quarphix Recruitment Team that you are in contact with.

Do remember to check that you included/excluded the things mentioned above when you are zipping up your solution. 
