<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined>
    <v-card-title>Дополнительное обучение</v-card-title>
    <v-card-text>
      <v-list v-for="row in rows">
        <v-list-item>
          <v-row>
            <v-col cols="3">{{row.date}}</v-col>
            <v-col>
              <p class="font-weight-black">{{row.chapter}}</p>
              <p>{{row.university}}</p>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'AdditionalEducation',
    data () {
      return {
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
        this.loadData();
    }
  }
</script>

<style scoped>

</style>
