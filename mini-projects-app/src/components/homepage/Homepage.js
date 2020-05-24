import React from 'react';
import octoCat from '../logos/svgs/GitHub-Mark-120px-plus.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Mini-Projects</h1>
      <div className="homepage__construction">
        <div className="homepage__link-container">
          <a
            className="homepage__link"
            href="https://github.com/Coby-Burckard/mini-projects-backend"
          >
            Backend
          </a>
          <div className="homepage__img-container">
            <img className="homepage__img" src={octoCat} alt="GitHub" />
          </div>
          <a
            className="homepage__link"
            href="https://github.com/Coby-Burckard/mini_projects"
          >
            Frontend
          </a>
        </div>
      </div>
      <div className="homepage__list-container">
        <h2 className="homepage__subtitle">Under Construction</h2>
        <ul>
          <li>Responsive design</li>
          <li>Styling</li>
          <li>Error handling</li>
          <li>Minor bug fixes</li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
