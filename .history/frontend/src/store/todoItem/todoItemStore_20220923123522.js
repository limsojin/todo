import axios from 'axios';
import storage from '@/store/index';

const state = () => ({
  todoList: [],

});
const getters = {
  todoList: (state) => state.todoList,
};
const actions = {
  addTodo({ commit }, payload) {
    const jsonVal = {
      item: payload,
      completed: false,
    };

    axios
      .post('/todo/', JSON.stringify(jsonVal))
      .then((res) => {
        commit('addTodoA', res.data);
      })
      .error((err) => {
        console.log(err);
      });
  },
};
const mutations = {

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
