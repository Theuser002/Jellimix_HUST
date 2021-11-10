<template>
  <div id="app">
    <!-- 2 way binding -->
    <!-- <input type="text" v-model="inputData" /> -->
    <!-- <div>{{ inputData }}</div> -->

    <!-- Property binding -->
    <!-- <div :xyz="inputData"> -->
    <!-- <input :type="inputData" /> -->
    <!-- </div> -->
    <!-- class binding -->
    <!-- <button @click="changeClass">Thay đổi class</button> -->
    <!-- <div -->
    <!-- :class="{ -->
    <!-- red: isRed, -->
    <!-- green: !isRed, -->
    <!-- }" -->
    <!-- ></div> -->
    <!-- style binding -->
    <!-- <input type="number" v-model="width" /> -->
    <!-- <div -->
    <!-- id="test-style" -->
    <!-- :style="{ -->
    <!-- width: width + 'px', -->
    <!-- }" -->
    <!-- ></div> -->

    <!-- Event handling -->
    <!-- <form action="/abc"> -->
    <!-- prevent default -->
    <!-- <input @contextmenu.prevent="doNothing" type="submit" /> -->
    <!-- </form> -->

    <!-- Conditional rendering -->
    <!-- <div v-if="isRed">Red</div> -->
    <!-- <div v-else>Green</div> -->

    <!-- List rendering -->
    <input type="text" v-model="inputData" />
    <button @click="addTask">Gửi</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.isDone" />
      <span :class="{
        'done': task.isDone
      }">{{task.content}}</span>
      <button @click="task.isDone = !task.isDone">Done/Not Done</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: "",
      isRed: true,
      width: 0,
      tasks: [],
      isDone: false,
      isCheck: false,
      check: "",
    };
  },
  methods: {
    changeClass() {
      this.isRed = !this.isRed;
    },
    addTask(){
      this.tasks.push(
        {
          content: this.inputData,
          isDone: false
        }
      )
    }
  },
  watch: {
    // theo dõi sự thay đổi dữ liệu
    inputData: () => {
      console.log("input data changed");
    },
  },
};
</script>

<style>
#test-style {
  height: 10px;
  background-color: aqua;
}

.done {
  color: red;
}
</style>
