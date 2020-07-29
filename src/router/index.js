import Vue from "vue";
import VueRouter from "vue-router";

//引入需要路由管理的所有组件

//首页区组件
// import HomeMain from "./../components/home/main.vue";
import OrderMain from "./../components/order/main.vue";
import UserLogin from "./../components/user/login.vue";
import UserMain from "./../components/user/main.vue"; 
import UserView from "./../components/user/view.vue"; 
import UserComplete from "./../components/user/complete.vue"; 
import UserRegist from "./../components/user/regist.vue";
import UsermodifyPassword from "./../components/user/modifyPassword.vue";
import Home from "../views/Home";
import OrderList from "./../components/order/list.vue";

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
        children:[
          {
            path:"list",
            name:"orderlist",
            component:OrderList
          },
          {
            path:"/home/order",
            redirect: "/home/order/list"
          }
        ]
      },
      {
        path: "user",
        name: "usermain",
        component: UserMain,
        children:[
          {
            path:"view",
            name:"userview",
            component:UserView
          },
          {
            path:"complete",
            name:"usercomplete",
            component:UserComplete
          },
          {
            path:"/home/user",
            redirect: "/home/user/view"
          }
        ]
      },
    ],
  },
  {
    path: "/login",
    name: "userlogin",
    component: UserLogin,
  },
  {
    path: "/regist",
    name: "userRegist",
    component: UserRegist,
  },
  {
    path: "/modifyPassword",
    name: "usermodifyPassword",
    component: UsermodifyPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLogin = localStorage.getItem("userName");
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
