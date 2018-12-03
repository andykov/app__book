// user.js модуль Vuex отвечающий за юзера

import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null
        }
    },
    mutations: {
        // параметры юзера
        SET_USER(state, payload) {
            state.user.isAuthenticated = true
            state.user.uid = payload
        }
    },
    actions: {
        /* @@ 4. тут происходит имплиментация экшена */
        SIGNUP({commit}, payload) {
            commit('SET_PROCESSING', true) // Начало процессинга
            /* @@ 5. тут происходит сама регистрация пользователя в Firebase 
            * Тут принимааем параметры из метода signup()
            */
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                //## .then это success
                /** В данном случае приходить будет объект user**/
                // console.log(user)
                commit('SET_USER', user.uid)
                commit('SET_PROCESSING', false) // Если юзер залогинился меняем процессинг на false
            })
            .catch(function(error) {
                //## .catch это обработка ошибок
                commit('SET_PROCESSING', false) // Если юзер не залогинился и пришла ошибка меняем процессинг на false
                commit('SET_ERROR', error.message) // и показываем ошибку
            });
        }
    }
}