<template>
    <div class="login--content">
        <div class="login--content-fix" >
            <n-button type="primary" @click.stop="emit('updateNav', 'index')">
                返回首页
            </n-button>
            <div class="login-box" ref="loginBox">
                <n-form :label-width="120" :model="formValues" size="large" >
                    <n-form-item label="用户名">
                        <n-input :value="formValues.user.username" placeholder="输入姓名"></n-input>
                    </n-form-item>
                    <n-form-item label="密码" >
                        <n-input :value="formValues.user.password" placeholder="请输入密码"></n-input>
                    </n-form-item>
                    <n-form-item label="验证码" >
                        <n-input :value="formValues.captcha" placeholder="请输入验证码"></n-input>
                    </n-form-item>
                </n-form>
                <n-button type="primary" @click.stop="goRegister">
                  前往注册
                </n-button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { NButton, NForm, NFormItem, NInput } from "naive-ui"
import {defineEmits, onMounted, ref} from "vue";
import gsap from "gsap"


const emit = defineEmits(["updateNav"])
const glt = new gsap.timeline()


let loginBox = ref(null)

const formValues = ref({
    user: {
        username: "",
        password: "",
    },
    captcha: "",
})

onMounted(()=>{

})

function goRegister () {
    glt.to(loginBox.value, { x: 600, delay: 0.3, onComplete: ()=> {
            emit('updateNav', 'register')
        }})
}

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
    height: 100vh;
}
.login--content-fix .n-button {
    position: relative;
    z-index: 2;
}
.login-box {
    position: absolute;
    top: 100px;
    left: 0;
    width: 400px;
    height: 600px;
    background-color: #fff;
    opacity: 1;
}
</style>
