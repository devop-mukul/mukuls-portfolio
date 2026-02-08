import React from "react";
import "../../../styles/Techstack.css"; 

const TechStack = () => {
  const techStack = [
    { name: "Java", img: "java.png", usedIn: "College CourseWork" },
    { name: "MySQL", img: "mysql.png", usedIn: "Banking System CLI" },
    { name: "Javascript", img: "javascript.png", usedIn: "Coursework and Projects" },
    { name: "React.js", img: "reactjs.png", usedIn: "Portfolio Website" },
    { name: "Node.js", img: "nodejs.png", usedIn: "Backend Development"},
    { name: "MongoDB", img: "mongodb.png", usedIn: "Database Management"},
    { name: "TensorFlow", img: "tensorflow.png", usedIn: "Image Processing Projects" },
    { name: "Android Development", img: "android.png", usedIn: "Object Detection App"},
    { name: "HTML-5", img: "html-5.png", usedIn: "Coursework and Projects" },
    { name: "CSS-3", img: "css-3.png", usedIn: "Coursework and Projects"},
    { name: "Postman", img: "postman.png", usedIn: "API Testing and Development" },  
    { name: "Github", img: "github2.png", usedIn: "Project Version Control" },
  ];

  return (
    <div className="ptech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-container">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-box">
            <img src={`${process.env.PUBLIC_URL}/assets/${tech.img}`} alt={tech.name} className="tech-icon" />
            <div className="tech-info">
              <p className="tech-name">{tech.name}</p>
              <p className="tech-project">{tech.usedIn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
