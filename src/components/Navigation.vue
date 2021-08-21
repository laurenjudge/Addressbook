<template>
  <header>
    <nav class="container">
      <div class="brading">
        <router-link class="branding-link text--primary" :to="{name: 'Home'}">
         <span class="text--secondary">Address</span>Book
        </router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="nav-link" to='#'>All Contacts</router-link>
          <router-link class="nav-link" to='#'>Create Contact</router-link>
          <router-link class="nav-link" to='#'>Login/Signup</router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'navigation',
  components: {

  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 2px #e8e8e8;
}

nav {
  display: flex; 
  align-items: center;
  justify-content: space-between;
}
  
.nav-link {
  color: #555;
  margin: 0 0.5rem;
  padding: 0.2rem 0;

  &:hover, &:active {
    border-bottom: 2px solid #41B883;
  }
}

.branding-link {
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 400;
}
</style>