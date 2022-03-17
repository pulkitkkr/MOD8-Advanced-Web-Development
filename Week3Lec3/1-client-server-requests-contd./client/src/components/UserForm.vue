<script>
const BASE_URL = "http://127.0.0.1:8081/";
const USER_URL = BASE_URL+"user/"

export default {
  data(){
    return {
      userId: null,
      name: null,
    }
  },
  methods: {
    getNumberOfUser(){
      fetch(USER_URL+"getNumberOfUser").then(response => response.json()).then(res => {
        console.log(res);
      })
    },

    updateUserDetail(){
      const patchOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.name,
          id: this.userId
        })
      }

      fetch(USER_URL+"detail", patchOptions)
          .then(response => response.json())
          .then(res => {
            console.log(res);
          })

    },
    deleteUser(){
      const deleteOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      };

      fetch(USER_URL+"detail/"+this.userId, deleteOptions)
          .then(response => response.json())
          .then(res => console.log(res));
    },

    postDetails(){
      const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.name,
          id: this.userId
        })
      }

      fetch(USER_URL+"detail", postOptions)
          .then(response => response.json())
          .then(res => {
            console.log(res);
          })
    },

    getUserDetails(){
      console.log("Trying to get user details for: "+ this.userId);
      const URL = USER_URL+"detail/"+this.userId;
      console.log(URL);

      fetch(URL).then(response => response.json()).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<template>
  <h2>Please Enter User ID</h2>
  <input v-model="userId" placeholder="eg. 123456" type="text" />
  <h2>Please Enter Name</h2>
  <input v-model="name" placeholder="eg. John" type="text" />
  <br/>  <br/>  <br/>
  <button @click="postDetails">Post Details</button>
  <br/>
  <button @click="deleteUser">Delete Details</button>
  <br/>
  <button @click="updateUserDetail">Update Details</button>
  <br/>
  <button @click="getUserDetails">Get Details</button>
  <br/>
  <button @click="getNumberOfUser">Get Count</button>
</template>

<style>

</style>
