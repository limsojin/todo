<template>
  <div class="inputBox">
    <!--목표 모달-->
    <select v-model="planPickVal" @change="onClickSelectPlan()">
      <option
        v-for="p in pList"
        :key="p.value"
        :value="p.text"
      >
        {{ p.text }}
      </option>
    </select>
    <input
      type="text"
      v-model="todoVal"
      placeholder="할 일을 입력하세요"
      class="todo-input"
      @keyup.enter="onClickAddTodo(todo)"
    />
    <span class="addContainer" @click="onClickAddTodo(todo)">
      <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'todo-input',
  computed: {
    ...mapGetters(['todo', 'planPick', 'pList']),

    // todo's getter setter
    todoVal: {
      get() {
        return this.todo;
      },
      set(val) {
        this.setTodo(val);
      },
    },

    // planPick's getter setter
    planPickVal: {
      get() {
        return this.planPick;
      },
      set(val) {
        this.setPlanPickVal(val);
      },
    },
  },

  methods: {
    ...mapActions(['addTodo', 'setTodo', 'setPlanPickVal', 'selectPlan']),

    // 목표를 설정하면 선택한 text와 value을 list에 띄우도록
    onClickSelectPlan() {
      this.selectPlan(this.planPick);
    },
    async onClickAddTodo(todo) {
      const respons = await this.addTodo(todo);
      console.log(respons);
    },
    /* onClickAddTodo(todo) {
      this.addTodo(todo);
    }, */
  },

  /* methods: {
    addTodo() {
      this.$store.commit("addTodo", this.todo);
      this.todo = "";
    },
  }, */
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: rgb(255, 255, 255);
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
}
.inputBox input {
  background: rgb(255, 255, 255);
  text-align: center;
  border-style: none;
  font-size: 1.2rem;
}
select {
  width: 50px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  font-size: 16px;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
