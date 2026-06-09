import "../styles/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Suhani 👋</h1>

        <h2>Engineering Student & Web Developer</h2>

        <p>
          Passionate about Web Development, Data Analytics,
          Machine Learning, and creating innovative digital solutions.
        </p>

        <div className="home-buttons">
          <button className="btn">Download Resume</button>
          <button className="btn btn-outline">View Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Home;