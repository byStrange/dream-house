const easing = "easeOutExpo";
function changeTo(e, a) {
  var t = document.querySelectorAll(".section-3 .container .col  .card"),
    s = t[e];
  t.forEach((e) => e.classList.remove("active")),
    document
      .querySelectorAll("#selectLayer .set")
      .forEach((e) => e.classList.remove("active")),
    a.classList.add("active"),
    s.classList.add("active"),
    anime({
      targets: s.querySelector(".title"),
      translateX: [-50, 0],
      opacity: [0, 1],
      easing: easing,
      delay: anime.stagger(100),
    }),
    anime({
      targets: s.parentElement,
      translateX: [50, 0],
      opacity: [0, 1],
      easing: easing,
    }),
    anime({
      targets: s.querySelector(".desc"),
      translateX: [50, 0],
      opacity: [0, 0.7],
      easing: easing,
    }),
    anime({
      targets: s.parentElement.querySelector(".img"),
      translateX: [50, 0],
      easing: easing,
    });
}
function openGateFor(e, a) {
  var t = e || !1;
  if (t || 0 == t) {
    var s = document.querySelectorAll("#planHouse .preview");
    if (
      (s.forEach((e) => e.classList.remove("active")),
      document
        .querySelectorAll(".tabs .tab")
        .forEach((e) => e.classList.remove("active")),
      a.classList.add("active"),
      s.length)
    ) {
      var c = s[e],
        n = c.querySelector(".info");
      c.classList.add("active"),
        anime({
          targets: c.querySelector(".preview .img"),
          opacity: [0, 1],
          translateX: [-300, 0],
          easing: easing,
        }),
        anime({
          targets: n.querySelectorAll("p"),
          opacity: [0, 1],
          translateX: [-100, 0],
          easing: easing,
          delay: anime.stagger(100),
        }),
        anime({
          targets: n,
          translateY: [-200, 0],
          opacity: [0, 1],
          easing: easing,
        }),
        anime({
          targets: n.querySelector(".title"),
          opacity: [0, 1],
          easing: easing,
          translateX: [200, 0],
        });
    }
  }
}
($scroll.onclick = (e) => {
  scroll(0, innerHeight), anime({ targets: $scroll, opacity: [0, 1] });
}),
  (window.onscroll = (e) => {
    document.body.clientHeight - scrollY < 1330
      ? anime({ targets: $back, scale: 1, opacity: 1 })
      : anime({ targets: $back, opacity: 0, scale: 0 });
  }),
  ($back.onclick = (e) => {
    scroll(0, 0);
  }),
  ($toggler.onclick = (e) => {
    $_hamburger.Toggle("show"),
      anime({
        targets: $_hamburger.children[0].children,
        translateX: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 700,
        easing: "easeOutExpo",
      });
  }),
  (function () {
    function e() {
      document.querySelectorAll(".splide").forEach((e) => {
        window.innerWidth < 500
          ? (e.css("display", "block"),
            $ourProjects.css("display", "none"),
            $banners.css("display", "none"),
            $valunteer.css("display", "none"))
          : ($valunteer.css("display", "block"),
            e.css("display", "none"),
            $ourProjects.css("display", "block"),
            $banners.css("display", "block"));
      });
    }
    (window.onresize = (a) => {
      e();
    }),
      e();
  })(),
  document.querySelectorAll("#selectLayer .set").forEach(
    (e, a) =>
      (e.onclick = function () {
        changeTo(a, this);
      })
  ),
  document.querySelectorAll(".tabs .tab").forEach((e, a, t) => {
    e.onclick = function () {
      openGateFor(a, this);
    };
  });
