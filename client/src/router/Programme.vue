<template>
  <main>
     <v-content class="travaux">
       <section>
         <v-parallax :src="travaux" height="500">
           <v-layout
             column
             align-center
             justify-center
             class="white--text"
           >
             <h1 class="yellow--text mb-3 display-1 text-xs-center"> </h1>
           </v-layout>
         </v-parallax>
       </section>
     </v-content>
   </main>
</template>

<script>
import travaux from '@/assets/travaux.png'

export default {
  data() {
    return {
      travaux
    }
  }
}
</script>

<style>

.travaux {
  padding: 0px !important;
}

</style>
