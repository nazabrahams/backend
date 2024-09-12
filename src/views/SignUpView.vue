<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      signUp() {
        // Call API or perform sign-up logic here
        // For demonstration purposes, we'll just alert the user data
        alert(`Sign up successful! Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`)
      }
    }
  }
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 300px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>