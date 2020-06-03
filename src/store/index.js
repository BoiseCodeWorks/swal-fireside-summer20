import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

let api = Axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000,
  withCredentials: true
})
import ns from "../NotificationService.js"
export default new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions
    }
  },
  actions: {
    async getQuestions({ commit, dispatch }) {
      try {
        let res = await api.get("questions")
        console.log(res.data);
        commit('setQuestions', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createQuestion({ commit, dispatch }, questionDeetz) {
      try {
        let res = await api.post("questions", questionDeetz)
        console.log(res);
        ns.toast("Question Created", "error")
        dispatch("getQuestions")
      } catch (error) {
        console.error(error)
      }
    },
    async deleteQuestion({ commit, dispatch }, questionId) {
      try {
        await api.delete("questions/" + questionId)
        dispatch("getQuestions")
      } catch (error) {
        console.error(error)
      }

    }
  },
  modules: {
  }
})
