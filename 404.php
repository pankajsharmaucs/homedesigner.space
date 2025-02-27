
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
            <div class="row   justify-content-center py-md-5" >
                  <div class="col-12 text-center col-md-6">
                    <div>
                        <img src="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png" alt="" width="150px">
                    </div>
                    <h1 class="contact_text py-md-5 py-3">Item Not Found</h1>
                    <a href="<?= $base_url ?>" class="btn btn-outline-dark" style="width:200px;" >Home</a>
                  </div>
            </div>
         </div>
      </div>
      <!-- contact section end -->


      <?php include('footer.php');?>