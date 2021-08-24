<template>
  <div class="card main-page">
    <Loading v-if="isLoading"/>
    <form action="" class="form">
      <h1 class="main-heading">New Contact</h1>
      <div class="form__inputs">
        <div class="row">
          <input class="form__text-input" type="text" placeholder="Contact Name" v-model="contactName" required>
          <input class="form__text-input" type="number" placeholder="Phone Number" v-model="contactPhone">
        </div>
        <input class="form__text-input" type="text" placeholder="Address" v-model="contactAddress">
        <input class="form__text-input" type="textarea" placeholder="Notes" v-model="contactNotes">

        <p v-show="errorMessage !== ''" class="form__error">{{ this.errorMessage }}</p>

        <button class="btn btn--primary" @click.prevent="addContact">Submit</button>
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
  name: "ContactCreate",
  components: { 
    Loading
  },
  data() {
    return {
      errorMessage: "",
      isLoading: false,
      contactID: ""
    }
  },
  methods: {
    async addContact() {
      this.isLoading = true;
      if(this.contactName.length > 0) {
        this.errorMessage = "";
        try {
          const db = database.collection("contacts").doc();
          await db.set({
            contactID: db.id,
            contactName: this.contactName,
            contactPhone: this.contactPhone,
            contactAddress: this.contactAddress,
            contactNotes: this.contactNotes
          })
          this.$router.push({name: "ViewContact", params: {id: db.id}});
        } 
        catch(err) {
          console.log(err)
          this.errorMessage = err.message;
          this.isLoading = false;
        }
      } else {
        this.errorMessage = "Please enter a name for your contact";
        this.isLoading = false;
      }
      this.contactName = null,
      this.contactPhone = null,
      this.contactAddress = null,
      this.contactNotes = null
    }
  },
  computed: {
    userToken() {
      return this.$store.state.userToken;
    },
    contactName: {
      get() {
        return this.$store.state.contactName;
      },
      set(payload) {
        return this.$store.commit("updateName", payload);
      } 
    },
    contactAddress: {
      get() {
        return this.$store.state.contactAddress;
      },
      set(payload) {
        return this.$store.commit("updateAddress", payload);
      } 
    },
    contactPhone: {
      get() {
        return this.$store.state.contactPhone;
      },
      set(payload) {
        return this.$store.commit("updatePhone", payload);
      } 
    },
    contactNotes: {
      get() {
        return this.$store.state.contactNotes;
      },
      set(payload) {
        return this.$store.commit("updateNotes", payload);
      } 
    }
  }

}
</script>

<style lang="scss" scoped>
  .row { justify-content: space-between; }
  .row input { width: 49%; }
  .btn { margin-top: 1.5rem; }
</style>