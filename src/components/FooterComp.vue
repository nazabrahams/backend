<template lang="">
    <div class="fixed-bottom" id="footerC">
        <footer >
            <p id="footer"></p>
        </footer>
    </div>
</template>
<script>
export default {
    mounted(){
        let dateEle = document.getElementById('footer');
        let currentYear = new Date().getFullYear();
        dateEle.innerHTML = `© ${currentYear} Beauty Sync`;
    }
}
</script>
<style scoped>
    #footerC{
        color: black;
        background-color:#F3CD97;
        height: 35px;
        font-family: "Bungee", sans-serif;
        
    }
</style>