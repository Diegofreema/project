








const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents =>{
            tabContents.classList.remove("skills-active");
        })
        target.classList.add("skills-active");

        tabs.forEach(tab =>{
            tab.classList.remove("skills-active");
        })
        tab.classList.add("skills-active");
    })
})


var mixerPortfolio = mixitup(".work-container", {
    selectors: {
        target: ".work-card"
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelector(".work_filters");
const span = document.querySelectorAll(".work_item");

span.forEach(spans => {
    spans.addEventListener("click", function(){
        linkWork.querySelector(".active-work").classList.remove("active-work");
        spans.classList.add("active-work");
    });
});


const modalViews = document.querySelectorAll(".services-modal"),
    modelBtns = document.querySelectorAll(".services-button"),
    modalCloses = document.querySelectorAll(".services-modal-close");

    let modal = function(modalClick) {
        modalViews[modalClick].classList.add("active-modal")
    }

    modelBtns.forEach((modelBtn, i) => {
        modelBtn.addEventListener("click", () => {
            modal(i);
        })
    })

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener("click", () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove("active-modal")
            });
        })
    })




    var swiper = new Swiper(".testimonials-container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            576: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
            
          },
      });



      const inputs = document.querySelectorAll(".input");

      function focucf() {
        let parent = this.parentNode;
        parent.classList.add("focus");
      }

      function blurfunc() {
        let parent = this.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
      }

      inputs.forEach((input) => {
        input.addEventListener("focus", focucf);
        input.addEventListener("blur", blurfunc);
      });



      const sections = document.querySelectorAll("section[id]");

      window.addEventListener("scroll", navHighlighter);
      function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50,
            sectionid = current.getAttribute("id");



            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector(".nav-menu a[href*=" + sectionid + "]").classList.add("active-link")
            }
            else{
                document.querySelector(".nav-menu a[href*=" + sectionid + "]").classList.remove("active-link")
            }
        })
      }




      const navMenu = document.getElementById("sidebar"),
      navtog = document.getElementById("nav-tog"),
      navclose = document.getElementById("nav-close");



      if(navtog){
        navtog.addEventListener("click", () => {
            navMenu.classList.add("show")
        });
      }
      if(navclose){
        navclose.addEventListener("click", () => {
            navMenu.classList.remove("show")
        });
      }