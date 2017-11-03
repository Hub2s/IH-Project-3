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


<!-- <template>
  <div>
    <h2>L'équipe</h2>
    <p>3 personnes pour vous épauler à plein temps</p>
    <p>Hubert</p>
    <p>Axel</p>
    <p>Katia</p>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script> -->
