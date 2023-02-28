const todoItems = (state) => state.todoItems;
const doneTodoCount = (state, getters) => state.doneTodoCount;
const totalTodoCount = (state, getters) => getters.totalTodo.length;
