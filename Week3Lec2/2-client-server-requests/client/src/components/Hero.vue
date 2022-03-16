<script>
import UserForm from './UserForm.vue';

export default {
  props:{
    text: String,
    description: String,
    shouldShowButton: Boolean,
    divHtml: String,
  },
  components: {
    UserForm
  }
}

</script>

<template>
  <div class="container">
    <h1>{{text}}</h1>
    <p>{{description}}</p>
    <UserForm />
  </div>
</template>

<style>
  .container {
    background-color: #c3eef2;
    padding: 50px;
    min-height: 400px;
  }
</style>
