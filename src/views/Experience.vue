<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined>
    <v-card-title>Опыт работы</v-card-title>
    <v-card-text>
      <v-list v-for="row in rows">
        <v-list-item>
          <v-row>
            <v-col cols="3">{{row.date}}</v-col>
            <v-col>
              <p class="font-weight-black">{{row.place}}</p>
              <p class="font-weight-bold">{{row.position}}</p>
              <p>{{row.responsibility}}</p>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-btn
      color="primary"
      @click="loadData"
    >GetExperience from Server
    </v-btn>
  </v-card>
</template>

<script>
  export default {
    name: 'Experience',

    data () {
      return {
        rows: [
          {
            date: 'Июль 2019 — по настоящее время',
            place: 'ООО "С7 КАРГО"',
            position: 'Старший декларант',
            responsibility: 'Старший смены. организация работы в смене: распределение текущей работы, контроль исполнения.'
          },
          {
            date: 'Март 2008 — июль 2019',
            place: 'ООО "С7 КАРГО"',
            position: 'Специалист по таможенному оформлению',
            responsibility: 'таможенное оформление товаров перемещаемых в рамках внешнеторговых контрактов.'
          },
          {
            date: 'Апрель 2004 — март 2008',
            place: 'ОАО "Авиакомпания "Сибирь"',
            position: 'Эксперт по грузовым перевозкам',
            responsibility: 'Создание и поддержание агентской сети продаж грузовых авиаперевозок.'
          },
          {
            date: 'Июнь 2002 — март 2004',
            place: 'ОАО "Сибакадембанк"',
            position: 'Специалист управления маркетинга и рекламы',
            responsibility: 'Анализ рынка розничных банковских услуг. Разработка, внедрение и продвижение банковских продуктов и услуг. Формирование имиджа банка. Работа с подрядчиками по производству рекламы.'
          }
        ],
        testField: 0,
        loading: true,
        term: ''
      }
    },
    methods: {
      loadData: function () {
        var self = this

        $.ajax({
          type: 'GET',
          url: '/resume/rpc/api/v1/getExperience',
          data: {
            term: self.term
          }
        }).done(function (contactListFormServer) {
          self.rows = self.contactListFormServer
        })
      },
    },
    created () {

    }
  }
</script>

<style scoped>

</style>
