// Lucide
lucide.createIcons();

//Lenis
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// gsap
gsap.registerPlugin(ScrollTrigger);

function navHeroSection() {
  let tl = gsap.timeline();

  tl.from("#logo, #navBAR, #reservebtn", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.1,
    ease: "power3.out",
  });

  tl.from("#leftheadings", {
    x: -300,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out",
  });

  tl.from(
    "#heroPIZZA",
    {
      x: 100,
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.2",
  );
}
navHeroSection();

function aboutUs() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
      end: "top 30%",
      scrub: 1,
    },
  });

  tl2.from(
    "#leftAboutUs",
    {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "same",
  );

  tl2.from(
    "#rightAboutUs",
    {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "same",
  );
}
aboutUs();

function chooseUs() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#Choose",
      start: "top 70%",
      end: "+=400",
      scrub: 1,
    },
  });

  tl3.from("#CHooseUs", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });
}
chooseUs();

function menuCards() {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#menu",
      start: "top 70%",
      end: "+=500",
      scrub: 1,
    },
  });

  tl4.from("#Menu_Section", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  tl4.from(
    "#menuBtns",
    {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5",
  );

  tl4.from(
    "#menuCard1",
    {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "<",
  );

  tl4.from(
    "#menuCard4",
    {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "<",
  );

  tl4.from(
    "#menuCard2",
    {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "<",
  );

  tl4.from(
    "#menuCard3",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "<",
  );

  tl4.from("#menuButton", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });
}

menuCards();

function gallary() {
  gsap.from("#imageHeadings", {
    scrollTrigger: {
      trigger: "#gallary",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },

    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.utils
    .toArray(
      "#imageGrid1, #imageGrid2, #imageGrid3, #imageGrid4, #imageGrid5, #imageGrid6, #imageGrid7, #imageGrid8, #imageGrid9",
    )
    .forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },

        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    });
}

gallary();

function registration() {
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#registration",
      start: "top 70%",
      end: "+=400",
      scrub: 1,
    },
  });

  tl6.from("#regHeadings", {
    x: 40,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  tl6.from(
    "#regForm",
    {
      x: 50,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    },
    "-=0.3",
  );
}

registration();

function ctaSection() {
  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#CTA",
      start: "top 70%",
      end: "top 30%",
      scrub: 1,
    },
  });

  tl7.from("#ctaLeftContent, #ctaButtons, #ctaCard1", {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });
}
ctaSection();
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});