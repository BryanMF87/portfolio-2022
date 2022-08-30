// image imports
import macarons from './macarons.jpg';

const ListOfProjects = [
    {
        id: 0,
        title: "Ecommerce website",
        image: macarons,
        imageAlt: "Sweet Treats ecommerce website",
        tags: ["html", "css", "javascript", "react", "useState", "useEffect", "react router", "local storage"],
        details: "I wanted to test my React framework skills by building an ecommerce website using common hooks like useState, useEffect, and React router. I made sure that while the website can't take actual payment info, it can save the user's choice data using local storage.",
        challenges: "There were struggles early on with the uni-directional flow of data and passing JS/hook data back and forth between components. This was also the first time I used elements like React router and local storage so it was a great project for learning new things.",
        lessons: "After getting a basic understanding of lifting states to the parent method and data drilling through components, I was able to connect the functionality throughout my website fairly easily. I was also able to become much more comfortable with mapping arrays, arrow functions, ternary and spread operators.",
        liveLink: "https://bryanmf87.github.io/ecommerce-website/",
        codeLink: "https://github.com/BryanMF87/ecommerce-website",
    },
    {
        id: 1,
        title: "Weather API app",
        image: macarons,
        imageAlt: "Weather forecast app",
        tags: ["html", "css", "javascript", "api", "fetch", "async", "promises"],
        details: "I created a real-time weather forecast app using weather API. ",
        challenges: "This was my first experience using APIs and the fetch function. Retreiving the data and getting it to display properly was probably the hardest part of this project.",
        lessons: "I liked this project a lot. I was able to utilize a lot of new syntax such as async logic / promises, a bit of JSON, and deconstruction, but I still feel like I have barely scratched the surface of API usage. I would love to do another project diving even deeper into APIs very soon.",
        liveLink: "https://bryanmf87.github.io/weather-app",
        codeLink: "https://github.com/BryanMF87/weather-app",
    },
    {
        id: 2,
        title: "Tic-tac-toe game",
        image: macarons,
        imageAlt: "Tic-tac-toe game app",
        tags: ["html", "css", "javascript, ES6 modules, scope"],
        details: "This two player tic-tac-toe app focused on testing my knowledge of ES6 modules, scope and using as little global code as possible.",
        challenges: "Thinking compartmentally was rather difficult at first, and sharing logic between modules was a frustrating issue that sent me scouring Google for information many times. I found myself also struggling with appending elements to the DOM & related arrays as well as I was still new to DOM manipulation.",
        lessons: "Through this project I became much more competent using factory functions, different use cases of arrays, and DOM manipulation. It was also the biggest test of logical thinking up to that point and allowed me to grow as a developer by thinking through the series of game events between two human players.",
        liveLink: "https://bryanmf87.github.io/tic-tac-toe/",
        codeLink: "https://github.com/BryanMF87/tic-tac-toe",
    },
    {
        id: 3,
        title: "JavaScript Calculator",
        image: macarons,
        imageAlt: "JavaScript calculator app",
        tags: ["html", "css", "javascript"],
        details: "This fundamental project was a sum of my early JS studies. The goal was to combine what I learned about DOM maninpulation with JS logic to create this simple calculator.",
        challenges: "I avoided using the eval() function so I had to learn to create my own calculation functions and how to store them for later use. Even tougher was figuring out how to calculate multiple entries at a time. 2 x 3 + 4 - would equal 1 instead of 10 because the original logic worked off the last operator button pressed.",
        lessons: "This was my first time using data attributes to link the HTML with JS, and made it far simpler to group the numbers and operators separately for design and logic purposes. This project helped me solidify JS logical thinking, working with event listeners, and switch statements.",
        demoLink: "https://bryanmf87.github.io/calculator/",
        codeLink: "https://github.com/BryanMF87/calculator",
    },
  ]

  export default ListOfProjects;