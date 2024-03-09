<template>
  <div class="login--content">
      <div class="login--content-fix">
          <n-button type="primary" @click.stop="emit('updateNav', 'index')">
              返回首页
          </n-button>
          <div class="login-box">

          </div>
      </div>

  </div>
</template>

<script setup>
import { NButton } from "naive-ui"
import {defineEmits, onMounted} from "vue";

const emit = defineEmits(["updateNav"])
// function loginBoxEnter(el, done){
//     console.log(el, done)
// }
onMounted(()=>{

})

</script>

<style scoped>
@import "@/assets/style/common.css";
.login--content {
    width: 100vw;
    height: 100vh;
    background-image: url("@/assets/images/bg_login.jpg");
    background-size: cover;
    background-position: center;
}
.login--content-fix {
    margin: 0 auto;
    position: relative;
    width: 1000px;
}
.login-box {
    position: absolute;
    top: 100px;
    width: 400px;
    height: 600px;
    background-color: #fff;
}
</style>
