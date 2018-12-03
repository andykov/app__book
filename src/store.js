import Vue from 'vue'
import Vuex from 'vuex'

// импорт модулей
import generalModule from './store/general'
import userModule from './store/user'

/** Firebase собирает все данные из всех модулей в папке /store
 * объеденит все в один модуль и получится один общий стор
 * **/


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    generalModule,
    userModule
  }
})