# Teachaway

Bruno Morales' Tech challenge for teachaway's Front End position

## Installation

To start the project after cloning the repo, open a terminal window and run

### `npm run install`

Once dependencies were downloaded, run

### `npm run start`

This should host the app and run it directly in your default browser, connecting to localhost:3000. <br/>
Close or ignore this tab. Instead, go to 127.0.0.1:3000 <br/>

The app should now be running properly. <br/>

This is because localhost is not a valid address for imgur server when it recieves a request. <br/>

## The App

This app was requested by Teachaway to assess my skill level using ReactJs with Redux. It was built using a mobile first approach. <br/>

It consists of a screen which, when scrolled down, displays a list of images requested to the imgur API. There is a button to toggle visibility for viral images, and a small control panel to filter the search depending on the section - "Hot", "Top" or "User". <br/>

The full list of requirements as requested by Teachaway are the following: <br/>

● Use React/Redux (preferably), Vue.js or other similar js frameworks. <br/>
● Styling: sass, styled-components, css modules (your choice). <br/>
● Code linter. <br/>
● Typescript is a plus. <br/>
● Implementing unit tests is a plus: Jest + react-testing-library / enzyme. <br/>
● Hosting the website on the service of your choice is a plus. <br/>
● consume the Imgur API: https://api.imgur.com/ (check documentation for the api https://apidocs.imgur.com) <br/>
● show gallery images in a grid of thumbnails; <br/>
● show image description in the thumbnail, top or bottom; <br/>
● allow selecting the gallery section: hot, top, user; <br/>
● allow including / excluding viralimages from the result set; <br/>
● allow specifying window and sort parameters; <br/>
● when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score. <br/>
● pagination is a plus <br/>

### Main Issue

The toughest challenge I face during the creation of this app was imgur's server configuration, which is restricted by CORS in a way which I found hard to diagnose and which required a workaround (For example, not being able to connect through localhost)

#### Personal notes:

● Although instructions specify sass, styled-components and css modules, it was mentioned during the interview Teachaway uses Material UI for the code. Thus, I included Material UI to the stack.  <br/>
● Regrettably, during this week I did not find myself with as much time to work on this challenge as I hoped, and I was not able to include pagination; unit testing (with Enzyme and Jest) and routing (With React-router). These are important tasks I know how to code, but will not be displayed in this demo. <br/>

Again, I want to thank you for your interest and the opportunity, and hope to work together soon! <br/>

Bruno Morales
