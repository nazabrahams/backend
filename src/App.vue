<template>
  
  <div id="navbar">
    <NavBarComp/>
    <router-view/>
    <FooterComp/>
  </div>



</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavbarComp.vue';

export default {
name: 'App' ,
components:{
  NavBarComp,
  FooterComp
}
}
</script>