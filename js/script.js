const header = document.querySelector('.scroll_here');
window.addEventListener('scroll', () => {
    if (window.scrollY > 920) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".main_page_btn");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var targetId = this.getAttribute("action");
        var targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtns = document.querySelectorAll(".menu_a");
    scrollBtns.forEach((scrollBtn) => {
      scrollBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      });
    });
  });

function initMap() {
    var myLatLng = { lat: 50.00633084759501, lng: 36.23747793159957 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Golden Travel'
    });
}

