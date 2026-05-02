import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

// ফিক্স: gsap-trial/ScrollSmoother রিমুভ করা হয়েছে
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // ফিক্স: পেইড স্ক্রল-স্মুথারের বদলে ব্রাউজারের নিজস্ব ফ্রি স্মুথ-স্ক্রলিং ব্যবহার করা হলো
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let targetId = element.getAttribute("data-href");
          if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              // Native Smooth Scroll
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      });
    });
  }, []);
  
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
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