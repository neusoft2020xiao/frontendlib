<template>
  <!-- Default box -->
  <div class="box">
      <router-view></router-view>
  </div>
  <!-- /.box -->
</template>

<script>

export default {
  name: "UserMain",
  data() {
    return {
      //orderList: [],
    };
  },
  created() {
    //当前组件的生命周期方法，组件创建后
    //this.getList();
  },
  methods: {
    /*getList() {
      this.axiosJSON.get("/room/list").then(result =>{
        this.orderList = result.data.list;
      });
    }*/
  }
};
</script>

<style>
</style>