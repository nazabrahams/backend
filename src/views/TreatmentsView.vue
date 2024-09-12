<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <div class="home3">  
      <h1 class="treat">Our Treatments</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="animate__backInLeft">     
            <div class="card " style="width: 18rem; margin-bottom: 20px;">
              <img src="" class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Nail services</h5>
                <p class="card-text">Transform your nails with our expert manicures, pedicures, and creative nail art.</p>
              </div>
            </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="" class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Tooth Gems</h5>
                <p class="card-text">Add sparkle to your smile with our stylish tooth gem services.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card" style="width: 18rem; margin-bottom: 20px;">
              <img src="" class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Lash services</h5>
                <p class="card-text">Enhance your look with our luxurious lash extensions for fuller, longer lashes.</p>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="" class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Facials</h5>
                <p class="card-text">Revitalize your skin with our relaxing, rejuvenating facial treatments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
  @import 'animate.css';
/* 
    .body{
      background-color: #FFFDD0; 
      height: 125vh;
    } */
    .treat{
      margin-top: 7.5%;
      margin-left: 1%;
      /* font-family: "Varela", sans-serif; */
    }
    .card {
      font-family: "Varela", sans-serif;
      margin-top: 15%;
      margin-left: 30%;
    }
    .card-img-top {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    .home3{
    background-image: url("https://github.com/nazabrahams/capstoneimgs/blob/main/pexels-rdne-6724357.jpg?raw=true");
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    /* background-blend-mode: darken; */
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: left;
    align-items: center;
  }
  </style>