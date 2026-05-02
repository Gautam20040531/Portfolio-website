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
import setSplitText from "./utils/splitText";

// GSAP ইম্পোর্ট করা হলো রিফ্রেশ করার জন্য
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
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

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
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