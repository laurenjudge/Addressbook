<template>
  <div class="card main-page">
    <Loading v-if="isLoading"/>
    <form action="" class="form">
      <h1 class="main-heading" v-if="editMode">Edit Contact</h1>
      <h1 class="main-heading" v-else>New Contact</h1>
      <div class="form__inputs">
        <div class="row">
          <input class="form__text-input" type="text" placeholder="Contact Name" v-model="firstname">
          <input class="form__text-input" type="number" placeholder="Phone Number" v-model="phone">
        </div>
        <input class="form__text-input" type="text" placeholder="Address" v-model="address">
        <input class="form__text-input" type="textarea" placeholder="Notes" v-model="notes">

        <p v-show="errorMessage !== ''" class="form__error">{{ this.errorMessage }}</p>

        <button class="btn btn--primary">Submit</button>
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
  name: "ContactForm",
  components: { 
    Loading
  },
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      notes: "",
      errorMessage: "",
      isLoading: false,
      editMode: false
    }
  },
  methods: {
   
  }

}
</script>

<style lang="scss" scoped>
  .row { justify-content: space-between; }
  .row input { width: 49%; }
  .btn { margin-top: 1.5rem; }
</style>