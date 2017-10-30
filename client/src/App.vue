<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title>Mon application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/dashboard">
          Tableau de bord
        </v-btn>
        <v-btn flat v-if="!$root.user" to="/login">
          Login
        </v-btn>
        <v-btn flat v-if="!$root.user" to="/signup">
          Signup
        </v-btn>
        <v-btn flat @click.prevent="logout" v-if="$root.user">
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="grey darken-2">
      <v-layout row wrap align-center>
        <v-flex class="test" xs12>
          <div class="white--text ml-3">
            Fait avec
            <v-icon class="red--text">favorite</v-icon>
            par <a class="white--text" href="https://github.com/Hub2s">Hub2S</a>
          </div>
          <div class="white--text contactLink">
            <a class="white--text" href="contact@demain.media">Contact</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { logout } from "@/api/auth";
export default {
  name: "app",
  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.test {
  display: flex;
  flex-direction: row;
}
.contactLink {
  margin-left: 80%;
}

</style>
