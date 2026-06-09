import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="project-container">

        <div className="project-card">
          <h2>FashionHub</h2>

          <p>
            Modern E-Commerce website built using React.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h2>Retail Sales Prediction</h2>

          <p>
            Machine Learning project for predicting sales.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h2>Portfolio Website</h2>

          <p>
            Personal portfolio built with React and CSS.
          </p>

          <button>View Project</button>
        </div>

      </div>
    </section>
  );
}

export default Projects;