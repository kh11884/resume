<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined>
    <v-card-title>Дополнительное обучение
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="rows"
        :search="search"
        :items-per-page="5"
        multi-sort
        class="elevation-1"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'AdditionalEducation',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Период',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          {
            text: 'Учебное заведение',
            value: 'university'
          },
          {
            text: 'Специализация',
            value: 'chapter'
          }
        ],
        rows: [],
      }
    },
    methods: {
      loadData: function () {
        var self = this

        $.ajax({
          type: 'GET',
          url: '/resume/rpc/api/v1/getCourses'
        }).done(function (coursesListFormServer) {
          self.rows = coursesListFormServer
        })
      },
    },
    created () {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
