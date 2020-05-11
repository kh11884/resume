<template>
  <v-card
    class="mx-auto"
    max-width="640"
    outlined>
    <v-card-title>Навыки</v-card-title>
    <v-card-text>
      <v-chip-group
        column
        active-class="primary--text"
      >
        <v-chip v-for="skill in skills" :key="skill">
          {{ skill }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Skills',
    data () {
      return {
        skills: ['Java',
          'SQL',
          'ООП',
          'REST',
          'XML',
          'HTTP',
          'CSS',
          'JavaScript',
          'jQuery',
          'Bootstrap',
          'Node.js',
          'Apache Maven',
          'Apache Tomcat',
          'JSON API',
          'JSP',
          'Spring Framework',
          'Hibernate ORM',
          'Git',
          'MySQL',
          'HTML5',
          'Ajax',
          'MVC',
          'JUnit'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
