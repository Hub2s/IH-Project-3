<template>
  <v-app>
    <v-toolbar class="grey darken-2" fixed app>
      <v-toolbar-title class="white--text" v-if="$root.user">Hello {{ $root.user.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white--text" v-if="$root.user" flat to="/dashboard">
          Tableau de bord
        </v-btn>
        <v-btn class="white--text" flat v-if="!$root.user" to="/login">
          Login
        </v-btn>
        <v-btn class="white--text" flat v-if="!$root.user" to="/signup">
          Signup
        </v-btn>
        <v-btn class="white--text" flat @click.prevent="logout" v-if="$root.user">
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
        <!-- <v-flex xs12 sm4 class="white--text">
          Fait par <a class="white--text" href="https://github.com/Hub2s">Hub2S</a>
        </v-flex> -->
        <v-flex xs12 sm6 class="white--text">
          <a class="white--text" link href="http://www.prismamedia.com/conditions-generales-dutilisation/">Conditions générales d'utilisation</a>
        </v-flex>
        <v-flex xs12 sm6 class="white--text">
          <a class="white--text" href="mailto:contact@demain.media">Contact</a>
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

</style>
