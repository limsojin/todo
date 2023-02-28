const todoItems = (state) => state.todoItems;
const doneTodoCount = (state) => state.doneTodoCount;
const totalTodoCount = (state, getters) => getters.totalTodo.length;
