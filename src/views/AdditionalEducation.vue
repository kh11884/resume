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
        rows: [
          {
            date: 'январь - март 2020',
            university: 'Academ IT School',
            chapter: 'Серверная веб-разработка на JAVA'
          },
          {
            date: 'октябрь - декабрь 2019',
            university: 'Academ IT School',
            chapter: 'Клиентская веб-разработка (HTML, CSS, JAVASCRIPT)'
          },
          {
            date: 'июль - сентябрь 2019',
            university: 'Academ IT School',
            chapter: 'Объектно-ориентированное программирование на JAVA'
          },
          {
            date: 'январь - март 2020',
            university: 'Academ IT School',
            chapter: 'Серверная веб-разработка на JAVA'
          },
          {
            date: 'апрель - июнь 2019',
            university: 'Academ IT School',
            chapter: 'Тестирование программного обеспечения'
          },
          {
            date: 'апрель - июнь 2019',
            university: 'Academ IT School',
            chapter: 'Основы баз данных и язык SQL'
          },
          {
            date: 'январь - март 2020',
            university: 'Academ IT School',
            chapter: 'Основы программирования JAVA'
          },
          {
            date: 'сентябрь 2009',
            university: 'Сибирский центр развития авиационного бизнеса',
            chapter: 'Перевозка опасных грузов воздушным транспортом'
          },
          {
            date: 'февраль-апрель 2008',
            university: 'НП «ЦК ОСТО СФО»',
            chapter: 'Курсы по подготовке специалистов по таможенному оформлению'
          },
          {
            date: 'октябрь 2005',
            university: 'IATA Training & Development Institute',
            chapter: 'Навыки и процедуры грузовых перевозок воздушным транспортом'
          }
        ],

      }
    }
  }
</script>

<style scoped>

</style>
