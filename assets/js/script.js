// :(

  (function () {
    const data = [
      {
        title: "Качественные материалы и возможность их выбора",
        content:
          "Vestibulum tincidunt nunc leo malesuada adipiscing ac non egestas nullam. At imperdiet cras eu nunc adipiscing lacus. Sed enim vel rhoncus nunc tellus. Bibendum integer quam massa duis lorem gravida.",
      },
      {
        title: "title 2",
        content: "content2",
      },
  
      {
        title: "title 3",
        content: "content 3",
      },
  
      {
        title: "title 4",
        content: "content 4",
      },
    ];
    const easing = "easeOutExpo";
    let target = document.querySelector("#data");
    let tabs = document.querySelectorAll("#selectLayer .set");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].onclick = function () {
        if (!tabs[i].className.includes("active")) {
          for (let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove("active");
          }
          let template = `<div class="title">
                                          <span>${data[i].title}</span>
                                      </div>
                                      <div class="desc">
                                          <span>${data[i].content}</span>
                                      </div>`;
          target.innerHTML = template;
          anime({
            targets: target.querySelector(".title"),
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: easing,
            delay: anime.stagger(100),
          });
          anime({
            targets: target.parentElement,
            translateX: [50, 0],
            opacity: [0, 1],
            easing: easing,
          });
          anime({
            targets: target.querySelector(".desc"),
            translateX: [50, 0],
            opacity: [0, 0.7],
            easing: easing,
          });
          anime({
            targets: target.parentElement.querySelector(".img"),
            translateX: [50, 0],
            easing: easing,
          });
          this.classList.add("active");
        }
      };
    }
  })();
  (function(){
    $scroll.onclick = e => {
        (scroll(0, innerHeight ));
        anime({
            targets: $scroll,
            opacity: [0, 1]
        })
    }
  })();

(function(){
  const expectedScroll = 1330
  window.onscroll = e => {
    if (document.body.clientHeight - scrollY < expectedScroll){
      anime({
        targets: $back,
        scale: 1,
        opacity: 1
      })
    } else {
      anime({
        targets: $back,
        opacity: 0,
        scale: 0
      })
    }
  }
  $back.onclick = e => {
    scroll(0, 0)
  }
})();

(function(){
  $toggler.onclick = e => {
    $_hamburger.Toggle('show');
    anime({
      targets: $_hamburger.children[0].children,
      translateX: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 700,
      easing: 'easeOutExpo'
    })
  }
  
})();

(
  function() {
    function check(){
        document.querySelectorAll('.splide').forEach(splide => {
          if(window.innerWidth < 500) {
            splide.css('display', 'block');
            $ourProjects.css('display', 'none');
            $banners.css('display', 'none');
            $valunteer.css('display', 'none');
          } else {
            $valunteer.css('display', 'block');
            splide.css('display', 'none');
            $ourProjects.css('display', 'block');
            $banners.css('display', 'block')
          }
        })
    }
    window.onresize = e => {
      check()
    }
    check()
  }
)()

;function openGateFor(someOne, tabTrigger) {
  console.log(someOne)
  var target = someOne || !1
  const easing = "easeOutExpo" || ''
  if (target || target == false){
      var el = document.querySelectorAll('#planHouse .preview');
      console.log(el[0])
      el.forEach(e => e.classList.remove('active'))
      document.querySelectorAll(".tabs .tab").forEach(tab => tab.classList.remove('active'))
      tabTrigger.classList.add('active')
      if(el.length) {
          var current = el[someOne];
          var info = current.querySelector(".info");
          current.classList.add('active')
          anime({
            targets: current.querySelector(".preview .img"),
            opacity: [0, 1],
            translateX: [-300, 0],
            easing: easing,
          });
          anime({
            targets: info.querySelectorAll("p"),
            opacity: [0, 1],
            translateX: [-100, 0],
            easing: easing,
            delay: anime.stagger(100),
          });
          anime({
            targets: info,
            translateY: [-200, 0],
            opacity: [0, 1],
            easing: easing,
          });
          anime({
            targets: info.querySelector(".title"),
            opacity: [0, 1],
            easing: easing,
            translateX: [200, 0],
          });
      }
  } 
}

document.querySelectorAll(".tabs .tab").forEach((a, b, c) => {
  a.onclick = function() {openGateFor(b, this)}
})