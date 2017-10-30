<template>
<div>
  <v-alert color="error" dismissible v-if="error">
    {{ error.message }}
  </v-alert>
  <v-form @submit.prevent="signup">
    <v-text-field
      label="Nom"
      v-model="Nom"
      required
    ></v-text-field>
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
    <v-btn type="submit">Signup</v-btn>
  </v-form>
  </div>
</template>

<script>
import { signup } from '@/api/auth'

export default {
  data () {
    return {
      username: '',
      password: '',
      name: '',
      error: null
    }
  },
  methods: {
    signup () {
      this.error = null
      signup({
        username: this.username,
        name: this.name,
        password: this.password
      }).then(() => {
        this.$router.push('/login')
      }).catch(err => {
        this.error = err.response.data.error
        console.error('Signup err', err)
      })
    }
  }
}
</script>

<style scoped>
  form {
    max-width: 400px;
    margin: auto;
  }
</style>
