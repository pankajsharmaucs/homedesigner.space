<?php

var_dump($_GET);
die();

?>

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
         <!-- banner section start -->
         <div class="banner_section layout_padding">
            <div class="container">
               <div id="costum_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <h1 class="furniture_text">FURNITURE</h1>
                        <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                        <div class="contact_bt_main">
                           <div class="contact_bt"><a href="contact.php">Contact Us</a></div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <h1 class="furniture_text">FURNITURE</h1>
                        <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                        <div class="contact_bt_main">
                           <div class="contact_bt"><a href="contact.php">Contact Us</a></div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <h1 class="furniture_text">FURNITURE</h1>
                        <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
                        <div class="contact_bt_main">
                           <div class="contact_bt"><a href="contact.php">Contact Us</a></div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
                  <i class=""><img src="images/left-arrow.png"></i>
                  </a>
                  <a class="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
                  <i class=""><img src="images/right-arrow.png"></i>
                  </a>
               </div>
            </div>
         </div>
         <!-- banner section end -->
      </div>
      <!-- header section end -->


      <?php include('footer.php');?>