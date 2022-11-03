// asset imports
import timeTracker from '../../assets/timetracker.mp4';
import sweetTreats from '../../assets/sweettreats.mp4';
import ticTacToe from '../../assets/tictactoe.mp4';
import weatherApp from '../../assets/weatherapp.mp4';

const ListOfProjects = [
    {
        id: 0,
        title: "Project time tracker",
        video: timeTracker,
        videoAlt: "Time tracking project app",
        tags: ["html", "css", "javascript", "local storage"],
        details: "I've become comfortable as a Javascript developer however I needed a way to track how long I work on projects. While I could track my time on paper or download a 3rd party app, I thought creating one myself would be great practice. This project features individual action-item time tracking, mobile-first responsive design, local storage information saving, and a night-mode for after hour coding use.",
        challenges: "My major roadblock were trying to add event listeners onto dynamically created dom elements as they were created, and learning to switch content out of local storage. It took time to understand the real problem I was facing in these instances, but once I understood why my code wasn't working, I found the answers pretty quickly from online forums.",
        lessons: "The biggest lesson I took away from this project was event delagation, the use of attaching an event listener to a parent element to use on its dynamic child elements. This was also the first time I used multiple css design themes for a project, and I learned the basics of regular expression (regex) to format time.",
        liveLink: "https://bryanmf87.github.io/time-keeper/",
        codeLink: "https://github.com/BryanMF87/time-keeper",
    },
    {
        id: 1,
        title: "Ecommerce website",
        video: sweetTreats,
        videoAlt: "Sweet Treats ecommerce website",
        tags: ["html", "css", "javascript", "react", "useState", "useEffect", "react router", "local storage"],
        details: "I wanted to test my React framework skills by building an ecommerce website using common hooks like useState, useEffect, and React router. I made sure that while the website can't take actual payment info, it can save the user's choice data using local storage.",
        challenges: "There were struggles early on with the uni-directional flow of data and passing JS/hook data back and forth between components. This was also the first time I used elements like React router and local storage so it was a great project for learning new things.",
        lessons: "After getting a basic understanding of lifting states to the parent method and data drilling through components, I was able to connect the functionality throughout my website fairly easily. I was also able to become much more comfortable with mapping arrays, arrow functions, ternary and spread operators.",
        liveLink: "https://bryanmf87.github.io/ecommerce-website/",
        codeLink: "https://github.com/BryanMF87/ecommerce-website",
    },
    {
        id: 2,
        title: "Weather API app",
        video: weatherApp,
        imageAlt: "Weather forecast app",
        tags: ["html", "css", "javascript", "api", "fetch", "async", "promises"],
        details: "I created this real-time weather forecast app using weather API data, fetch commands, and asynchronous Javascript.",
        challenges: "This was my first experience using APIs and the fetch function. Retreiving the data and getting it to display properly was probably the hardest part of this project.",
        lessons: "I liked this project a lot. I was able to utilize a lot of new syntax such as async logic / promises, a bit of JSON, and deconstruction, but I still feel like I have barely scratched the surface of API usage. I would love to do another project diving even deeper into APIs very soon.",
        liveLink: "https://bryanmf87.github.io/weather-app",
        codeLink: "https://github.com/BryanMF87/weather-app",
    },
    {
        id: 3,
        title: "Tic-tac-toe game",
        video: ticTacToe,
        videoAlt: "Tic-tac-toe game app",
        tags: ["html", "css", "javascript", "ES6 modules", "scope"],
        details: "This two player tic-tac-toe app focused on testing my knowledge of ES6 modules, scope and using as little global code as possible.",
        challenges: "Thinking compartmentally was rather difficult at first, and sharing logic between modules was a frustrating issue that sent me scouring Google for information many times. I found myself also struggling with appending elements to the DOM & related arrays as well as I was still new to DOM manipulation.",
        lessons: "Through this project I became much more competent using factory functions, different use cases of arrays, and DOM manipulation. It was also the biggest test of logical thinking up to that point and allowed me to grow as a developer by thinking through the series of game events between two human players.",
        liveLink: "https://bryanmf87.github.io/tic-tac-toe/",
        codeLink: "https://github.com/BryanMF87/tic-tac-toe",
    }
  ]

  export default ListOfProjects;