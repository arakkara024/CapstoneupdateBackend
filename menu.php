<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="Images/Background/Logo.png" type="image/x-icon">
    <link rel="stylesheet" href="Css/menu.css">
    <link rel="stylesheet" href="Css/animations.css">
    <title>Menu</title>
</head>
<body>
     <!-- Portrait Notification (Alert) -->
     <div class="portrait-notification">
        <div class="cp"></div>
        Please Rotate Your Screen To Landscape
    </div>

    <!-- Wrapper -->
    <div class="wrapper">

        <!--Black Loader Wrapper -->
        <div class="loader-wrapper" id="loader-wrapper">
            <!-- loader-container -->
           <div class="loader-container" id="loader-container">
               <div class="arvi-container">
                   <div class="arvi-item-container">
                       <div class="arvi-cover"></div>
                       <img src="Images/Characters/arvi/avi 1.png" alt="Arvi" class="arvi">
                   </div>
                   <button disabled class="percent-container" id="percent-container">0 <span class="percent-span">%</span></button>  
               </div>
               <div class="lower-container">
                   <div class="image-container">
                       <img src="Images/Loader/loader-image.PNG" alt="" class="lower-loader-image">
                   </div>
                   <div class="text-container">
                       <h6 class="tip-text">Tip</h6>
                       <h6 class="tip-text">You Can Choose From A Wide Selection Of Power Ups To Boost Avi</h6>
                   </div>
               </div>
           </div>
       </div>


        <!-- Menu Container -->
        <div class="menu-container">
            <img src="Images/Background/Logo.png" alt="Py-venture Logo" class="logo">
            <a href="map.html" class="menu-btn" id="playBtn" onclick="buttonClick()">PLAY</a>
            <div class="menu-btn" id="setting-btn" onclick="buttonClick()">SETTINGS</div>
        </div>
    </div>

    <!-- Setting Modal -->
<div class="setting-modal" id="setting-modal">
    <div class="setting-container">
        <div class="cross-container" id="close" onclick="buttonClick()"><h1 class="cross">+</h1></div>
        <div class="bgm-container">
            <label for="slider">BGM</label>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value="100" class="slider" id="bgVolume" onchange="bgVolumeAdjust()">
            </div>
        </div>
        <div class="sfx-container">
            <label for="slider">SFX</label>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value="100" class="slider" id="sfxVolume" onchange="sfxVolumeAdjust()">
            </div>
        </div>
        <a href="log-in.html" class="log-out" onclick="buttonClick()">LOG OUT</a>
    </div>
</div>

    <script src="javascript/menu.js"></script>
</body>

</html>