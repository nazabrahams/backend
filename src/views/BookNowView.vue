<template>
    <div class="home7">
        <h1>Book Now</h1>   
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="first-name">Full Name</label>
          <div class="name-group">
            <input type="text" id="first-name" v-model="form.firstName" placeholder="First">
            <input type="text" id="last-name" v-model="form.lastName" placeholder="Last">
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Email address <span>*</span></label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        
        <div class="form-group">
          <label for="contact-number">Contact Number <span>*</span></label>
          <input type="tel" id="contactNumber" v-model="form.contactNumber" required>
        </div>
  
        <div class="form-group">
          <label for="spa-package">Which Beauty Treatment would you like to book? <span>*</span></label>
          <select id="spa-package" v-model="form.treatment" required>
            <option value="">Please select</option>
            <option value=" 1">Nail Services</option>
            <option value=" 2">Tooth Gems</option>
            <option value=" 3">Facials</option>
            <option value=" 4">Lash Services</option>

          </select>
        </div>
  
        <div class="form-group">
          <label for="time">Time <span>*</span></label>
          <input type="time" id="time" v-model="form.time" required>
        </div>
  
        <div class="form-group">
          <label for="date">Date <span>*</span></label>
          <input type="date" id="date" v-model="form.date" required>
        </div>
  
        <div class="form-group">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: '',
          treatment: '',
          time: '',
          date: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://localhost:8080/bookings/bookings', {
            treatment: this.form.treatment,
            date: this.form.date,
            time: this.form.time
          });
  
          alert('Booking was inserted successfully');
          console.log('Server response:', response.data);
  
        } catch (error) {
          console.error('There was an error submitting the form:', error);
        }
      }
    }
  };
  </script>
  

<style scoped>
 .home7{
    background-image: url("https://github.com/nazabrahams/capstoneimgs/blob/main/pexels-photo-3865680.jpeg?raw=truee");
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

.container {
  max-width: 600px;
  margin: 50px auto;
  background-color:#6E260E;
  padding: 20px;
  border-radius: 8px;
  /* margin-top: 10%; */
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.name-group {
  display: flex;
  gap: 10px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

label {
  display: block;
  margin-bottom: 5px;
}

span {
  color: red;
}

button[type="submit"] {
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


h1{
    margin-top: 10%;
}
  </style>
  