import React from "react";
import { FaUniversity, FaMapMarkerAlt, FaMusic, FaBrain, FaCode, FaBriefcase, FaSatellite } from "react-icons/fa";
import "../../../styles/Profile.css"; 

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="desktop-profile-pic-container">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Mukul Kumar"
          className="desktop-profile-pic"
        />
      </div>
      <h1 className="desktop-profile-name">Mukul Kumar</h1>
      <p className="desktop-current-role">
        <FaBriefcase /> Aspiring Software Engineer
      </p>

      <p className="desktop-bio">
        I like building things people can actually use, from Android apps and backend systems to interactive web projects.
This portfolio showcases how I approach problem-solving, write clean code, and learn by building real systems.
      </p>

      <div className="desktop-education-location">
        <p>
          <FaUniversity className="desktop-edu-icon" /> <strong>Galgotias University</strong> (BTech CSE '26)
        </p>
        <p>
          <FaMapMarkerAlt className="desktop-location-icon" /> Greater Noida, India
        </p>
      </div>

      <div className="desktop-interests-container">
        <h3>Passions and Pastimes:</h3>
        <div className="desktop-interests">
          <div className="desktop-interest-item">
            <FaCode className="interest-icon" />
            <span>Development</span>
          </div>
          <div className="desktop-interest-item">
            <FaMusic className="interest-icon" />
            <span>Music Production</span>
          </div>
          <div className="desktop-interest-item">
            <FaBrain className="interest-icon" />
            <span>Epistemology</span>
          </div>
          <div className="desktop-interest-item">
            <FaSatellite className="interest-icon" />
            <span>Astrophilia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
