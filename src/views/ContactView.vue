<template>
  <div class="main-page main-page--dark card" v-if="currentContact">
      <h1 class="main-heading">{{this.currentContact[0].contactName}}</h1>
      <div class="contact-wrapper card">
        <div class="contact-content">
          <span>Address:</span> 
          <p class="contact-details" v-if="this.currentContact[0].contactAddress">
            {{ this.currentContact[0].contactAddress }} 
          </p>
          <span>Phone Number:</span>
          <p class="contact-details" v-if="this.currentContact[0].contactPhone">
            {{ this.currentContact[0].contactPhone }} 
          </p>
          <span>Extra Notes:</span>
          <p class="contact-details" v-if="this.currentContact[0].contactNotes">
            {{ this.currentContact[0].contactNotes }} 
          </p>
        </div>
        <div class="btn-group">
          <button class="btn btn--danger" @click="onDelete">Delete</button>
          <button class="btn btn--primary" @click="editContact">Edit</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      currentContact: null
    }
  },
  methods: {
    onDelete() {
      this.$store.dispatch("deleteContact", this.currentContact[0].contactID);
      this.$router.push({name:"Contacts"});
    },
    editContact() {
      this.$router.push({ name:"EditContact", params: { id: this.currentContact[0].contactID } });
    }
  },
  async mounted() {
    await this.$store.dispatch("getContacts");
    this.currentContact = await this.$store.state.contacts.filter((contact) => {
      return contact.contactID === this.$route.params.id;
    })
  }
}
</script>

<style lang="scss" scoped>
  .contact-wrapper {
    &.card {background: #fff;}
  }
  .contact-content {
    font-size: 1.2rem;
    text-align: center;
    span {
      font-weight: bold;
      display: block;
    }
  }
  .contact-details {
    margin-bottom: 1rem;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .btn--danger {
    margin-right: 0.8rem;
  }
</style>