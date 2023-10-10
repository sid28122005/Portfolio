// =============================================
// creating a navbar component
// =============================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// =============================================
// creating a portfolio tabbed component
// =============================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);


    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => 
        curElem.classList.remove("p-image-not-active")
    );
})

// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2300
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const myJsmedia = () => {
    if(widthSize.matches) {
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
      });
    } else {
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
      });
    }
  };

  const widthSize = window.matchMedia("(max-width: 780px)");
  //call listner funtion at run time
  myJsmedia(widthSize);
  // attach listener function on state changes
  widthSize.addEventListener("change", myJsmedia);


  //scroll to top button

  const heroSection = document.querySelector(".section-hero");
  const footerElem = document.querySelector(".section-footer");

  const scrollElement = document.createElement("div");
  scrollElement.classList.add("scrollTop-style");

  scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

  footerElem.after(scrollElement);

  const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth"});
  };

  scrollElement.addEventListener("click",scrollTop);

  //smooth scrolling effects

  const portfolioSec = document.querySelector(".section-portfolio");
  const contactSec = document.querySelector(".section-contact");

  document.querySelector(".portfolio-link").addEventListener("click", () => {
    portfolioSec.scrollIntoView({ behavior: "smooth"});
  });

  document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSec.scrollIntoView({ behavior: "smooth"});
  });


  //counter number

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    //console.log(entry);
    if(!entry.isIntersecting) return;

    const couterNum = document.querySelectorAll(".counter-numbers");

    const speed = 10;

    couterNum.forEach((curElem) => {
      const updateNumber = () => {
          const targetNumber = parseInt(curElem.dataset.number);
          const initialNum = parseInt(curElem.innerText);
          const incrementNumber = Math.trunc(targetNumber / speed);
          if(initialNum < targetNumber) {
              curElem.innerText = `${initialNum + incrementNumber}+`;
              setTimeout(updateNumber, 10);
          }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);  

//lazy loading images

// const imgRef = document.querySelector("img[data-src]");

// const lazyImg = (entries) => {
//   const [entry] = entries;
//   console.log(entry);
//   if(!entry.isIntersecting) return;
//   entry.target.src = imgRef.dataset.src;
// };

// const imgObserver = new IntersectionObserver(lazyImg, {
//   root:null,
//   threshold:0, 
// });

// imgObserver.observe(imgRef);