<template>
  <main>
     <v-content class="hero">
       <section>
         <v-parallax :src="heroImg" height="600">
           <v-layout
             column
             align-center
             justify-center
             class="white--text"
           >
             <img src="../assets/logoHD.png" alt="Vuetify.js" height="450">
             <h1 class="black--text mb-3 display-1 text-xs-top">Faisons des idées d'aujourd'hui, les media de demain</h1>
             <!-- <v-btn
               class="red lighten-2 mt-6"
               dark
               large
               to="/programme"
             >
               Le Programme
             </v-btn> -->
           </v-layout>
         </v-parallax>
       </section>

       <section>
         <v-layout
           column
           wrap
           class="my-5"
           align-center
         >
           <v-flex xs12 sm4 class="my-3">
             <div class="text-xs-center">
               <h2 class="headline">Prisma Media et l'intrapreneuriat</h2>
               <!-- <span class="subheading">
                 Une approche intellectuelle et professionnelle passionnante
               </span> -->
             </div>
           </v-flex>
           <v-flex xs12>
             <v-container grid-list-xl>
               <v-layout row wrap align-center>
                 <v-flex xs12 md4>
                   <v-card class="elevation-0 transparent">
                     <v-card-text class="text-xs-center">
                       <v-icon x-large class="red--text text--lighten-2">color_lens</v-icon>
                     </v-card-text>
                     <v-card-title primary-title class="layout justify-center">
                       <div class="headline text-xs-center">Des idées prenantes</div>
                     </v-card-title>
                     <v-card-text>
                       <a class="black--text" link href="http://www.prismamediasolutions.com/qui-sommes-nous">Prisma Media</a>, c'est avant tout près de 1400 employés qui servent chaque jour leurs auditeurs grâce à leur media d'avance. Une créativité débordante, une rigueur de fer et un esprit de famille, de quoi donner naissance à de multiples projets. Depuis les projets Eurêka et Infonity, les idées n'ont cessé d'affluer et...
                     </v-card-text>
                   </v-card>
                 </v-flex>
                 <v-flex xs12 md4>
                   <v-card class="elevation-0 transparent">
                     <v-card-text class="text-xs-center">
                       <v-icon x-large class="red--text text--lighten-2">flash_on</v-icon>
                     </v-card-text>
                     <v-card-title primary-title class="layout justify-center">
                       <div class="headline">Une rapidité d'exécution</div>
                     </v-card-title>
                     <v-card-text>
                       ... le Groupe a décidé de les soutenir en supportant ses collaborateurs. Cependant, il ne suffit pas d'avoir LA bonne idée. C'est important pour la motivation mais la rapidité d'exécution est cruciale! Il faut en effet rester meilleur que ses compétiteurs et pour cela, les intrapreuneurs lauréats seront conseillés par une <a class="black--text" link href="/Team">équipe dédiée</a>.
                     </v-card-text>
                   </v-card>
                 </v-flex>
                 <v-flex xs12 md4>
                   <v-card class="elevation-0 transparent">
                     <v-card-text class="text-xs-center">
                       <v-icon x-large class="red--text text--lighten-2">star</v-icon>
                     </v-card-text>
                     <v-card-title primary-title class="layout justify-center">
                       <div class="headline text-xs-center">Un succès prouvé</div>
                     </v-card-title>
                     <v-card-text>
                       En 1978, un as de l'exécution à la créativité débordante est arrivé en France, un Géo à la main.
                       En quelques années, <a class="black--text" link href="https://fr.wikipedia.org/wiki/Axel_Ganz">Axel Ganz</a>, a fait de son projet intrapreneurial un Groupe de plus de 1400 employés, leader bi-media avec près de 25 marques.
                       Gruner und Jahr a décidé d'investir dans les idées de ses collaborateurs Français comme il l'a fait il y a 40 ans pour Axel Ganz!
                     </v-card-text>
                   </v-card>
                 </v-flex>
               </v-layout>
             </v-container>
           </v-flex>
         </v-layout>
       </section>

       <section>
         <v-parallax :src="sectionImg" height="400">
           <v-layout column align-center justify-center>
             <div class="headline white--text mb-3 text-xs-center">Nous souhaitons délier votre créativité et la soutenir</div>
             <em>Découvrez notre programme d'accompagnement</em>
             <v-btn
               class="red lighten-2 mt-5"
               dark
               large
               href="/programme"
             >
               Le Programme
             </v-btn>
           </v-layout>
         </v-parallax>
       </section>

       <section>
         <v-container grid-list-xl>
           <v-layout row wrap justify-center class="my-5">
             <v-flex xs12 sm4>
               <v-card class="elevation-0 transparent">
                 <v-card-title primary-title class="layout justify-center">
                   <div class="headline">Je fais partie du Groupe</div>
                 </v-card-title>
                 <v-card-text>
                   Le programme est ouvert à tous les employés du Groupe Prisma Media et de ses filiales en France et à l'étranger.
                 </v-card-text>
                 <v-btn
                   class="red lighten-2 mt-4"
                   dark
                   large
                   to="/candidature"
                 >
                   Je Postule
                 </v-btn>
               </v-card>
             </v-flex>
             <v-flex xs12 sm4 offset-sm1>
               <v-card class="elevation-0 transparent">
                 <v-card-title primary-title class="layout justify-center">
                   <div class="headline">Je suis Freelance</div>
                 </v-card-title>
                 <v-card-text>
                   Nous recherchons régulièrement des freelances pour accompagner nos intrapreneurs. N'hésitez pas à contacter nos équipes:
                 </v-card-text>
                 <v-list class="transparent">
                   <v-list-tile>
                     <v-list-tile-action>
                       <v-icon class="red--text text--lighten-2">phone</v-icon>
                     </v-list-tile-action>
                     <v-list-tile-content>
                       <v-list-tile-title>+33 1 73 05 45 45</v-list-tile-title>
                     </v-list-tile-content>
                   </v-list-tile>
                   <v-list-tile>
                     <v-list-tile-action>
                       <v-icon class="red--text text--lighten-2">place</v-icon>
                     </v-list-tile-action>
                     <v-list-tile-content>
                       <v-list-tile-title>Paris, FR</v-list-tile-title>
                     </v-list-tile-content>
                   </v-list-tile>
                   <v-list-tile>
                     <v-list-tile-action>
                       <v-icon class="red--text text--lighten-2">email</v-icon>
                     </v-list-tile-action>
                     <v-list-tile-content>
                       <v-list-tile-title>
                         <a class="black--text" href="mailto:freelances@demain.media">freelances@demain.media </a>
                         </v-list-tile-title>
                     </v-list-tile-content>
                   </v-list-tile>
                 </v-list>
               </v-card>
             </v-flex>
           </v-layout>
         </v-container>
       </section>
     </v-content>
   </main>
</template>

<script>
import heroImg from '@/assets/philipp-transp.png'
import sectionImg from '@/assets/hands.jpg'
//https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/H-P/holi-hands.adapt.945.1.jpg

export default {
  data() {
    return {
      sectionImg,
      heroImg
    }
  }
}
</script>

<style>

.hero {
  padding: 0px !important;
}

</style>
