<template>
  <HeaderView v-if="state.isShowHeader" @updateNav="dispatchNav"  />
  <div class="wrapper">
      <IndexView v-if="state.showNavRouter === 'index'"/>
      <LoginView v-if="state.showNavRouter === 'login'" @updateNav="dispatchNav"/>
      <RegisterView v-if="state.showNavRouter === 'register'" @updateNav="dispatchNav" />
  </div>
</template>

<script setup>
import HeaderView from './views/HeaderView.vue'
import IndexView from "@/views/IndexView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

import { reactive } from "vue";


const showHeaderArr = ["login", "register"]
let state = reactive({
    showNavRouter: "index",
    isShowHeader: true,
})

function dispatchNav (data) {
    if (showHeaderArr.indexOf(data) !== -1) {
        state.isShowHeader = false
    } else {
        state.isShowHeader = true
    }
    state.showNavRouter = data
}

</script>

<style>
#app {
    --main-color: #18a058;
}
</style>
