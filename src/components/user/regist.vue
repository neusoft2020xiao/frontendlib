<template>
  <div class="register-box">
    <div class="register-box-body">
      <p class="register-box-msg">请输入注册信息</p>

      <form @submit="loginHandler">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" required v-model="userId" placeholder="账号" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" required v-model="password" placeholder="密码" />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            required
            v-model="passwordConfirm"
            placeholder="确认密码"
          />
        </div>
        <div class="form-group has-feedback">
          <input type="text" class="form-control" required v-model="name" placeholder="用户姓名" />
        </div>
        <div class="form-group has-feedback">
          <input type="text" class="form-control" required v-model="phone" placeholder="电话号码" />
        </div>
        <div class="row">
          <div class="col-xs-8"></div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">注册</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",

  data() {
    return {
      userId: "",
      password: "",
      passwordConfirm: "",
      phone:"",
      name:""
    };
  },

  created() {},

  methods: {
    loginHandler(e) {
      e.preventDefault();
      if (this.password !== this.passwordConfirm) {
        // TODO: 提示
        alert("两次密码输入不一致");
        return;
      }

      this.axiosJSON
        .post("/user/register", {
          userName: this.userId,
          password: this.password,
          name: this.name,
          phone: this.phone,
        })
        .then((result) => {
          if (result.status === 200) {
            if (result.data.status === "OK") {
              this.$router.push({
                path: "/login",
              });
            } else {
              console.log(result.data.message);
            }
          }
        });
    },
  },
};
</script>

<style>
</style>
