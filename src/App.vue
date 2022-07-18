<template>
  <div class="">
    <NavBar />
    <Hero />
    <MeetTeam /> 
    <Accolades />
    <Hiring />
    <Footer />

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import MeetTeam from './components/MeetTeam.vue'
import Accolades from './components/Accolades.vue'
import Hiring from './components/Hiring.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components : { Hero, NavBar, MeetTeam, Accolades, Hiring, Footer },
}

</script>

