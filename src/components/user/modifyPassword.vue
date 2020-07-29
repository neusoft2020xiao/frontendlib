<template>
  <div class="register-box">
    <div class="register-box-body">
      <p class="register-box-msg">请输入登录信息</p>

      <form @submit="loginHandler">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" required v-model="userId" placeholder="账号" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" required v-model="password" placeholder="请输入原密码" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" required v-model="newpassword" placeholder="请输入新密码" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" required v-model="newPasswordConfirm" placeholder="请输入再次新密码" />
        </div>
        <div class="row">
          <div class="col-xs-8"></div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">确认修改</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "modifyPassword",

  data() {
    return {
      userId: "",
      password: "",
      newpassword: "",
      newPasswordConfirm: "",
    };
  },

  created() {},

  methods: {
    loginHandler(e) {
      e.preventDefault();
      if (this.newpassword !== this.newPasswordConfirm) {
        // TODO: 提示
        alert("两次密码输入不一致");
        return;
      }

      this.axiosJSON
        .post("/user/modify", null, {
          params: {
            userId: this.userId,
            password: this.password,
            new_password: this.newpassword,
          }
        })
        .then((result) => {
          if (result.status === 200) {
            if (result.data.status === "OK") {
              this.$router.push({
                path: "/login",
              });
            } else {
              alert(result.data.message);
            }
          }
        });
    },
  },
};
</script>

<style>
</style>
