---
title: Jesus
date: 2020-04-04
excerpt: Lorem ipsum
order: 2
---

# Stub Apollo GraphQL calls in a Typescript frontend

If the frontend of your app is located in a separate repo, it makes sense to stub your backend so you can test the behaviour of your frontend independently. This is especially helpful for use with Continuous Integration and Continuous Deployment.

We are going to use Cypress to achieve this. While it is primarily advertised as an end-to-end testing tool, Cypress is still a really good choice for our requirements:

- It bundles Chai, so we have all the BDD assertions we need
- Cypress is a all-in-one solution that many devs are already familiar with
- We can debug the tests in Cypress' headless Chrome browser

If you are using Apollo to make calls to your backend, the main problem to be solved with regards to using Cypress is that you have to manually stub the Fetch API, since Cypress only offers XHR stubbing out of the box.

you may have heard that Cypress is an end-to-end testing tool and think that this means we are not _really_ writing end-to-end tests)

that means we are not truly writing end-to-end tests,

In this post, I want to show a way to achieve that with the help

While that means we are not truly writing end-to-end tests, Cypress.js is still a good In this post, I want you to

In this post, I want to show a way to test the behaviour of your frontend independently of your backend.

for to stub you
