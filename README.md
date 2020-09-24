## Rock Paper Scissors - Tech Interview simulation[Craft Academy]

[![Netlify Status](https://api.netlify.com/api/v1/badges/4436edf6-6c51-4c20-bbe3-d247c2182a07/deploy-status)](https://app.netlify.com/sites/rock-paper-scissors-emiliano/deploys)

  

### Intention of the app

In the context of a tech interview simulation I was assigned to build a rock-paper-scissors game with absolute freedom to choose how I wanted to do it. From selecting the tools up to the UI.

  **The only requirement is to comply with the game rules:**

Rock vs Paper -> Paper wins; Rock vs Scissors -> Rock wins; Paper vs Scissors -> Scissors wins

 
**TDD and BDD approach starting with three user stories:**

As a player

In order to express my choice

I need to be able to select rock, paper or scissors. 

---
As a player

In order to compete with the computer

I'd need The computer to randomly choose 1

  ---

As a player

In order to see who the winner is

I should see the result displayed on screen

  ---

**Focused on delivering a MVP doable in the given amount of time (2 weeks, limited availability).**

  

- CI and CD is implemented with Semaphore and Netlify.

  
  

## Credits and Inspiration:

  

-  [Alex-Bellamy - rock_paper_scissors](https://github.com/Alex-Bellamy/rock_paper_scissors)

  

- [WebDevSimplified](https://www.youtube.com/watch?reload=9&v=1yS-JV4fWqY&ab_channel=WebDevSimplified)

- [Odeane](https://github.com/Odeane)/[rock_paper_scissors](https://github.com/Odeane/rock_paper_scissors)



### Resources

- CraftAcademy Study Material.

  

- [Conditional testing](https://docs.cypress.io/guides/core-concepts/conditional-testing.html#Definition)



  

- [Cypress catalog events](https://docs.cypress.io/api/events/catalog-of-events.html#Cypress-Events)

  

- [Cypress stubs-spies-and-clocks](https://docs.cypress.io/guides/guides/stubs-spies-and-clocks.html#Capabilities)

  

- [Cypress stub syntax](https://docs.cypress.io/api/commands/stub.html#Syntax)

  

- [Examples stubbing window](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window)

  
  
  

### Tech and packages

- React
- Cypress for acceptance tests.
- Jest with Enzyme for Component testing

### Setup

Install all packages by running the command:

 
``` $ yarn ```

  

Run the app in development mode:

  

``` $ yarn start ```

  

Start Cypress and run the acceptance tests:

  

``` $ yarn cy:open ```

Start Jest and run the component tests:

  

``` $ yarn test ```

  

### License

This app is open source software [licensed as MIT](https://mit-license.org/).