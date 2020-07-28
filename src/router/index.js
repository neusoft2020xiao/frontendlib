import Vue from "vue";
import VueRouter from "vue-router";

//引入需要路由管理的所有组件

//首页区组件
// import HomeMain from "./../components/home/main.vue";
import OrderMain from "./../components/order/main.vue";
import UserLogin from "./../components/user/login.vue";
import Home from "../views/Home";

//安装：
//npm install vue-router --save(save把增加的依赖信息填写到package.json文件)
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "host",
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: "order",
        name: "ordermain",
        component: OrderMain,
      },
    ],
  },
  {
    path: "/login",
    name: "userlogin",
    component: UserLogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLogin = localStorage.getItem("userId");
    if (isLogin) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});
export default router;
