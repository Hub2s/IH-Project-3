<template>
  <div>
    <v-form @submit.prevent="login">
      <v-text-field
        label="Nom d'utilisateur"
        v-model="username"
        :counter="30"
        required
      ></v-text-field>
      <v-text-field
        label="Mot de passe"
        v-model="password"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
  </div>
</template>


<script>
import { login } from '@/api/auth'

export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login () {
      login(this.username, this.password, this.$root).then(data => {
        const redirect = decodeURIComponent(this.$route.query.redirect || '')
        this.$router.push(redirect || '/')
      })
    },
  },
}
</script>

<style scoped>
  form {
    max-width: 400px;
    margin: auto;
  }
</style>
