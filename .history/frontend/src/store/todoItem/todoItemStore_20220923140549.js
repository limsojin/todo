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

  doneToggle: ({ commit }, payload) => {
    axios
      .patch(`/todo/${payload}`)
      .then((res) => {
        console.log(res);
        commit('updateTdoo', payload);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteTodo: ({ commit }, payload) => { },
};

const mutations = {
  addTodo(state, payload) {
    state.todoList = [...state.todoList, payload];
  },
  getTodo(state, payload) {
    state.todoList = payload;
  },
  doneToggle(state, payload) {
    const index = state.todoList.findIndex((item) => item.payload === payload);
    state.todoList[index].done = !state.todoList[index].done;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
