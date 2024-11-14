import { animate, scroll } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";

/* Hero animations */

const heroRect = document.querySelector(".main .hero .spotlight .rect");
const heroCreative = document.querySelector(".main .hero .spotlight .text #creative");
const heroWeb = document.querySelector(".main .hero .spotlight .text #web");
const heroGraphic = document.querySelector(".main .hero .spotlight .text #graphic");
const heroDesigner = document.querySelector(".main .hero .spotlight .text #designer");
const heroIndicator = document.querySelector(".main .hero .spotlight .indicator");

animate(
  heroRect,
  { x: [-window.innerWidth, 0] },
  { ease: "easeOut", duration: 1.2 }
);

animate(
  heroCreative,
  { y: [-90, 0], opacity: [0, 1] },
  { ease: "easeOut", duration: 0.7 }
);

animate(
  heroWeb,
  { x: [-160, 0], opacity: [0, 1] },
  { ease: "easeOut", duration: 0.7 }
);

animate(
  heroGraphic,
  { x: [180, 0], opacity: [0, 1] },
  { ease: "easeOut", duration: 0.7 }
);

animate(
  heroDesigner,
  { y: [120, 0], opacity: [0, 1] },
  { ease: "easeOut", duration: 0.7 }
);

animate(
  heroIndicator,
  { x: [window.innerHeight / 2, 0], y: [-500, 0] },
  { ease: "easeOut", duration: 1.3 }
);

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