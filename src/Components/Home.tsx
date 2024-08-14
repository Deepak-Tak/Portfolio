import "../CSS/Home.css";

export default function Home() {
  return (
    <section className="Home" id="home">
      <div className="main">
        <div className="main-text-area">
          <h1>
            Front-End <br /> Developer
          </h1>
          <p>
            Hi, I am Deepak Tak. <br /> A Software Developer (WEB) from
            Hyderabad.
          </p>
          <span className="icons">
            <a href="https://www.linkedin.com/in/">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/">
              <i className="ri-github-line"></i>
            </a>
          </span>
        </div>
        <div className="main-img-area">
          <img src="../../public/IMG_9477.PNG" alt="profile" />
        </div>
      </div>

      <div className="skills">
        <h3>Tech Stack</h3>
        <p>|</p>
        <div className="skills-icon">
          <img src="https://skillicons.dev/icons?i=html,css,js" />
        </div>
        <div className="skills-icon">
          <img src="https://skillicons.dev/icons?i=react,tailwind,next" />
        </div>
      </div>
    </section>
  );
}
