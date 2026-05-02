import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// আপনার প্রজেক্টের রিয়েল ডেটা অ্যারে
const projects = [
  {
    name: "TEMPLE-PROJECT",
    category: "Live Streaming Engine",
    tools: "React, Node.js, MongoDB, FFmpeg, FLV.js",
    image: "/images/placeholder.webp", // পরে এখানে আপনার আসল ইমেজের পাথ বসিয়ে দেবেন
  },
  {
    name: "Texsa Modern Store",
    category: "E-Commerce Platform",
    tools: "React, Tailwind CSS, Stripe, Sanity",
    image: "/images/placeholder.webp",
  },
  {
    name: "Smart Home Switchboard",
    category: "IoT & Home Automation",
    tools: "React, Node.js, C++, ESP32",
    image: "/images/placeholder.webp",
  },
  {
    name: "Attendance App",
    category: "Smart Attendance System",
    tools: "React, Node.js, RFID, ESP32",
    image: "/images/placeholder.webp",
  },
  {
    name: "Online Bookstore",
    category: "Full-Stack Web App",
    tools: "React, Express, MongoDB, Node.js",
    image: "/images/placeholder.webp",
  },
  {
    name: "Sree Guru Electric",
    category: "Business Website",
    tools: "Next.js, Tailwind CSS, Framer Motion",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    // ফিক্স: backgroundColor: "#000" যোগ করা হলো যাতে ওভারল্যাপ হলেও পেছনের থ্রিডি বল দেখা না যায়
    <div
      className="work-section"
      id="work"
      style={{ position: "relative", zIndex: 10, backgroundColor: "#000" }}
    >
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {/* ডামি লুপের বদলে আপনার রিয়েল projects অ্যারে ম্যাপ করা হলো */}
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;