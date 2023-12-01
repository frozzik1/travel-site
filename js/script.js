 const header = document.querySelector('.scroll_here');
const headerImage = document.querySelector('.logo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 920) {
        header.classList.add('scrolled');
        headerImage.src = 'images/logo2.png';

    } else {
        header.classList.remove('scrolled');
        headerImage.src = 'images/logo.png';
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
  

function initMap() {

    var myLatLng = { lat: 50.00651325201618, lng: 36.23763404345009 }; 

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

