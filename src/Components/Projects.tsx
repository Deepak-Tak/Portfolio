import "../CSS/Projects.css";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h4>Portfolio</h4>
      <h3>
        Marrying design aesthetics with web technology to produce captivating
        sites.
      </h3>

      <div className="project-one">
        <div className="one-img-area interactable">
          <a href="https://main--netplay-theater.netlify.app/">
            <img src="../../public/3.PNG" alt="project-pic" />
          </a>
        </div>

        <div className="one-text-area">
          <h4>Video Sharing and Streaming</h4>
          <p>
            A web application that combines the features of <br />
            YouTube and Netflix,
            <br /> offering an integrated platform for <br /> video sharing and
            movie streaming (Theater Mode).
          </p>

          <div className="stack">
            <span className="tech">JavaScript</span>
            <span className="tech">React</span>
            <span className="tech">Tailwind</span>
          </div>

          <div className="links">
            <a href="https://github.com/Deepak-Tak/NetPlay-Frontend">
              Code <i className="ri-github-line"></i>
            </a>
            <a href="https://main--netplay-theater.netlify.app/">
              Live Demo <i className="ri-external-link-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
