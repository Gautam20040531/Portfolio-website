import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
// ফিক্স: gsap-trial এর splitText ইম্পোর্ট রিমুভ করা হয়েছে

// GSAP ইম্পোর্ট করা হলো রিফ্রেশ করার জন্য
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      // ফিক্স: setSplitText() রিমুভ করা হয়েছে কারণ এটি পেইড প্লাগিন ব্যবহার করছিল
      setIsDesktopView(window.innerWidth > 1024);
      // উইন্ডো রিসাইজ হলেও GSAP কে রিফ্রেশ করতে বলা হলো
      ScrollTrigger.refresh();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // নতুন ফিক্স: ResizeObserver দিয়ে কন্টেন্ট লোড হওয়ার পর GSAP রিফ্রেশ করা
  useEffect(() => {
    const smoothContent = document.getElementById("smooth-content");
    let resizeObserver: ResizeObserver | null = null;

    if (smoothContent) {
      resizeObserver = new ResizeObserver(() => {
        // যখনই TechStack লোড হবে বা হাইট চেঞ্জ হবে, GSAP নতুন করে মাপ নিয়ে নেবে
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(smoothContent);
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Lenis Smooth Scroll Integration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const gsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(gsapTicker);
      lenis.destroy();
    };
  }, []);

  // Dynamic Slash-based URL Routing & Scroll Synchronization
  useEffect(() => {
    const sections = [
      { id: "landingDiv", path: "/" },
      { id: "about", path: "/about" },
      { id: "what-i-do", path: "/what-i-do" },
      { id: "career", path: "/career" },
      { id: "work", path: "/work" },
      { id: "contact", path: "/contact" },
    ];

    const triggers: ScrollTrigger[] = [];

    // 1. Create ScrollTriggers to update the URL dynamically on scroll
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              window.history.replaceState(null, "", sec.path);
            }
          },
        });
        triggers.push(trigger);
      }
    });

    // 2. Handle initial page load routing (e.g. refresh at /about or /work)
    const initialPath = window.location.pathname;
    if (initialPath && initialPath !== "/") {
      const matched = sections.find((s) => s.path === initialPath);
      if (matched) {
        setTimeout(() => {
          const el = document.getElementById(matched.id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 1200); // Wait for components to load and 3D character initialization
      }
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;