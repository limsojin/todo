import axios from 'axios';

const state = () => ({
  todoList: [],

});
const getters = {
  todoList: (state) => state.todoList,
};
const actions = {
  /**
   *
   * @param {*} param0
   * @param {*} payload
   */
  addTodo: ({ commit }, payload) => {
    const jsonVal = {
      item: payload,
      completed: false,
    };

    axios
      .post('/todo/', JSON.stringify(jsonVal))
      .then((res) => {
        commit('addTodo', res.data);
      })
      .error((err) => {
        console.log(err);
      });
  },
  /**
   *
   * @param {*} param0
   */
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
  /**
   *
   * @param {*} param0
   * @param {*} payload
   */
  doneToggle: ({ commit }, payload) => {
    const doneData = {
      id: payload.todo.id,
      completed: !payload.todo.completed,
    };
    axios
      .patch(`/todo/${payload.id}`, JSON.stringify(doneData))
      .then((res) => {
        console.log(res);
        commit('updateTdoo', payload);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteTodo: ({ commit }, payload) => {
    axios
      .delete(`/todo/${payload}`)
      .then((res) => {
        console.log(res);
        commit('deleteTodo', payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

const mutations = {
  addTodo(state, todo) {
    state.todoList = [...state.todoList, todo];
  },
  getTodo(state, data) {
    state.todoList = data;
  },
  doneToggle(state, id) {
    const index = state.todoList.findIndex((item) => item.id === id);
    state.todoList[index].done = !state.todoList[index].done;
  },
  deleteTodo(state, id) {
    state.todoList = state.todoList.filter(
      (t) => t.id !== id,
    );
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
