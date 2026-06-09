import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Suhani Portfolio</h3>

        <p>
          Engineering Student | Web Developer | Data Analyst
        </p>

        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Suhani. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;