<template>
  <main>
     <v-content>
       <section>
         <v-parallax :src="heroImg" height="600">
           <v-layout
             column
             align-center
             justify-center
             class="white--text"
           >
             <img src="../assets/logo-demain.png" alt="Vuetify.js" height="400">
             <h1 class="white--text mb-2 display-1 text-xs-center">Faisons des idées d'aujourd'hui, les media de demain</h1>
             <v-btn
               class="red darken-1 mt-6"
               dark
               large
               href="/pre-made-themes"
             >
               Je Postule
             </v-btn>
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
               <h2 class="headline">L'intrapreneuriat</h2>
               <span class="subheading">
                 Cras facilisis mi vitae nunc
               </span>
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
                       <div class="headline text-xs-center">Material Design</div>
                     </v-card-title>
                     <v-card-text>
                       Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                       Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                       Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                     </v-card-text>
                   </v-card>
                 </v-flex>
                 <v-flex xs12 md4>
                   <v-card class="elevation-0 transparent">
                     <v-card-text class="text-xs-center">
                       <v-icon x-large class="red--text text--lighten-2">flash_on</v-icon>
                     </v-card-text>
                     <v-card-title primary-title class="layout justify-center">
                       <div class="headline">Fast development</div>
                     </v-card-title>
                     <v-card-text>
                       Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                       Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                       Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                     </v-card-text>
                   </v-card>
                 </v-flex>
                 <v-flex xs12 md4>
                   <v-card class="elevation-0 transparent">
                     <v-card-text class="text-xs-center">
                       <v-icon x-large class="red--text text--lighten-2">build</v-icon>
                     </v-card-text>
                     <v-card-title primary-title class="layout justify-center">
                       <div class="headline text-xs-center">Completely Open Sourced</div>
                     </v-card-title>
                     <v-card-text>
                       Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                       Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                       Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                     </v-card-text>
                   </v-card>
                 </v-flex>
               </v-layout>
             </v-container>
           </v-flex>
         </v-layout>
       </section>

       <section>
         <v-parallax :src="sectionImg" height="380">
           <v-layout column align-center justify-center>
             <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
             <em>Kick-start your application today</em>
             <v-btn
               class="red lighten-2 mt-5"
               dark
               large
               href="/pre-made-themes"
             >
               Get Started
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
                   <div class="headline">Company info</div>
                 </v-card-title>
                 <v-card-text>
                   Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                   Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                 </v-card-text>
               </v-card>
             </v-flex>
             <v-flex xs12 sm4 offset-sm1>
               <v-card class="elevation-0 transparent">
                 <v-card-title primary-title class="layout justify-center">
                   <div class="headline">Contactez-nous</div>
                 </v-card-title>
                 <v-card-text>
                   Nous sommes à votre disposition pour toute question complémentaire
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
                       <v-list-tile-title>contact@demain.media</v-list-tile-title>
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
import heroImg from '@/assets/hero.jpeg'
import sectionImg from '@/assets/section.jpeg'

export default {
  data() {
    return {
      sectionImg,
      heroImg
    }
  }
}
// import IntroductionPart from "@/components/IntroductionPart";
// import Intrapreneuriat from "@/components/Intrapreneuriat";
// import LeProgramme from "@/components/LeProgramme";
// import LEquipe from "@/components/LEquipe";
// import JePostule from "@/components/JePostule";
//
// export default {
//   components: {
//     IntroductionPart,
//     Intrapreneuriat,
//     LeProgramme,
//     LEquipe,
//     JePostule
//   },
// }
</script>
