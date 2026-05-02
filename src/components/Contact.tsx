import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    // ফিক্স: position এবং z-index অ্যাড করা হয়েছে ওভারল্যাপ আটকানোর জন্য
    <div className="contact-section section-container" id="contact" style={{ position: "relative", zIndex: 20 }}>
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              {/* এখানে আপনার আসল ইমেইল বসিয়ে নেবেন */}
              <a href="mailto:your.email@example.com" data-cursor="disable">
                your.email@example.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              {/* এখানে আপনার আসল ফোন নম্বর বসিয়ে নেবেন */}
              <a href="tel:+9199999999" data-cursor="disable">
                +91 99999 99999
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {/* href এর ভেতরে আপনার নিজের সোশ্যাল মিডিয়ার লিংকগুলো বসিয়ে দিন */}
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Gautam Pal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;