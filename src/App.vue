<!-- 脚本设置块 -->
<script setup lang="ts">
// 导入必要的模块和组件
import { useHead } from "@unhead/vue";
import GLOBAL_CONFIG from "./config";
import { onMounted, ref, watch } from "vue";
import BanTouchMask from "@/components/BanTouchMask.vue";
import CenterLogo from "@/components/CenterLogo.vue";
import GithubBadge from "@/components/GithubBadge.vue";
import ICP from "@/components/ICP.vue";
import WebsiteDrawer from "./components/WebsiteDrawer.vue";
import useMobileVhCssVar from "@/hooks/useMobileVhCssVar";

// 为组件定义选项
defineOptions({
  name: "App",
});

// 用于跟踪动画和抽屉可见性状态的 ref
const animationEnd = ref<boolean>(false);
const drawerVisible = ref<boolean>(false);
const backgroundLoaded = ref<boolean>(false);

// 自定义 hook 处理移动视口高度
useMobileVhCssVar();

// 生命周期钩子：在组件挂载到 DOM 后运行
//在组件被挂载到 DOM 后，延迟 1.3 秒后将 animationEnd 的值设置为 true
onMounted(() => {
  // 设置延迟后更新 animationEnd
  setTimeout(() => {
    animationEnd.value = true;
  }, 1300);
});

// 观察器：在背景加载完毕且动画完成时更新 body 背景颜色
watch([backgroundLoaded, animationEnd], () => {
  if (backgroundLoaded.value && animationEnd.value) {
    document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
  }
});

// 设置页面的 head 元数据
useHead({
  title: GLOBAL_CONFIG.TKD.title,
  meta: [
    {
      name: "description",
      content: GLOBAL_CONFIG.TKD.description,
    },
    {
      name: "keywords",
      content: GLOBAL_CONFIG.TKD.keywords,
    },
  ],
});
</script>

<!-- 模板块 -->
<template>
  <div id="main-view">
    <!-- 遮罩以防止动画期间用户交互，1.3s后animationEnd将被设置为True -->
    <BanTouchMask :touchable="animationEnd" />

    <!-- GitHub 徽标组件 ，暂时不用此组件-->
    <!-- <GithubBadge /> -->

    <!-- CenterLogo 组件，带有属性和事件处理器 -->
    <CenterLogo
      :drawer-visible="drawerVisible"
      :touchable="animationEnd"
      @background-loaded="backgroundLoaded = true"
    />

    <!-- WebsiteDrawer 组件，使用 v-model 控制抽屉可见性 -->
    <WebsiteDrawer v-model="drawerVisible" />
    <!-- 默认地绑定第一个props属性，待续 -->

    <!-- ICP 组件，通过 animationEnd 控制可见性 -->
    <ICP :visible="animationEnd" />
  </div>
</template>

<!-- 样式块 -->
<style lang="scss" scoped>
#main-view {
  // 设置主容器的高度和样式
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
</style>
