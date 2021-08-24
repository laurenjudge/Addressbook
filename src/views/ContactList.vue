<template>
  <div>
    <div class="main-page main-page--dark card">
      <h1 class="main-heading">My Contacts</h1>
      <ContactListItem :contact="contact" v-for="(contact, index) in contacts" :key="index" />
    </div>
  </div>
</template>

<script>
import ContactListItem from "../components/ContactListItem";
export default {
  name: "ContactList",
  components: {
    ContactListItem
  },
  data() {
    return {}
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  }
}
</script>

<style>

</style>