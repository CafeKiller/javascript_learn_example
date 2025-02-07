<template>
  <div class="index--content">
    <div class="index--top">
      <div class="index--top_left">
          <div class="rollover">
              <n-carousel autoplay draggable show-arrow>
                  <img
                          class="rollover-img"
                          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                  >
                  <img
                          class="rollover-img"
                          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                  >
                  <img
                          class="rollover-img"
                          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                  >
                  <img
                          class="rollover-img"
                          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                  >
              </n-carousel>
          </div>
          <div class="data-box">
              <div class="data-item">
                  <n-icon size="20" color="#18a058" depth="3" :component="People" />
                  当前会员数:
                  <n-number-animation ref="numberAnimationInstRef" :duration="7000" :from="0" :to="2481" />
              </div>
              <div class="data-item">
                  <n-icon size="20" color="#18a058" depth="3" :component="Happy" />
                  当前纪念馆:
                  <n-number-animation ref="numberAnimationInstRef" :duration="7000" :from="0" :to="1032" />
              </div>
              <div class="data-item">
                  <n-icon size="20" color="#18a058" depth="3" :component="LogoYen" />
                  当前交易数:
                  <n-number-animation ref="numberAnimationInstRef" :duration="7000" :from="0" :to="1832" />
              </div>
              <div class="data-item">
                  <n-icon size="20" color="#18a058" depth="3" :component="HourglassOutline" />
                  最近建馆:
                  <div class="user-name">CafeKiller</div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { People, Happy, LogoYen, HourglassOutline } from "@vicons/ionicons5"
import { NCarousel, NIcon, NNumberAnimation } from "naive-ui"

</script>

<style scoped>
@import "@/assets/style/common.css";
.index--content {
    position: relative;
    margin: 10px auto 0;
    width: 1200px;
}
.index--top {
    width: 100%;
    display: flex;
    align-items: center;
}
.index--top_left {
    width: 820px;
    height: 240px;
}
.rollover {
    width: 820px;
    height: 240px;
}
.rollover-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}
.data-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: #eeeeee;
}
.data-item {
    display: flex;
    align-items: center;
    font-size: 14px;
}
.data-item .n-icon {
    margin-right: 4px;
}
.data-item .user-name {
    margin-left: 3px;
    color: var(--main-color);
}
</style>
