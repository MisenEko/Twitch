  <?php
  session_start();
  include 'curl_func_return_all.php';
  $json = doCurl('https://id.twitch.tv/oauth2/token?client_id=bgbezb2vov7jc4twxauhw3yh30ubbx&client_secret=xfxj665jx7i5v8ogwf7b2iwtd6s2pe&grant_type=client_credentials', 'POST');
  
  ?>

<!doctype html>
<html lang="fr">
  <head>

    <meta charset="UTF-8">
    <meta name="description" content="Une application web ayant pour but d'afficher des streams twitch GTA RP pour les serveurs altica, faily, gta life et 21 jump click pour vous permettre de découvrir de nouveau streamers.">
    <meta name="keywords" content="GTA, RP, FailyV, Altica RP, GTA Life, 21 jump click">
    <meta name="author" content="Fourquet Jean-Sébastien">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link href="bootstrap-4.0.0-dist/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="style.css">    
    <link rel="stylesheet" href="slider.css">

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://embed.twitch.tv/embed/v1.js"></script>

    <!-- jquery /twitch embed api /  boostrap -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="bootstrap-4.0.0-dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/1310f53523.js"></script>
    <!-- CSS -->


    <title>GTA RP French Channel</title>
  </head>


  <body id="light">

    <header>
      <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
         <span class="badge badge-warning">On air</span>
        <a class="navbar-brand" href="#" id="nav-title">Altica</a>
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="altica">
                <i></i>
                 Altica RP
                 <span class="badge badge-warning" id="0"></span>
                </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="faily">
                <i></i>
                  Faily V
                  <span class="badge badge-warning" id="1"></span>
               
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="gtalife">
                <i></i>
                  GTA Life
                  <span class="badge badge-warning" id="2"></span>
                
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="21JumpClick">
                <i></i>
                  21 Jump Click
                  <span class="badge badge-warning" id="3"></span>
                
              </a>             
          </ul>
          <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-lightbulb">                
              </i>
             
            </a>
          </li>
        </ul>
        </div>
      </nav>
    </header>


    <div class='container-lg'>

      <div class="row row-change main-stream"> 

        <div class="col-lg-8 embed-responsive embed-responsive-16by9">
          <div class="embed-responsive-item" id="twitch-embed-main"></div> 
        </div>

        <div class="col-lg-4" id="streamers-info">
          <div class="row justify-content-center ">
            <div class="col-md-12 text-center" id="streamer-logo"></div>
          </div>
          <div class="container">
            <div class="row justify-content-center info-stream "  id=''>
              <div class="col-md-12 text-center"  id="streamer"></div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-center info-stream" id="">
              <div class="col-md-12 text-center" id="stream-title"></div>
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-center info-stream" id="twitch-link" style="background:#343a40;">
              <a id="button" href="#" class="col-lg-12" style="padding-left: 0;" ><button class="btn btn-primary" style="background-color:#9147ff; border-color:#9147ff;" >Regardez sur Twitch</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>












  <!-- slider -->
    <div class="wrap">
      <div class="window">
        <div id="carousel"></div>
      </div>
      <span class="fas fa-chevron-left" id="prev"></span>
      <span class="fas fa-chevron-right"id="next"></span>
    </div>


    

</br>


  <!-- footer -->

    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: #343a40;color:white;">
        Site web crée par : 
        <a class="text-white" href="http://jfourquet.com">jfourquet.com</a>
      </div>
      <!-- Copyright -->
    </footer>

    <!-- javascript -->
    <script type='text/javascript'>
        let answser = ('<?php echo json_encode($json); ?>');
        let key = answser.split('"')
        sessionStorage.setItem('untruc', key[4] )        
            </script>

    <script src="js/slider.js"></script>
    <script src="js/twitchAjax.js"></script>
    <script src="js/showStreams.js"></script>
    <script src="js/main.js"></script>

  </body>
</html>