<template>
    <div>     
    <h1 class="contact">Contact Us</h1>
       <div class="col-lg-6 hehe">
                <form class="form" action="https://submit-form.com/aJHNAoawp" style="max-width: 400px; margin-left: 10%; margin-top: 5%;" >
      <label for="name" style="display: block; margin-bottom: 8px; font-weight: bold">Name</label>

      <input type="text" id="name" name="name" placeholder="Name" required="" style=" width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid; border-radius: 4px;"/>

      <label for="email" style="display: block; margin-bottom: 8px; font-weight: bold; ;">Email</label>
      <input type="email" id="email" name="email" placeholder="Email" required="" style=" width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid; border-radius: 4px; "/>

      <label for="message" style="display: block; margin-bottom: 8px; font-weight: bold">Message</label>
      <textarea id="message" name="message" placeholder="Message" required="" style=" width: 100%; padding: 8px; height: 100px; margin-bottom: 16px; border: 1px solid; border-radius: 4px;"></textarea>

      <button type="submit" style=" width: 100%; padding: 10px; background-color: #E9EDC9; color: black; border: none; border-radius: 4px; font-size: 16px; font-weight: bold;">
        Send</button>
    </form>
    </div>
    <div class="col-lg-6">
                <div class="social-media">
                    <p class="social-link">
                        <img class="logos" src="https://github.com/nusaibah1/projectImages/blob/main/images2/face%201.png?raw=true" alt="facebook" width="20px" height="20px" />
                        <span class="name">@PetCo_</span>
                    </p>
                    <p class="social-link">
                        <img class="logos" src="https://github.com/nusaibah1/projectImages/blob/main/images2/insta%201.png?raw=true" alt="instagram" width="20px" height="20px" />
                        <span class="name">@PetCO_Cpt</span>
                    </p>
                    <p class="social-link">
                        <img class="logos" src="https://github.com/nusaibah1/projectImages/blob/main/images2/twitter%201.png?raw=true" alt="twitter" width="20px" height="20px" />
                        <span class="name">@_PetCo</span>
                    </p>
                </div>
            </div>
       </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
  /* .body{
    background-color: #FFFDD0;
    
  } */
  .form{
    margin-bottom: 100%;
    
  
}
label, input, textarea {
  text-align: left;
}
.hehe{
    /* margin-top: 13%; */
    height: 50vh; 
}
.contact{
    margin-top: 7%;
    margin-left: 5%;
}
.social-media {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50%;
    margin-left: 100%;
}
.social-link {
    margin: 10px;
    display: flex;
    align-items: center;
}
.social-link span {
    margin-left: 5px;
}
.name{
  font-weight: bold;
  font-family: "Bungee", sans-serif;
}
  </style>