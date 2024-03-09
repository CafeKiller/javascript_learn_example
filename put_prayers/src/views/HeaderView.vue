<template>
    <div class="part--top">
        <div class="part--top_content">
            <div class="part--top_left">
                您好，欢迎来到“宠祈”服务平台
                【<a href="javascript:void(0)" @click.stop="updateNavRouter('login')">登录</a>
                | <a href="void(0)">免费注册</a>】
            </div>
            <div class="part--top_right">
                <div class="item">网站首页</div>
                <div class="item">纪念馆</div>
                <div class="item">会员中心</div>
                <div class="item">新手帮助</div>
            </div>
        </div>
    </div>
    <div class="part--center">
        <div class="part--center_content">
            <div class="part--center_left">
                <div class="logo"></div>
            </div>
            <div class="part--center_right">
                <n-input-group>
                    <n-input class="search-input" placeholder="请输入关键字" />
                    <n-button  class="search-btn" type="primary">
                        搜索
                    </n-button>
                </n-input-group>
                <n-button class="create-server-btn">
                    创建纪念馆
                </n-button>
            </div>
        </div>
    </div>
    <div class="part--bottom">
        <div class="part--bottom_content">
            <div class="nav-item index on" @click.stop="updateNavRouter('index')">首页</div>
            <div class="nav-item article" @click.stop="updateNavRouter('article')">宠物资讯</div>
            <div class="nav-item mark" @click.stop="updateNavRouter('mark')">宠物纪念馆</div>
            <div class="nav-item bbs" @click.stop="updateNavRouter('bbs')">宠物论坛</div>
            <div class="nav-item message" @click.stop="updateNavRouter('message')">留言板</div>
            <div class="nav-item bullet" @click.stop="updateNavRouter('bullet')">公告大厅</div>
            <div class="nav-item user" @click.stop="updateNavRouter('user')">个人中心</div>
        </div>
    </div>
</template>

<script setup>
import { NInputGroup,NInput,NButton } from "naive-ui"
import {defineEmits, onMounted, ref} from 'vue'

const emit = defineEmits(["updateNav"])

const navItemRef = ref(null)

// 向父组件 传递当前选择的导航
function updateNavRouter(navKey) {

    // 去除其他 nav 的激活样式
    navItemRef.value = document.querySelectorAll(`.nav-item`)
    const navs = navItemRef.value
    if (navs) { navs.forEach((item) => item.classList.remove("on")) }

    // 激活当前 nav 的样式
    navItemRef.value = document.querySelector(`.nav-item.${navKey}`)
    const currentNav = navItemRef.value
    if (currentNav) { currentNav.classList.toggle('on') }

    emit("updateNav", navKey)
}

// 组件挂载时调用
onMounted(() => {
    navItemRef.value = document.querySelector(".nav-item")
})

</script>

<style scoped>
@import "@/assets/style/common.css";
.part--top {
    width: 100%;
    height: 42px;
    background: #fafafa;
    border-bottom: #EEEEEE solid 1px;
}
.part--top_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0;
    width: 1200px;
    height: 42px;
    font-size: 16px;
    color: #333;
    line-height: 42px;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu, serif;
}
.part--top_right {
    display: flex;
}
.part--top_right .item {
    padding-right: 20px;
    margin-left: 18px;
    line-height: 18px;
    border-right: 1px solid #cccccc;
}

.part--center {
    margin: 0 auto;
    width: 1200px;
    height: 150px;
}
.part--center_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
}
.logo {
    width: 229px;
    height: 69px;
    background: url("@/assets/images/logo.png");
}
.n-input-group {
    width: 410px;
}
.search-input {
    width: 350px;
    height: 45px;
    font-size: 18px;
    line-height: 45px;
}
.search-btn {
    height: 45px;
    font-size: 18px;
}
.create-server-btn {
    margin-left: 30px;
    font-size: 18px;
    height: 45px;
    line-height: 45px;
}

.part--bottom {
    width: 100%;
    height: 42px;
    background: var(--main-color);
}
.part--bottom_content {
    margin: 0 auto 0;
    width: 1200px;
    height: 42px;
    display: flex;
    align-items: center;
}
.nav-item {
    padding: 0 20px;
    height: 42px;
    font-size: 18px;
    line-height: 42px;
    color: #fff;
    user-select: none;
    cursor: pointer;
}
.nav-item.on,
.nav-item:hover {
    background: #36ad6a;
}
</style>
