<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Home Designer</title>
      <?php include('links.php'); ?>

   </head>
   <body>
      <!-- header section start -->
      <div class="header_section">
         <?php include('header.php'); ?>
      </div>
      <!-- header section end -->
      <!-- contact section start -->
      <div class="contact_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <h1 class="contact_text">CONTACT US</h1>
                  <div class="mail_sectin">
                     <input type="text" class="email-bt" placeholder="Name" name="Name">
                     <input type="text" class="email-bt" placeholder="Email" name="Name">
                     <input type="text" class="email-bt" placeholder="Phone Number" name="Name">
                     <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                     <div class="send_bt"><a href="#">SEND</a></div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="map_main">
                        <div class="map-responsive">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28046.25679750797!2d77.29270446102129!3d28.516202896592795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce65f77cae949%3A0x7c768dbb3f78e57!2sBadarpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740635473488!5m2!1sen!2sin" width="600" height="500" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe></div>
                     </div>
               </div>
            </div>
         </div>
      </div>
      <!-- contact section end -->
      
      <?php include('footer.php');?>