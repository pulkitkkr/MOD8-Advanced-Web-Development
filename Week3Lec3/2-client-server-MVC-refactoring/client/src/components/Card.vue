<script>
export default {
  props: {
    description: String,
    title: String
  }
}
</script>

<template>
  <div class="card-container">
    <h3>{{title}}</h3>
    <p>{{description}}</p>
  </div>

</template>

<style>
.card-container{
  max-width: 300px;
  display: inline-block;
  background-color: #fefefe;
  border: 1px solid #000;
  padding: 30px;
}
</style>
