<template>
  <main>
     <v-content class="hero">
       <section>
        <!-- <v-layout
          column
          wrap
          class="my-4"
          align-center
        > -->
          <!-- <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Votre équipe de soutien</h2>
              <span class="subheading">
                Une approche intellectuelle et professionnelle passionnante
              </span>
            </div>
          </v-flex> -->
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/hubert.png" alt="Vuetify.js" height="200">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center" link href="https://www.linkedin.com/in/hubertsaintolive/">Hubert Saint Olive <br> CEO</div>
                    </v-card-title>
                    <v-card-text>
                      <a class="black--text"></a> vous accompagne sur la vision business de votre projet et fait en sorte que vous rencontriez les acteurs de l’entrepreneuriat d’aujourd’hui et de demain
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/katia.png" alt="Vuetify.js" height="200">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"link href="https://www.linkedin.com/in/katia-gicquel-2800b163/">Katia Gicquel <br> COO</div>
                    </v-card-title>
                    <v-card-text>
                      <a class="black--text"></a> vous accompagne dans la gestion de vos outils d’entrepreneur et de la relation avec le siège de Prisma Media
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/axel.png" alt="Vuetify.js" height="200">
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"link href="https://www.linkedin.com/in/axeldevignon/">Axel de Vignon <br> CTO</div>
                    </v-card-title>
                    <v-card-text>
                      <a class="black--text"></a> vous accompagne dans la création de votre MVP en trouvant les freelances ainsi que les outils techniques adéquats
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </main>
 </template>
