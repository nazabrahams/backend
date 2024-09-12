<template>
  <div>
    <div class="home">
<h1 class="BS">
  Beauty sync
</h1>
<p class="BS2">
  Beauty Services
</p>
<button class="btn">Book Now</button>
    </div>
 
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .home{
    background-image: url("https://github.com/nazabrahams/capstoneimgs/blob/main/pexels-denys-12115041%201.png?raw=true");
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
  .BS{

  /* margin-bottom: 6%; */
  font-family: "Varela", sans-serif;
  /* font-weight: 700; */
  }
  .BS2{
  
  margin-bottom: 3%;
  font-size: 25px;
  font-family: "Varela", sans-serif;
  /* font-weight:700; */
  }
  .btn {
    background-color:  #FFE3E9 ;
    color: #b38b6d;
    font-weight: bold;
    /* padding: 10px 5px; */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    
  }
  .btn:hover {
    background-color: #F3CD97;
  }
</style>
