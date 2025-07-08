function highlightTab(clickedTab) {
  const tabs = document.querySelectorAll('.nav-link');

  tabs.forEach(tab => {
    tab.classList.remove('text-primary');
    tab.classList.add('text-black');
  });

  clickedTab.classList.remove('text-black');
  clickedTab.classList.add('text-primary');
}
const scrollBtn = document.getElementById("scrollToTop");


window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});


scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll('input[name="billing"]');

  radios.forEach((radio) => {
    radio.addEventListener('change', function () {
      if (this.checked) {
        const target = this.getAttribute('data-bs-target');

        document.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('show', 'active');
        });


        const tabContent = document.querySelector(target);
        if (tabContent) {
          tabContent.classList.add('show', 'active');
        }
      }
    });
  });
});

var form = document.getElementById("subscribeForm");
var emailInput = document.getElementById("exampleFormControlInput1");

form.addEventListener("submit", function (e) {
  if (!emailInput.value.trim()) {
    emailInput.classList.add("is-invalid");
    e.preventDefault();
  } else {
    emailInput.classList.remove("is-invalid");
  }
});
$(".owl-carousel").owlCarousel(
  {

    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<i class="fa-solid fa-arrow-left-long bg-primary text-white rounded-start-circle text-center p-1 pe-2 ps-2"></i>', '<i class="fa-solid fa-arrow-right-long rounded-end-circle bg-primary text-white text-center p-1 pe-2 ps-2 ms-3"></i>',],
    responsive: {
      0: {
        items: 1
      },

      1000: {
        items: 2
      }
    }
  }
);


const counters = document.querySelectorAll('.counter-number');
const duration = 2000;

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const steps = 60;
  const increment = target / steps;
  const intervalTime = duration / steps;

  const update = setInterval(() => {
    count += increment;
    if (count >= target) {
      counter.innerText = target;
      clearInterval(update);
    } else {
      counter.innerText = Math.round(count);
    }
  }, intervalTime);
});


const tabButtons = document.querySelectorAll('.tab-btn');
const items = document.querySelectorAll('.tab-item');

function filterTabs(category) {
  tabButtons.forEach(btn => {
    const btnCategory = btn.getAttribute('data-category');
    btn.classList.remove('active-tab', 'text-primary');
    if (btnCategory === category) {
      btn.classList.add('active-tab', 'text-primary');
    }
  });

  items.forEach(item => {
    item.classList.remove('show', 'col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'col-lg-6');

    const isMatch = category === 'all' || item.classList.contains(category);
    if (isMatch) {
      item.classList.add('show', 'col-12');

      if (category === 'all') {

        item.classList.add('col-md-6', 'col-lg-4');
      } else {
        item.classList.add('col-md-6', 'col-lg-6');
      }
    }
  });
}


window.onload = () => {
  filterTabs('all');
};


tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    filterTabs(category);
  });
});

