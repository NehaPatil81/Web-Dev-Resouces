import { useState } from "react";
import "./styles.css";

function App() {
  const database = {
    bootcamp: [
      {
        title: "neogCamp",
        description:
          "A 6 month multilevel bootcamp to get you from absolute beginner to advanced in Web Development. This camp is structured in three simple parts: levelZero for everyone, levelOne for serious folks and then job interviews for levelOne finalists who want jobs.",
        rating: "10/10"
      },
      {
        title: "GeekSkool",
        description:
          "The GeekSkool program is a 3 month, full time, intensive, coding and training program held in Bangalore. The program is for those who want to make the most of a career in startups. This program is free for all participants!",
        rating: "9/10"
      },
      {
        title: "Scaler Academy",
        description:
          " Scaler Academy’s meticulously structured 6-month online program effectively enhances the coding skills of professionals by creating a modern curriculum with exposure to the latest technologies. ",
        rating: "8.5/10"
      }
    ],
    youtube: [
      {
        title: "FreeCodeCamp",
        description:
          "FreeCodeCamp provides a whole curriculum on web development where you can learn for free. It is an interactive learning environment where you will go through a series of challenges and build projects along the way.",
        rating: "9.5/10"
      },
      {
        title: "Traversy Media",
        description:
          "Traversy Media brings you free and paid web development and programming courses. Learn how to write code in a simple and easy to learn fashion with courses by Brad Traversy. Learn by doing projects here",
        rating: "8.8/10"
      },
      {
        title: "Maximilian Schwarzmüller",
        description:
          "A professional web developer and instructor,who offers hundreds of coding tutorials and premium programming video courses. Guided More than 1.5mn active students and highest rated Udemy instructor so do check it out his channel",
        rating: "8.5/10"
      }
    ],
    udemy: [
      {
        title: "The Complete 2021 Web Development Bootcamp",
        description:
          "Taught by the lead instructor at top London coding bootcamp App Brewery, You’ll apply what you’ve learned through a collection of valuable hands-on projects, including 25+ real, useful websites you can add to your portfolio.",
        rating: "9.2/10"
      },
      {
        title: "The Complete Web Developer in 2021: Zero to Mastery",
        description:
          "During the course, you’ll learn to set your computer up with the right tools of the web development trade, master coding concepts from fundamentals to advanced, build real-world websites and applications, get ready for the job application process, and more.",
        rating: "8.5/10"
      },
      {
        title: " The Web Developer Bootcamp 2021",
        description:
          "This Udemy course takes you from complete beginner to full stack developer in over 60 hours of content. The detail and quality of instruction make this the best Udemy course for full-stack developers.",
        rating: "8.0/10"
      }
    ],
    docs: [
      {
        title: "MDN DOCS",
        description:
          "MDN Web Docs is a free resource for in-depth documentation on web standards such as HTML5, CSS, JavaScript, and much more. MDN's mission is simple: provide developers with the information they need to easily build projects on the open Web.",
        rating: "10/10"
      },
      {
        title: "W3Schools",
        description:
          "W3Schools is a web developers site, with tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, SQL, and JQuery, covering most aspects of web programming.",
        rating: "9/10"
      },
      {
        title: "FreeCodeCamp",
        description:
          "FreeCodeCamp provides a whole curriculum on web development where you can learn for free. It is an interactive learning environment where you will go through a series of challenges and build projects along the way.",
        rating: "8.5/10"
      }
    ]
  };
  const [selectedResource, setSelectedResource] = useState(database.bootcamp);

  function userInputHandler(resource) {
    let content = database[resource];
    setSelectedResource(content);
    console.log(content);
  }
  console.log();

  return (
    <div className="app">
      <div className="header">
        <h1 id="heading">Web Development</h1>
        <button
          className="resource-type active"
          onClick={() => userInputHandler("bootcamp")}
        >
          BootCamp
        </button>
        <button
          className="resource-type"
          onClick={() => userInputHandler("youtube")}
        >
          YouTube
        </button>
        <button
          className="resource-type"
          onClick={() => userInputHandler("udemy")}
        >
          Udemy
        </button>
        <button
          className="resource-type"
          onClick={() => userInputHandler("docs")}
        >
          Documentaion
        </button>
      </div>

      <ul id="content-list">
        {selectedResource.map((content) => {
          return (
            <li id="list">
              <div className="container">
                <div className="card">
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                  <p style={{ fontWeight: "bold" }}>{content.rating}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <footer class="footer">
        <ul>
          <li class="list-item-inline">
            <a href="mailto:reachout.nehapatil8199@gmail.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>

          <li class="list-item-inline">
            <a href="https://github.com/NehaPatil81">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <li class="list-item-inline">
            <a href="https://twitter.com/NehaPatil_81">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>

          <li class="list-item-inline">
            <a href="https://www.linkedin.com/in/neha-patil-1265591a1/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
