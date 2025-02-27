
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>404 - Home Designer</title>
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
               <div class="col-md-12 text-center" >
                  <h1 class="contact_text">Item Not Found</h1>
                  <a href="<?= $base_url ?>" class="btn btn-outline-dark">Home</a>
                </div>
            </div>
         </div>
      </div>
      <!-- contact section end -->


      <?php include('footer.php');?>