<template>
  <div>
    <h1 class="black-text grey mb-2 text-xs-center">Formulaire de candidature</h1>
    <h3>#1 L’Humain</h3>
    <v-card color="grey lighten-4" flat>
     <v-card-text>
       <v-subheader>Donnez un exemple de quelque chose que vous avez fait, créé ou auquel vous avez contribué qui montre vos compétences exceptionnelles. <br>(quelque chose que la plupart de vos pairs ne pourraient pas faire, ou n'auraient pas fait)</v-subheader>
       <v-container fluid>
         <v-layout row>
           <v-flex xs12>
             <v-text-field
               name="input-1"
               placeholder="Les exemples peuvent être tout aussi bien être des projets professionnels au sein de Prisma Media ou auprès de vos anciens employeurs, de projets personnels ou associatifs. N'hésitez pas à inclure les prix ou les bourses que vous avez gagnés. Indiquez les URL pertinentes et le contact pertinent pour une recommandation sur votre niveau de contribution."
               textarea
             ></v-text-field>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card-text>
   </v-card>
   <v-card color="grey lighten-4" flat>
    <v-card-text>
      <v-subheader>Donnez un autre exemple de quelque chose que vous avez fait, créé ou auquel vous avez contribué qui montre votre capacité managériale. </v-subheader>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12>
            <v-text-field
              name="input-1"
              placeholder="N'hésitez pas à développer votre exemple précédent ou à utiliser un nouvel exemple. 🕵️"
              textarea
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
  <v-card color="grey lighten-4" flat>
   <v-card-text>
     <v-subheader>Optionnel: Donnez un autre exemple de quelque chose que vous avez fait, créé ou auquel vous avez contribué qui montre votre capacité managériale. </v-subheader>
     <v-container fluid>
       <v-layout row>
         <v-flex xs12>
           <v-text-field
             name="input-1"
             placeholder="Si vous avez un nouvel exemple de votre créativité ou de vos capacités managériales, n’hésitez pas à partager ici. "
             textarea
           ></v-text-field>
         </v-flex>
       </v-layout>
      </v-container>
    </v-card-text>
    </v-card>
     <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-subheader>Quels rôles pensez-vous prendre dans votre startup? Quelles compétences techniques ou d'affaires avez-vous qui feraient de vous le candidat idéal pour le/s rôle/s? </v-subheader>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                name="input-1"
                placeholder="Décrivez le rôle dans lequel vous pensez exceller et pourquoi. 💃🕺"
                textarea
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card color="grey lighten-4" flat>
     <v-card-text>
       <v-subheader>Quel est l’expertise professionnelle que vous pourriez apporter à votre projet ou à Demain? </v-subheader>
       <v-container fluid>
         <v-layout row>
           <v-flex xs12>
             <v-text-field
               name="input-1"
               placeholder="Utilisez votre connaissance d'un domaine en particulier pour partager un «secret» que vous avez - le plus surprenant vous serez, le plus de chance vous aurez d’être sélectionné! 😎"
               textarea
             ></v-text-field>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card-text>
    </v-card>
    <v-card color="grey lighten-4" flat>
     <v-card-text>
       <v-subheader>Décrivez votre acte de persuasion le plus impressionnant et quel en a été le résultat. </v-subheader>
       <v-container fluid>
         <v-layout row>
           <v-flex xs12>
             <v-text-field
               name="input-1"
               placeholder="Impressionnez nous 🚀🚀🚀"
               textarea
             ></v-text-field>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card-text>
    </v-card>
    <h3>#2 Votre projet</h3>
    <v-card color="grey lighten-4" flat>
     <v-card-text>
       <v-subheader>Quel est votre projet?</v-subheader>
       <v-container fluid>
         <v-layout row>
           <v-flex xs12>
             <v-text-field
               name="input-1"
               placeholder="500 mots pour décrire une solution qui répond à une problème."
               textarea
             ></v-text-field>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card-text>
    </v-card>
    <v-card color="grey lighten-4" flat>
     <v-card-text>
       <v-subheader>Quel est le marché dans lequel vous souhaiteriez faire évoluer / monétiser votre idée? Quels seraient les utilisateurs finaux de votre produit?</v-subheader>
       <v-container fluid>
         <v-layout row>
           <v-flex xs12>
             <v-text-field
               name="input-1"
               placeholder=""
               textarea
             ></v-text-field>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card-text>
    </v-card>
    <h4>
      Merci d’insérer le lien Vimeo ainsi que le mot de passe d’une vidéo de présentation de votre idée? (45 secondes max)
    </h4>
    <h3>#3 Votre position actuelle au sein du groupe Prisma Media</h3>
    <h4>
      Dans quelle division êtes vous? (Feminin, Entertainment, Premium, Filiales)
    </h4>
    <h4>
      Qui est votre supérieur? (Blanc)
    </h4>
    <h4>
      Depuis combien de temps travaillez vous chez Prisma Media? (Blanc)
    </h4>
    <h4>
      Quel type de contrat de travail? (CDI CDD)
    </h4>

  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>
