import "../styles/Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "SQL",
    "Git",
    "GitHub",
    "Machine Learning",
    "Data Analytics",
  ];

  return (
    <section className="skills">
      <h1>My Skills</h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;