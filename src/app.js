const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "0%",
        end: "100%",
        // markers: true,
        scrub: true,
        pin: true,
    },
});

tl.fromTo(
    ".hero",
    { clipPath: "circle(5%)" },
    { clipPath: "circle(75%)", duration: 3 }
);

tl.fromTo(
    ".map",
    { opacity: 1, scale: 0.6 },
    { opacity: 0, scale: 0, duration: 2 },
    "-=3"
);

tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".sub-title", { opacity: 0 }, { opacity: 1, duration: 1 });
