import Vue from 'vue';
import Vuex from 'vuex';
import storage from './modules/storage';

Vue.use(Vuex);

const store = new Vue.Store({
  state: {
    todoItems: storage.fetch(),
    doneTodo: '',
    totalTodo: '',
    radioCheckTodo: '',
  },
});

export default { store };
