<template>
  <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  :value="error"
                  type="warning"
                >
                  {{error}}
                </v-alert>
                <v-form>
                  <!-- @@ 3. Чтобы указать payload в диспатче ивентов, нужно сначала связать данные -->
                  <v-text-field prepend-icon="person" name="login" label="E-mail" type="email" required v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- @@ 1. По клику на регистрацию запустить метод(функцию) signup -->
                <v-btn color="primary" @click.prevent="signup" :disabled="processing">Регистрация</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    computed: {
      error() {
        // возврат ошибки из геттера getError из модуля general
        return this.$store.getters.getError
      },
      processing() {
        return this.$store.getters.getProcessing
      }
    },
    methods: {

      /* @@ 2. который будет диспатчить ивент экшен описаный/имплиментированный в store/user.js
      * Проще говоря, это передача параметров в экшен
      */
      signup() {
        this.$store.dispatch('SIGNUP', {
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>
