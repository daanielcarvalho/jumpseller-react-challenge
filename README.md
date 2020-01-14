## Jumpseller React code challenge

**This challenge was intentionally ​left without limits to allow you to focus on and showcase components that you believe are valuable for such an application**

## Challenge Overview

The purpose of this challenge is to let us know a little about your thinking and the way you approach the problems.
It is up to you how much effort you put into it and exactly what you deliver.

You are free to use the tools and code structure that makes the most sense and seems most efficient. We will ask you to put some comments in all your methods so that we can understand your process and we can talk a little bit about it at a later time.

**You can fork this repository (clean react app) and work on it or use your own tools to create a a new react app**

## Components Requirements (to deliver)

Based on [this API](https://jsonplaceholder.typicode.com/) you should:

1. Build a simple layout
- Build using a simple layout (using bootstrap 4 as a reference) so that you can build the modules shown below [bootstrap 4 examples](https://getbootstrap.com/docs/4.0/examples/)

2. Read data from a external api
- Read data from an external api and fetch it to the list component (should list only last 20 posts)
- endpoit: https://jsonplaceholder.typicode.com/posts

3. Show detail from a post
- Show the detail from a clickable post and present {title, body} and also create a section linking the title and the body (the first 100 characters) of the the 3 last posts created.
- endpoint: https://jsonplaceholder.typicode.com/posts/`post-id`

4. Show comments on detail component
- Show the last 10 comments from the specific post.
- endpoint: https://jsonplaceholder.typicode.com/posts/`post-id`/comments

5. Create a simple test
- Create a simple test of one of your components using a library that you prefer. [Recommended Tools](https://reactjs.org/docs/testing.html)

## Expectations
- Don't overly nest your code; try to stay into smaller logical pieces.
- When creating the component page and repo, try to break them into the separate items - make sure that header, a row, and the footer are different self-sufficient styled elements (do not overly nest the SCSS).
-- Component-specific styles (used only once).
-- Global styles (/styles/*.scss) used from all components.
- Don't use external libraries like Jquery to fix small problems, try to use your knowledge of javascript to finish your taks. 

## React and Javascript Requirements
- ES6 syntax is preferred, as Babel has been setup to handle transpiling the syntax to the current JavaScript standard.
- Use .jsx extension for React components; using PascalCase for filenames. E.g., Navigation.jsx.
- Build the components using similar React components to the existing web app. There is a sample in the repo at src/components/ExampleComponent.
- Ensure that there are no lint errors.
- Write bundled jsx and scss files for each component at the same src corresponding location. For instance, for a component called “Navigation” it would be:
-- Navigation.jsx
-- Navigation.scss

## Browser Requirements
- IE 11+
- Latest Chrome on Mac and Windows
- Latest Safari on Mac and Windows
- Latest Firefox on Mac and Windows


## Deployment
To ensure the challenge will run in a consistent and controlled environment we currently support two deployment mechanisms, and you may choose whichever one works best for you.


### GitHub, GitLab
Send us a link with a public repository where we can find the project, so we only need to pull and run `yarn install` in in our environment host machine through `http://localhost:3000`

### Docker
Running `docker-compose up web` on the project's root must start a web server on port `8080` and be reachable on the host machine through `http://localhost:8080`. To get started with docker / docker compose, we recommend [this page](https://docs.docker.com/compose/gettingstarted/). 
**note: the code should be available on a public repository**

### Heroku
Deploy the project to heroku and provide us the running project on https://<your-project-name>-challenge-jumpseller.herokuapp.com` [this page](https://devcenter.heroku.com/start)
**note: the code should be available on a public repository**
