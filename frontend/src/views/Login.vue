<template>
  <div class="Connexion">
    <div>
      Login page
      <Login />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Connexion',
  components: {
    Login
  }
}
</script>
