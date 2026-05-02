import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }
  
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // হিরো সেকশনের টেক্সট অ্যানিমেশন (SplitText ছাড়াই)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.2,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}