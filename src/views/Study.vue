<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined>
    <v-card-title>Высшее образование</v-card-title>
    <v-card-text>
      <v-list v-for="row in rows">
        <v-list-item>
          <v-row>
            <v-col cols="3">{{row.date}}</v-col>
            <v-col>
              <p class="font-weight-black">{{row.university}}</p>
              <p>{{row.position}}</p>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Study',
    data () {
      return {
        rows: [{
          date: "1998 - 2003",
          university: "Сибирская академия государственной службы (Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации), Новосибирск",
          position: "Государственное и муниципальное управление, Менеджер со знанием немецкого языка (диплом с отличием)"
        }],

      }
    }
  }
</script>

<style scoped>

</style>
