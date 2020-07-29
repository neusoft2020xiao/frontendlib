<template>
  <div>
    <div class="row">
      <div class="col-sm-6">用户ID：{{userId}}</div>
      <div class="col-sm-6">用户名：{{userName}}</div>
    </div>
    <div class="row">
      <div class="col-sm-6">用户姓名：{{name}}</div>
      <div class="col-sm-6">用户性别：{{gender | genderTrans}}</div>
    </div>
    <div class="row">
      <div class="col-sm-6">用户电话：{{phone}}</div>
      <div class="col-sm-6">用户邮箱：{{email}}</div>
    </div>
    <div class="row">
      <div class="col-sm-6">用户地址：{{address}}</div>
      <div class="col-sm-6">用户身份证：{{idcard}}</div>
    </div>
    <router-link class="btn btn-primary" to="/home/user/complete">修改资料</router-link>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      userId: "",
      userName: "",
      name: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      idcard: "",
    };
  },
  created() {
    this.getUserMessage();
  },
  methods: {
    getUserMessage() {
      const userName = localStorage.getItem("userName");

      this.axiosJSON
        .get("/user/view", {
          params: { userName },
        })
        .then((result) => {
          this.userId = result.data.result.userId;
          this.userName = result.data.result.userName;
          this.name = result.data.result.name;
          this.gender = result.data.result.gender;
          this.phone = result.data.result.phone;
          this.email = result.data.result.email;
          this.address = result.data.result.address;
          this.idcard = result.data.result.idcard;
        });
    },
  },
  filters: {
    genderTrans(val) {
      if (!val) return "";
      return val === "F" ? "女" : "男";
    },
  },
};
</script>

<style scoped>
.row {
  padding: 10px;
}
</style>