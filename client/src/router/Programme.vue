<template>
  <main>
     <v-content class="leprogramme">
       <section>
         <v-parallax :src="leprogramme" height="590">
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
import leprogramme from '@/assets/leprogramme.png'

export default {
  data() {
    return {
      leprogramme
    }
  }
}
</script>

<style>

.leprogramme {
  padding: 30px !important;
}

</style>
