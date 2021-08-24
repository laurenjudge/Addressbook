<template>
  <div class="contact-wrapper card">
    <div class="contact-content">
      <h2 v-if="contact.contactName">{{ contact.contactName }}</h2>
      <p v-if="contact.contactAddress">Address: {{ contact.contactAddress }} </p>
      <p v-if="contact.contactPhone">Phone Number: {{ contact.contactPhone }} </p>
      <router-link class="primary-link" :to="{name:'ViewContact', params: { id: this.contact.contactID }}">More details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactListItem",
  props: ["contact"]

}
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 0.2rem;
  }

  .contact-wrapper {
    margin: 1rem 0;  
    background-color: #fff;
  }
</style>