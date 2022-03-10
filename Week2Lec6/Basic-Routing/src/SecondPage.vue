<script>
import Navbar from './components/NavBar.vue'
import Hero from './components/Hero.vue'

export default {
  components: {
    Navbar,
    Hero
  }
}

</script>

<template>
  <Navbar />
  <Hero
      text="This is my second page"
      description="This will be passed as Description for Second Page"
  />
</template>

<style>

</style>
