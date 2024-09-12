<template>
  <div>
    <div class="home2">
      <h1 class="about">About Us</h1>
      <p class="BS3">
        At Beauty Sync, we believe in transforming your beauty experience into a seamless journey.<br> Beauty Sync simplifies the process of booking beauty services like nails, tooth gems, and lashes.<br> Our platform connects clients with professionals, offering an easy and efficient way to schedule and manage appointments.<br> Experience hassle-free beauty bookings with Beauty Sync.
      </p>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .home2{
    background-image: url("https://github.com/nazabrahams/capstoneimgs/blob/main/2.jpg?raw=true");
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
  .BS3{
  margin-bottom: 3%;
  font-size: 20px;
  font-family: "Varela", sans-serif;
  /* font-weight:700; */
  color: black;
  display: flex;
  text-align: center;
  font-weight: 200;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 10px;
  display: inline; /* add this line */
  }
  .about{
    margin-bottom: 3%;
    color: black;
    font-family: "Varela", sans-serif;
    }

</style>