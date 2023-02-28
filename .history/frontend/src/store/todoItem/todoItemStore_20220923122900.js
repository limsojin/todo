import axios from 'axios';
import storage from '@/store/index';

const state = () => ({
  todoList: [],
  
});
const getters = 
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

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
