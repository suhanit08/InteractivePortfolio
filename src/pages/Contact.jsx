import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Me</h1>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;