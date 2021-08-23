<template>
  <div class="card main-page">
    <Loading v-if="isLoading"/>
    <form action="" class="form">
      <h1 class="main-heading">Login</h1>
      <p class="form__link">
        Don't have an account?
        <router-link class="primary-link" :to="{name: 'Signup'}">Sign up</router-link>
      </p>
      <div class="form__inputs">
        <input class="form__text-input" type="text" placeholder="Email" v-model="email">
        <input class="form__text-input" type="password" placeholder="Password" v-model="password">
        <p v-show="errorMessage !== ''" class="form__error">{{ this.errorMessage }}</p>
        <button @click.prevent="signin" class="btn btn--primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import firebase from "firebase/app";
import database from "../firebase/firebaseConfig";
import "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      errorMessage: ""
    }
  },
  components: { 
    Loading
  },
  methods: {
    async signin() {
      this.isLoading = true;
      if(this.email !== "" && this.password !== "") {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(()=> {
            this.$router.push({name:"Contacts"});
            this.errorMessage = "";
            console.log(firebase.auth().currentUser.uid)
          }).catch((err) => {
            this.errorMessage = err.message;
            this.isLoading = false;
          })
      } else {
        this.isLoading = false;
        this.errorMessage = "Please fill in all fields"
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .btn { margin-top: 1.5rem; }
</style>