<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Андрей Хорошунов</v-list-item-title>
        <v-list-item-subtitle>Мужчина, 41 год</v-list-item-subtitle>
        <v-list-item-subtitle>Новосибирск, М. Покрышкина</v-list-item-subtitle>
        <v-list-item-subtitle>+7-(913)-XXX-XXXX, myMail@gmail.com</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="180">
        <v-img src="../assets/photo1.jpg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

  </v-card>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>
