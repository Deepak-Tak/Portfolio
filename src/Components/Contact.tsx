import "../CSS/Contact.css";

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="contact-title">
        <h4>Contact</h4>
        <h3>Let's Connect! Hit me up! 🔔</h3>
      </div>

      <div className="wrapper">
        <div className="contact-icon-box">
          <div className="icon">
            <a href="/">
              <i className="ri-map-2-line"></i>
            </a>
          </div>
          <div className="text-area">
            <h5>Location</h5>
            <p>Hyderabad</p>
          </div>
        </div>
        <div className="contact-icon-box">
          <div className="icon">
            <a href="/">
              <i className="ri-mail-send-line"></i>
            </a>
          </div>
          <div className="text-area">
            <h5>Mail</h5>
            <a
              href="mailto:deepaktak1444@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <p>deepaktak1444@gamil.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
