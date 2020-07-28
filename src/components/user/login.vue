<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html">东软OA系统</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">请输入登录信息</p>

      <form @submit="loginHandler">
        <div class="form-group has-feedback">
          <input
            type="text"
            class="form-control"
            required
            name="userId"
            v-model="userId"
            placeholder="账号"
          />
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            required
            name="userPasswd"
            v-model="password"
            placeholder="密码"
          />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8"></div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <!-- /.social-auth-links -->

      <a href="togetByAll.do" class="btn btn-primary">忘记密码</a>
      <a href="togetByAll.do" class="btn btn-primary">注册新用户</a>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
import { userLogin } from "../../assets/js/server";

export default {
  name: "login",

  data() {
    return {
      userId: "",
      password: "",
    };
  },

  created() {},

  methods: {
    loginHandler(e) {
      e.preventDefault();
      userLogin({
        userId: this.userId,
        password: this.password,
      }).then((res) => {
        if (res.status === 200) {
          if (res.data.status === "OK") {
            localStorage.setItem('userId', this.userId)
            
            this.$router.push({
              path: "/home/order",
              params: { target: "font" },
            });
          } else {
            console.log(res.data.message);
          }
        }
      });
    },
  },
};
</script>

<style>
</style>
