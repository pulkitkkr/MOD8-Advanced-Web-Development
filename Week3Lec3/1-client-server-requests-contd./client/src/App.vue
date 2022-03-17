<script>
import Navbar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'

export default {
  data() {
    return {
      cards: [
          {
            title: "Title for Card1",
            description: "Description for Card"
          },
          {
            title: "Title for Card2",
            description: "Description for Card2"
          }
      ],
      message: "This will be passed as argument"
    }
  },
  components: {
    Navbar,
    Hero,
    Card
  }
}

</script>

<template>
  <Navbar />
  <Hero
      shouldShowButton
      divHtml="<h1>SHow This H1 Tag</h1>"
      text="This is a custom Value"
      description="This will be passed as Description"
  />
  <template v-for="card in cards">
    <Card v-bind:title="card.title"  v-bind:description="card.description"></Card>
  </template>

</template>

<style>

</style>
