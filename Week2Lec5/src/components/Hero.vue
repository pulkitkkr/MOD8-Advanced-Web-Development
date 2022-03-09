<script>
export default {
  props:{
    text: String,
    description: String,
    shouldShowButton: Boolean,
    divHtml: String,
  }
}

</script>

<template>
  <div class="container">
    <h1>{{text}}</h1>
    <p>{{description}}</p>
    <button v-if="shouldShowButton">Click</button>
    <div v-html="divHtml" />
  </div>
</template>

<style>
  .container {
    background-color: #c3eef2;
    padding: 50px;
    min-height: 400px;
  }
</style>
