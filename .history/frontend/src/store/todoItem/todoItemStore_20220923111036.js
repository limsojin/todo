import axios from 'axios';

const state = () => ({
  todoList: [],
});

const actions = {
  addTodo({ commit }, payload) {
    const jsonVal = {
      list: payload,
      completed: false,
    };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
