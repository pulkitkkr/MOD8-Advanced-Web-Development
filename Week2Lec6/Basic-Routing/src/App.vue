<script>
import Homepage from "./Homepage.vue";
import SecondPage from "./SecondPage.vue";

export default {
  data() {
    return {
      supportedPaths: ["/", "/second"],
      path: window.location.pathname
    }
  },
  components: {
    Homepage, SecondPage
  }
}



</script>

<template>
  <template v-if="supportedPaths.includes(path) && path==='/'">
    <Homepage />
  </template>
  <template v-if="supportedPaths.includes(path) && path ==='/second'">
    <SecondPage />
  </template>
  <template v-if="!supportedPaths.includes(path)">
    <h1>404 Error</h1>
  </template>
</template>

<style>

</style>
