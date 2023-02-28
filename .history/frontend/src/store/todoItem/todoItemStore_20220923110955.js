import axios from 'axios';

const state = () => ({
  todoList: [],
});

const actions = {
  addTodo({ commit }, payload) {
    const jsonVal = {
      list: payload.todoList,

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
