<!-- footer section start -->
<div class="footer_section ">
         <div class="row mb-3 p-5 justify-content-center  ">
             <div class=" col-12  text-center">
             <h1  class="text-white font-bold downlaod_broucher_text">Designs & Portfolio Brouchers PDF</h1>
             <a href="#" class="btn btn-outline-light " style="width:200px" >Download </a>
             </div> 
         </div>

         <div class="container layout_padding">
            <div class="row">
               <div class="col-lg-3 col-sm-6">
                  <h1 class="customer_text">Company name</h1>
                  <p class="footer_lorem_text">Address : Badarpur, New Delhi, Pincode-110044
                  </p>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h1 class="customer_text">Wooden Products</h1>
                  <ul class="footer_links">
                     <li><a href="product/wooden/furnitures">Wooden Furnitures</a></li>
                     <li><a href="product/wooden/Sofa">Wooden Sofa</a></li>
                     <li><a href="product/wooden/Chair">Wooden Chair</a></li>
                     <li><a href="product/wooden/table">Wooden Table</a></li>
                     <li><a href="product/wooden/bed">Wooden  Bed</a></li>
                     <li><a href="product/wooden/dinning-table">Wooden Dinning Table</a></li>
                  </ul>

               </div>
               <div class="col-lg-3 col-sm-6">
                  <h1 class="customer_text">Acrylic Products</h1>
                  <ul class="footer_links">
                     <li><a href="product/acrylic/dinnig-table?">Acrylic Carving</a></li>
                     <li><a href="product/acrylic/bed?">Acrylic Carving</a></li>
                     <li><a href="product/acrylic/chair?">Acrylic Chair</a></li>
                     <li><a href="product/acrylic/railing?">Acrylic railing</a></li>
                  </ul>

               </div>
               <div class="col-lg-3 col-sm-6">
                  <h1 class="customer_text">UseFul Links</h1>
                  <ul class="footer_links">
                     <li><a href="shop">Shop</a></li>
                     <li><a href="product-category">Products Category</a></li>
                     <li><a href="category/wooden">Wooden</a></li>
                     <li><a href="category/acrylic">Acrylic</a></li>
                     <li><a href="contact">Contact</a></li>
                     <li><a href="aboutus">About Us</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <!--  footer section end -->
      <!-- copyright section start -->
      <div class="copyright_section">
      <div class="container">
         <p class="copyright_text">Home Designer - <?= date('Y');?> All Rights Reserved.</p>
      </div>

      <!-- WhatsApp Icon -->
      <a href="https://wa.me/918800637982" target="_blank" id="whatsapp-button">
         <img src="images/WhatsApp_icon.png" alt="WhatsApp" />
      </a>
      
      <!-- copyright section end -->
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      <!-- sidebar -->
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      <!-- javascript --> 
      <script src="js/owl.carousel.js"></script>
      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>  
      
      <!-- Swiper JS -->
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

      <!-- Initialize Swiper -->
      <script>
         var swiper = new Swiper(".slider1 .mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 10,
            pagination: {
            el: ".slider1 .swiper-pagination",
            clickable: true,
            },
         });
      </script>

      <!-- ========Slider 2======== -->

      <script>
         var swiper = new Swiper(".slider2 .mySwiper", {
         effect: "coverflow",
         grabCursor: true,
         centeredSlides: true,
         slidesPerView: "auto",
         coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
         },
         pagination: {
            el: ".slider2 .swiper-pagination",
         },
         loop: true,
         });
      </script>

      <!-- ============cude===slider===== -->
      <script>
         var swiper = new Swiper(".slider3 .mySwiper", {
            effect: "cube",
            grabCursor: true,
            loop: true, // Enable looping
            autoplay: {
                  delay: 1500, // Adjust the delay (in ms) between slides
                  disableOnInteraction: false, // Ensures autoplay doesn't stop when interacting with the swiper
            },
            cubeEffect: {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
            }
         });
      </script>


   </body>
</html>