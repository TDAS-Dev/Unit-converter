<template>
  <div class="flex flex-col justify-between items-center h-screen bg-[#F9FAFB]">
    <NavBar />
    <Feedback />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Feedback from './components/Calculator.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components : {  NavBar, Footer, Feedback },
}

</script>

