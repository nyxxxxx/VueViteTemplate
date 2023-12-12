import { createRouter, createWebHistory } from "vue-router";
// Page
import HomePage from "@/views/HomeView.vue"
import AboutPage from "@/views/AboutView.vue"

// routes內宣告有哪些頁面
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: '首頁' },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: { title: '關於我們' },
  },
]

// 接著建立路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 可以設定路由在跳轉前的動作
router.beforeEach((to, from, next) => {
  document.title = to.meta.title //在切換路由時，可以先行設定title再跳轉
  next(); // 繼續路由導航
});

export default router;