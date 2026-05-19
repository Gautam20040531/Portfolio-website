import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

// ফিক্স: gsap-trial/ScrollSmoother রিমুভ করা হয়েছে
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Handle navbar anchor smooth scrolls & dynamic pathnames
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = element.getAttribute("data-href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            const path = targetId === "#" ? "/" : targetId.replace("#", "/");
            window.history.pushState(null, "", path);
          }
        }
      });
    });

    // Handle logo title clicks to scroll to top and reset path to /
    const logoLink = document.querySelector(".navbar-title");
    if (logoLink) {
      logoLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      });
    }
  }, []);
  
  return (
    <>
      <div className="header">
        <a href="/" className="navbar-title" data-cursor="disable">
          Gautam Pal
        </a>
        <a
          href="mailto:gp2285173@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          gp2285173@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;