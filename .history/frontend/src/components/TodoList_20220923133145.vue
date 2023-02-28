<template>
  <div>
    <ul>
      <!--store의 todoList를 가져와 v-for로 렌더링-->
      <li
        v-for="(v, index) in todoList"
        :key="v.todo"
        @click.self="onClick_DoneToggle({ todo: v.todo, index: index })"
        :class="doneToggle_ischecked(v.done)"
      >
        <!--라디오 버튼 생성-->
        <div class="radio-wrap">
          <input
            type="radio"
            v-model="radioCheckedIdx"
            @change="radioChecked"
            name="editCheck"
            :value="index"
          />
        </div>

        <!--목표 나열-->
        <span class="planPick-list">[ {{ v.planPick }} ]</span>

        <!--리스트 나열-->
        <span class="todo-list">{{ v.todo }}</span>

        <!--삭제버튼-->
        <span
          class="delete-todo"
          @click.stop="onClick_DeleteTodo({ todo: v.todo, index: index })"
        >X
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'todo-list',
  data() {
    return { radioCheckedIdx: Number };
  },
  computed: {
    ...mapGetters(['todoList', 'onClickRadio', 'planPick']),
  },
  created() {
    this.newCreated();
  },
  methods: {
    ...mapActions(['newCreated', 'doneToggle', 'deleteTodo', 'exportSelected']),

    onClick_DoneToggle({ todo, index }) {
      this.doneToggle({ todo, index });
    },

    doneToggle_ischecked(done) {
      return done
        ? { doneToggle_ischecked: true }
        : { doneToggle_ischecked: false };
    },

    onClick_DeleteTodo({ todo, index }) {
      this.deleteTodo({ todo, index });
    },

    radioChecked() {
      // 변수 item으로 체크된 '라디오인덱스' & 'todo'를 exportSelected(item)로 넘김
      const idx = this.radioCheckedIdx;
      const todoto = this.todoList[this.radioCheckedIdx].todo;
      const item = { idx, todo: todoto };

      this.exportSelected(item);
    },

    // doneToggle(value) {
    //   // 토글 값 commit
    //   this.$store.commit("doneToggle", {
    //     // state를 조작하는 데, 특정 값들을 넘기고 싶어 두 번째 인자를 추가
    //     todo: value.todo,
    //     index: value.index,
    //   });
    // },
    // deleteTodo(value) {
    //  this.$store.commit("deleteTodo", {
    //    todo: value.todo,
    //    index: value.index,
    //  });
    // },
  },
};
</script>
<style scoped>
ul li {
  height: 3rem;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.03);
  background-color: rgb(210, 210, 210);
  margin: 0.5rem 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: #404040;
  position: relative;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
  font-weight: 600;
}
ul li:hover {
  background-color: rgb(147, 147, 147);
  animation: scale 0.5s forwards ease-in-out;
}
ul li.doneToggle_ischecked {
  text-decoration: line-through;
  background-color: rgba(113, 93, 93, 0.825);
  animation: scale 0.5s forwards ease-in-out;
}

@keyframes scale {
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
.delete-todo {
  color: #de4343;
  font-weight: 900;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
}
.edit-todo {
  color: #de4343;
  font-weight: 900;
  font-size: 1rem;
  position: absolute;
  right: 2.2rem;
}
.planPick-list {
  color: #de4343;
  padding-right: 10px;
  padding-left: 10px;
}

div.radio-wrap {
  display: inline-flex;
  align-items: center;
  width: 100px;
}
</style>
