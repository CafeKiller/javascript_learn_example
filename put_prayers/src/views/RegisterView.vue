<template>
    <div class="register--content">
        <div class="register--content-fix" >
            <n-button type="primary" @click.stop="emit('updateNav', 'index')">
                返回首页
            </n-button>
            <div class="register-box" ref="registerBox">
                <n-button type="primary" @click.stop="goRegister">
                    前往登录
                </n-button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { NButton } from "naive-ui"
import {defineEmits, onMounted, ref} from "vue";
import gsap from "gsap"


const emit = defineEmits(["updateNav"])
const glt = new gsap.timeline()
let registerBox = ref(null)

onMounted(()=>{
    // glt.to(registerBox.value, {opacity: 1, y: 100, delay: 0.5})
})

function goRegister () {
    glt.to(registerBox.value, { x: -600, delay: 0.3, onComplete: ()=> {
            emit('updateNav', 'login')
        }})
}

</script>

<style scoped>
@import "@/assets/style/common.css";
.register--content {
    width: 100vw;
    height: 100vh;
    background-image: url("@/assets/images/bg_reg.jpg");
    background-size: cover;
    background-position: center;
}
.register--content-fix {
    margin: 0 auto;
    position: relative;
    width: 1000px;
    height: 100vh;
}
.register--content-fix .n-button {
    position: relative;
    z-index: 2;
}
.register-box {
    position: absolute;
    top: 100px;
    right: 0;
    width: 400px;
    height: 600px;
    background-color: #fff;
    opacity: 1;
}
</style>
