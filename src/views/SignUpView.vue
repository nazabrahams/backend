<template>
  <div class="home8"> 
    <div class="square">   
    <div class="sign-up">
      <!-- <h2>Sign Up</h2> -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <div>
          <label for="first_name">First Name:</label>
          <input type="text" v-model="firstName" id="first_name" required />
        </div>
        <div>
          <label for="surname">Surname:</label>
          <input type="text" v-model="surname" id="surname" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </div>
  </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      surname: '',
      message: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
       
        const response = await axios.post('/users/users', {
          email: this.email,
          password: this.password,
          first_name: this.firstName,
          surname: this.surname
        });
        console.log(response);
        
        if (response.status === 200) {
          this.message = 'Sign up successful!';
        } else {
          this.message = 'Sign up failed. Please try again.';
        }

        this.email = '';
        this.password = '';
        this.firstName = '';
        this.surname = '';
      } catch (error) {
        this.message = 'Error signing up. Please try again.';
      }
    }
  }
};
</script>
<style scoped>
.home8{
    background-image: url("https://github.com/nazabrahams/capstoneimgs/blob/main/pexels-kseniya-budko-58499146-9398528.jpg?raw=true");
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: left;
    align-items: center;
  }
.sign-up {
  max-width: 800px;
  /* margin: 0 auto; */
  margin-top: 10%;
  margin-right: 42%;
}

form {
  display: flex;
  flex-direction: column;
  width: 200%;
}

div {
  margin-bottom: 1em;
}

label {
  margin-bottom: .5em;
  color: #663e11;
  display: block;
  font-weight: bold;
}

input {
  border: 1px solid burlywood;
  padding: .5em;
  font-size: 1em;
  width: 100%;
}

button {
  padding: .7em;
  border: none;
  color: #FFFFFF;
  background-color: #663e11;
  font-size: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #663e11;
}
.square {
    width: 30%; 
    height: 71vh; 
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
    margin-left: 35%;
    margin-top: 5%;
  }
 
</style>