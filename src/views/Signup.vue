<template>
  <div class="card main-page">
    <Loading v-if="isLoading"/>
    <form action="" class="form">
      <h1 class="main-heading">Create an account</h1>
      <p class="form__link">
        Already have an account?
        <router-link class="primary-link" :to="{name: 'Login'}">Login</router-link>
      </p>
      <div class="form__inputs">
        <div class="row">
          <input class="form__text-input" type="text" placeholder="Firstname" v-model="firstname">
          <input class="form__text-input" type="text" placeholder="Lastname" v-model="lastname">
        </div>
        <input class="form__text-input" type="text" placeholder="Email" v-model="email">
        <input class="form__text-input" type="password" placeholder="Password" v-model="password">

        <p v-show="errorMessage !== ''" class="form__error">{{ this.errorMessage }}</p>

        <button @click.prevent="signup" class="btn btn--primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import firebase from "firebase";
import "firebase/auth";
import database from "../firebase/firebaseConfig";
export default {
  name: "Login",
  components: { 
    Loading
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      errorMessage: "",
      isLoading: false
    }
  },
  methods: {
    async signup() {
      this.isLoading = true;
      if(this.email !== "" && this.firstname !== "" && this.lastname !== "" && this.password !== "") {
        try {
          this.error = false;
          this.errorMessage = "";
          const firebaseAuth = await firebase.auth();
          const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
          const result = await createUser;
          const db = database.collection("users").doc(result.user.uid);
          await db.set({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
          });
          console.log(result);
          this.$router.push({name: 'Contacts'});
        } catch(error) {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      } else {
        this.isLoading = false;
        this.errorMessage = "Please fill in all input fields"
      }
      return;
    }
  }

}
</script>

<style lang="scss" scoped>
  .row {
    justify-content: space-between;
  }
  .row input {
    width: 49%;
  }
  .btn { margin-top: 1.5rem; }

</style>