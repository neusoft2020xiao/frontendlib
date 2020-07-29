<template>
  <div class="user-complete-content">
    <form class="form-horizontal" @submit="submitHandler">
      <div class="form-group">
        <label for="userId" class="col-sm-2 control-label">用户ID：</label>
        <div class="col-sm-10">
          <input
            type="text"
            readonly
            class="form-control"
            v-model="userId"
            id="userId"
            placeholder="用户ID"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="userName" class="col-sm-2 control-label">用户名：</label>
        <div class="col-sm-10">
          <input
            type="text"
            readonly
            class="form-control"
            v-model="userName"
            id="userName"
            placeholder="用户名"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="name" class="col-sm-2 control-label">用户姓名：</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="name" id="name" placeholder="用户姓名" />
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label">性别：</label>
        <div class="col-sm-10">
          <label style="margin-right: 10px">
            <input type="radio" name="sex" id="sex1" value="M" v-model="gender" />
            男
          </label>
          <label>
            <input type="radio" name="sex" id="sex2" value="F" v-model="gender" />
            女
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="phone" class="col-sm-2 control-label">用户电话：</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="phone" id="phone" placeholder="用户电话" />
        </div>
      </div>

      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">用户邮箱：</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" v-model="email" id="email" placeholder="用户邮箱" />
        </div>
      </div>

      <div class="form-group">
        <label for="address" class="col-sm-2 control-label">用户地址：</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="address" id="address" placeholder="用户地址" />
        </div>
      </div>

      <div class="form-group">
        <label for="idcard" class="col-sm-2 control-label">用户身份证：</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="idcard" id="idcard" placeholder="用户身份证" />
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">确定修改</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserComplete",

  data() {
    return {
      userId: "",
      userName: "",
      name: "",
      gender: "M",
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

    submitHandler(e) {
      e.preventDefault();
      this.axiosJSON
        .post("/user/complete", {
          userId: this.userId,
          userName: this.userName,
          name: this.name,
          gender: this.gender,
          phone: this.phone,
          email: this.email,
          address: this.address,
          idcard: this.idcard,
        })
        .then((result) => {
          if (result.status === 200 && result.data.status === "OK") {
            alert("修改成功");
            this.$router.push("/home/user");
          } else alert("修改失败");
        });
    },
  },
};
</script>

<style>
.user-complete-content {
  padding-top: 10px;
}
</style>