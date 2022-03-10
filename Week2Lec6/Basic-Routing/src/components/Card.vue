<script>
export default {
  props: {
    description: String,
    title: String,
    url: String,
  }
}
</script>

<template>
  <div class="card-container">
    <img class="image" v-bind:src="url" />
    <h3>{{title}}</h3>
    <p>{{description}}</p>
  </div>

</template>

<style>
.image {
  width: 100%;
  height: 100%;
}
.card-container{
  max-width: 300px;
  display: inline-block;
  background-color: #fefefe;
  border: 1px solid #000;
  padding: 30px;
}
</style>
