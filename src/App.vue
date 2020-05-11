<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="d-print-none"
    >
      <v-list dense>
        <v-list-item link>
          <div>
            <router-link tag="div" to="/">
              <v-row>
                <v-icon>mdi-account</v-icon>
                <v-list-item-content class="ml-2">
                  <v-list-item-title>Обо мне</v-list-item-title>
                </v-list-item-content>
              </v-row>
            </router-link>
          </div>
        </v-list-item>

        <v-list-item link>
          <div>
            <router-link tag="div" to="/experience">
              <v-row>
                <v-icon>mdi-account-hard-hat</v-icon>
                <v-list-item-content class="ml-2">
                  <v-list-item-title>Опыт работы</v-list-item-title>
                </v-list-item-content>
              </v-row>
            </router-link>
          </div>
        </v-list-item>

        <v-list-group
          prepend-icon="mdi-school"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title>Образование</v-list-item-title>
          </template>

            <v-list-item link>
              <div>
                <router-link tag="div" to="/study">
                  <v-row>
                    <v-icon>mdi-school</v-icon>
                    <v-list-item-content class="ml-2">
                      <v-list-item-title>Высшее образование</v-list-item-title>
                    </v-list-item-content>
                  </v-row>
                </router-link>
              </div>
            </v-list-item>

            <v-list-item link>
              <div>
                <router-link tag="div" to="/additionalEducation">
                  <v-list-item-action>
                    <v-row>
                      <v-icon>mdi-cast-education</v-icon>
                      <v-list-item-content class="ml-2">
                        <v-list-item-title>Доп.обучение</v-list-item-title>
                      </v-list-item-content>
                    </v-row>
                  </v-list-item-action>
                </router-link>
              </div>
            </v-list-item>
        </v-list-group>

        <v-list-item link>
          <div>
            <router-link tag="div" to="/skills">
              <v-list-item-action>
                <v-row>
                  <v-icon>mdi-tools</v-icon>
                  <v-list-item-content class="ml-2">
                    <v-list-item-title>Ключевые навыки</v-list-item-title>
                  </v-list-item-content>
                </v-row>
              </v-list-item-action>
            </router-link>
          </div>
        </v-list-item>

        <v-list-item link>
          <div>
            <router-link tag="div" to="/recommendations">
              <v-list-item-action>
                <v-row>
                  <v-icon>mdi-account-voice</v-icon>
                  <v-list-item-content class="ml-2">
                    <v-list-item-title>Рекомендации</v-list-item-title>
                  </v-list-item-content>
                </v-row>
              </v-list-item-action>
            </router-link>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      class="d-print-none"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Андрей Хорошунов</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      color="indigo"
      app
      class="d-print-none"
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),
  }
</script>
