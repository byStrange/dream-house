(function () {
    const tabs = document.querySelectorAll(".tabs .tab");
    const info = document.querySelector(".info");
    const data = [
      {
        title: "Квартира 146",
        all: "79.02",
        some: "34.29",
        date: "3 квартал 2021",
        price: " 15 300 грн/м",
        img: "assets/images/painted_room.png",
      },
      {
        title: "title2",
        all: "79.02",
        some: "34.29",
        date: "3 квартал 2021",
        price: " 15 300 грн/м",
        img: "assets/images/painted_room.png",
      },
      {
        title: "title3",
        all: "79.02 ",
        some: "34.29 ",
        date: "3 квартал 2021",
        price: " 15 300 грн/м",
        img: "assets/images/painted_room.png",
      },
      {
        title: "title4",
        all: "79.02 ",
        some: "34.18 ",
        date: "3 квартал 2021",
        price: " 15 300 грн/м",
        img: "assets/images/painted_room.png",
      },
      {
        title: "title5",
        all: "79.02",
        some: "34.29",
        date: "3 квартал 2021",
        price: " 15 300 грн/м",
        img: "assets/images/painted_room.png",
      },
    ];
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].onclick = function () {
        if (!this.className.includes("active")) {
          let el = this;
          for (let s = 0; s < tabs.length; s++) {
            tabs[s].classList.remove("active");
          }
          let template = `
                      <div class="title">
                          <span>${data[i].title}</span>
                      </div>
                      <p class="item">Общая площадь <span>|</span> ${data[i].all}м</p>
                      <p class="item">Жилая площадь <span>|</span> ${data[i].some}м</p>
                      <p class="item">Срок сдачи <span>|</span> ${data[i].date}</p>
                      <p class="item last">Цена за м <span>|</span> ${data[i].price}</p>
                      <div class="btn">
                          <span>Оставить заявку</span>
                      </div>
                  `;
          info.innerHTML = template;
          const easing = "easeOutExpo";
          const img = document.querySelector(".preview .img");
          img.querySelector("img").src = data[i].img
            ? data[i].img
            : "assets/images/painted_room.png";
          anime({
            targets: img,
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
          el.classList.add("active");
        }
      };
    }
  })();

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
})()