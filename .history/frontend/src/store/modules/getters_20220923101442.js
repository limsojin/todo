const todoItems = (state) => state.todoItems;
const doneTodoCount = (state, getters) => getters.todoItems.length;
const totalTodoCount = (state, getters) => getters.totalTodo.length;
