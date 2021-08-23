<template>
  <div>
    <div class="main-page main-page--dark card">
      <h1 class="main-heading">My Contacts</h1>
      <ContactListItem :contact="contact" v-for="(contact, index) in testContacts" :key="index" />
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
    return {
      testContacts: [
          {
          name: 'test',
          address: '12 test road',
          phone: '8372492734'
        },
        {
          name: 'test',
          address: 'test',
          phone: '8372492734'
        },
        {
          name: 'test',
          address: 'test',
          phone: '8372492734'
        },
        {
          name: '',
          address: 'test',
          phone: '8372492734'
        }
      ]
    }
  }
}
</script>

<style>

</style>