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
    radioCheckIdx: '',
    showEditModal: '',
    showWarningModal: false,
    showEditModal: false,
    showAddModal: false,
  },
});

export default { store };
