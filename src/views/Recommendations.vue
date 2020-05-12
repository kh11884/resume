<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined>
    <v-card-title>Рекомендации</v-card-title>
    <v-card-text>
      <v-list v-for="contact in contacts">
        <v-list-item>
          <v-row>
            <v-col>
              <p class="font-weight-black">{{contact.fullName}}</p>
              <p>{{contact.position}}</p>
              <p>{{contact.email}}</p>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Recommendations',
    data () {
      return {
        contacts: [{
          fullName: 'Анна Усова',
          position: 'Руководитель Academ IT School',
          email: 'academits@gmail.com'
        }],

      }
    }
  }
</script>

<style scoped>

</style>
