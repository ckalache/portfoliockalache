import { animate, scroll } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";

/* "Selected Projects" section title animation  */

const projectsTitle = document.querySelector(".main .content > h2");

const projectsTitleAnim = animate(
  projectsTitle, 
  { x: [window.innerWidth, 0] },
  { ease: "linear" }
);

scroll(projectsTitleAnim, {
  target: projectsTitle,
  offset: ["start end", "start center"]
});

/* Project info fade-in animation */

const projectsInfos = document.querySelectorAll(".main .content .project .info");
projectsInfos.forEach(info => {
  const anim = animate(info, { opacity: [0, 1] }, { ease: "linear" });
  scroll(anim, {
    target: info,
    offset: ["start end", "end center"]
  });
});

/* "About" section title animation */

const aboutTitle = document.querySelector(".main .about h2");

const aboutTitleScaleAnim = animate(aboutTitle, { scale: [1, 0.55] }, { ease: "linear" });

scroll(aboutTitleScaleAnim, {
  target: aboutTitle,
  offset: ["end end", "start 50%"]
});

const aboutTitlePosAnim = animate(
  aboutTitle,
  { x: [0, -450], y: [0, 240] }, 
  { ease: "linear" }
);

scroll(aboutTitlePosAnim, {
  target: aboutTitle,
  offset: ["start 50%", "end 20%"]
});

/* About text fade-in animation */

const aboutText = document.querySelector(".main .about .card p");

const aboutTextAnim = animate(aboutText, { opacity: [0, 1] }, { ease: "linear" });

scroll(aboutTextAnim, {
  target: aboutText,
  offset: ["start end", "end center"]
});