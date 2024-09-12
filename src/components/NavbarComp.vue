<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top body">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-md-center" :class="{ show: navbarOpen }" id="navbarCollapse">
          <ul class="navbar-nav mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link active" aria-current="page" to="/About">About</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/SignUp">Sign Up</router-link>
            </li>
            <img class="logo" src="https://github.com/nazabrahams/capstoneimgs/blob/main/Beauty_sync-removebg-preview.png?raw=true" height="140" width="140">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/Treatments">Treatments</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/BookNow">Book Now</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/Contact">Contact</router-link>
            </li>
          </ul>
          <!-- <form class="d-flex" @submit.prevent="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchQuery"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'NavBarComp',
  data() {
    return {
      navbarOpen: false,
      searchQuery: ''
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    },
    search() {
      console.log('Search query:', this.searchQuery)
    }
  }
}
</script>

<style>
.body {
  height: 15%;
  /* padding-top: 4.5rem; */
  background-color: #F3CD97;
}
.nav-item{
  padding-top: 3rem;
  font-size: 19px;
}

</style>