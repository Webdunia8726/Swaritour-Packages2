document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".Header-containerr");
    if (headerContainer) {
      headerContainer.innerHTML = `
        <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h4 class="text-primary m-0"><img src="img/SWARI-LOGO (1).png" alt="">
                <img src="img/googlelogo.png" alt="">
                <span class="text-white fs-6">4.9 stars</sapn>
                </h4>
                <!-- <img src="img/logo.png" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link ">Home</a>
                    <a href="about.html" class="nav-item nav-link">About Us</a>
<div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tours & Packages</a>
                        <div class="dropdown-menu m-0">
                            <a href="domesticpackage.html" class="dropdown-item">Domestic Packages</a>
                            <a href="internationalpackage.html" class="dropdown-item">International Packages</a>
                                                       <a href="Pilgrimage Packages.html" class="dropdown-item">Pilgrimage Packages</a>

                        </div>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                        <div class="dropdown-menu m-0">
                            <a href="https://swaritravels.in/air-tickets/" class="dropdown-item">Air Tickets</a>
                            <a href="https://swaritravels.in/travel-insurance/" class="dropdown-item">Travel Insurance</a>
                                                       <a href="https://swaritravels.in/hotel-booking/" class="dropdown-item">Hotel Booking</a>
                                                       <a href="https://swaritravels.in/passport-visa-assistance/" class="dropdown-item">Passport & Visa Assistance</a>
                                                                                                              <a href="https://swaritravels.in/car-rentals/" class="dropdown-item">Car Rentals</a>


                        </div>
                    </div>
                    
                    <a href="gallery.html" class="nav-item nav-link">Gallery</a>
                    
                    <a href="https://g.co/kgs/m3vrBzd" class="nav-item nav-link">Reviews</a>

                </div>
                <a href="contact.html" class="btn btn-primary rounded-pill py-2 px-4">Contact Us</a>
            </div>
        </nav>

      
    </div>
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var FooterContainer = document.querySelector(".Footer-containerr");
    if (FooterContainer) {
      FooterContainer.innerHTML = `
        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Company</h4>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Privacy Policy</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                    <a class="btn btn-link" href="">FAQs & Help</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>A701 I Annapurna Ashish, Khambalpada Rd, opp. Manjunatha College, Dombivli East, Maharashtra 421201</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91-9372778974</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>bhushandeo@swaritravels.in | swaritravels@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/swaritravels/"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/swaritravels"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Gallery</h4>
                    <div class="row g-2 pt-2">
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img/package-1.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img/package-2.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img/package-3.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img/package-2.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img/package-3.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="img/package-1.jpg" alt="">
                        </div>
                                               <img class="img-fluid bg-light p-1" src="img/visalogo.png" alt="">

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Newsletter</h4>
                    <p>Subscribe for exclusive tour packages, discounts, and travel tips!</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">

                    
                </div>
            </div>
        </div>
    </div>
  
      `;
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    var TopContainer = document.querySelector(".Top-containerr");
    if (TopContainer) {
      TopContainer.innerHTML = `
    <div class="container-fluid  px-5 d-none d-lg-block" style="background-color: #e8604c;">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
      <a href="tel:+919372778974">                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+91-9372778974</small>
</a>
                    <a href="">                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>bhushandeo@swaritravels.in | swaritravels@gmail.com</small>

                    </a>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/swaritravels"><i class="fab fa-facebook-f fw-normal"></i></a>
                     <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/swaritravels/"><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
  
      `;
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    var CallContainer = document.querySelector(".Call-button");
    if (CallContainer) {
      CallContainer.innerHTML = `<div class="contact-buttons">
    <a href="tel:9372778974" class="contact-button phone">
        <i class="fas fa-phone-alt"></i>
    </a>
    <a href="https://wa.me/9372778974" class="contact-button whatsapp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
`;
    }
  });
  