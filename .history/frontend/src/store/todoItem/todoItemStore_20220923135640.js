import axios from 'axios';

const state = () => ({
  todoList: [],

});
const getters = {
  todoList: (state) => state.todoList,
};
const actions = {

  addTodo: ({ commit }, payload) => {
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

  getTodo: ({ commit }) => {
    axios
      .get('/todo/')
      .then((res) => {
        console.log(res);
        commit('getTodo', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  doneToggleA: (state, payload) => {
    state.todoList[payload.index].done = !state.todoList[payload.index].done;
  },
};

const mutations = {
  addTodo(state, payload) {
    state.todoList = [...state.todoList, payload];
  },
  getTodo(state, payload) {
    state.todoList = payload;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
