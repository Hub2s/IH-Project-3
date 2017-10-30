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
               class="red lighten-2 mt-6"
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
               <h2 class="headline">L'INTRAPRENEURIAT</h2>
               <span class="subheading">
                 Une approche intellectuelle et professionnelle entraînante
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
                       <div class="headline text-xs-center">Des idées prenantes</div>
                     </v-card-title>
                     <v-card-text>
                       Les employés de Prisma Media se sont souvent démarqués grâce à leur créativité débordante. De nombreux projets ont été soulevés pendant Eurêka et des projets comme Infonity ont vu le jour. Depuis cet été, les idées affluent et Prisma Media a décidé de donner leur chance à certaines d'entre elles.
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
                       Comme dans tout projet entrepreneurial, il ne suffit pas d'avoir la bonne idée. L'idée est importante pour la motivation du porteur de projet mais sa rapidité d'exécution est d'autant plus cruciale pour rester meilleur que ses compétiteurs. Pour cela, l'intrapreuneur sera conseillé par les meilleurs.
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
                       En 1978, un as de l'exécution à la créativité débordante est venu s'installer en France avec un Géo à la main.
                       Il s'agit bien d'Axel Ganz, fondateur de Prisma Media. 40 ans, son projet est encore un succès de plus de 1400 employés et leader de son secteur.
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
             <div class="headline white--text mb-3 text-xs-center">Nous souhaitons vous accompagner dans votre démarche de créativité</div>
             <em>Découvrez notre programme d'accompagnement</em>
             <v-btn
               class="red lighten-2 mt-5"
               dark
               large
               href="/pre-made-themes"
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
                   <div class="headline">Je suis un Employé</div>
                 </v-card-title>
                 <v-card-text>
                   Le programme est ouvert à tous les employés du Groupe Prisma Media et de ses filiales en France et à l'étranger.
                 </v-card-text>
                 <v-btn
                   class="red lighten-2 mt-4"
                   dark
                   large
                   href="/pre-made-themes"
                 >
                   Je Postule
                 </v-btn>
               </v-card>
             </v-flex>
             <v-flex xs12 sm4 offset-sm1>
               <v-card class="elevation-0 transparent">
                 <v-card-title primary-title class="layout justify-center">
                   <div class="headline">Je suis un Freelance</div>
                 </v-card-title>
                 <v-card-text>
                   Nous recherchons régulièrement des freelances pour accompagner nos intrapreneurs
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
                       <v-list-tile-title>freelances@demain.media</v-list-tile-title>
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
