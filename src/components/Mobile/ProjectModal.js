import React, { useState } from "react";
import "../../styles/Mobile/ProjectModal.css";

const projectsData = [
  {
    title: "Braille Recognition - Machine Learning Project",
    techStack: "Python, Scikit-learn, YOLOv11, Pyttsx3, Streamlit",
    date: "February 2026",
    details: [
      "Developed a Braille Recognition System to convert embossed Braille characters into digital text using image processing techniques.",
      "Implemented Braille dot detection and segmentation for accurate character recognition under varying conditions.",
      "Built an end-to-end recognition pipeline with scope for real-time processing and accessibility applications.",
      "Used Streamlit for a user-friendly interface and Pyttsx3 for text-to-speech conversion, enhancing accessibility for visually impaired users."],
  },
  {
    title: "Banking System CLI - Java Project",
    techStack: "Java, OOPS, MySQL",
    date: "November 2025",
    details: [
      "Built a Java-based CLI banking system using OOP principles supporting account creation, deposits, withdrawals, fund transfers, and balance checks.",
      "Implemented authentication, security PIN validation, and persistent data storage in MySQL through JDBC with prepared statements to ensure secure SQL operations and prevent SQL injection.",
      "Designed modular services for User, Accounts, and Transactions with reusable DB utilities, unique account number generation, and transaction integrity checks for scalable and maintainable architecture.",
      "Provided a user-friendly CLI interface with clear prompts, error handling, and transaction history display for an intuitive banking experience."
    ],
  },
  {
    title: "Mausam App - Weather Forecasting Application",
    techStack: "Kotlin, Java, Android Studio",
    date: "November 2025",
    details: [
      "Developed a weather application using Kotlin in Android Studio, providing real-time weather updates via API integration.",
      "Implemented location-based forecasting with a clean, user-friendly UI and efficient data handling.",
      "Integrated error handling and network optimization to ensure reliable performance across devices."
    ],
  },
  {
    title: "Android App Object Detection",
    techStack: "Kotlin, Java, Android Studio",
    date: "April 2025",
    details: [
      "Trained a custom YOLOv8 model and exported it in .tfite format for mobile deployment.",
      "Integrated the model into an Android app using TensorFlow Lite for real-time object detection.",
      "Configured and deployed the application using Android Studio, achieving efficient on-device inference",
      "Implemented a user-friendly interface for seamless interaction and real-time feedback during object detection."
    ],
  }
];

const ProjectModal = ({ isOpen, onClose }) => {
  const [expandedProjects, setExpandedProjects] = useState({});

  if (!isOpen) return null;

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Projects</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-card ${expandedProjects[index] ? "expanded" : ""}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="project-summary">
                <div>
                  <div className="project-title">{project.title}</div>
                  <div className="tech-stack">{project.techStack}</div>
                </div>
                <div className="project-date">{project.date}</div>
              </div>
              
              {expandedProjects[index] && (
                <div className="project-details">
                  <ul>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 
