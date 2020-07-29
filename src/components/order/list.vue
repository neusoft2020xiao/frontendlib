<template>
  <!-- Default box -->
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">客房列表</h3>

      <div class="box-tools pull-right">
        <button
          type="button"
          class="btn btn-box-tool"
          data-widget="collapse"
          data-toggle="tooltip"
          title="Collapse"
        >
          <i class="fa fa-minus"></i>
        </button>
        <button
          type="button"
          class="btn btn-box-tool"
          data-widget="remove"
          data-toggle="tooltip"
          title="Remove"
        >
          <i class="fa fa-times"></i>
        </button>
      </div>
    </div>
    <div class="box-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">房间类型</th>
            <th scope="col">房间价格</th>
            <th scope="col">房号</th>
            <th scope="col">是否被预订</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orderList" :key="item.roomId">
            <td>{{ item.roomType }}</td>
            <td>{{ item.roomPrice || 0 }}</td>
            <td>{{ item.roomNumber }}</td>
            <td>{{ item.roomStatus | boolTranslate}}</td>
            <td>
              <a class="btn btn-primary" href="toview.mvc" role="button">预订</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- /.box-body -->
    <!-- /.box-footer-->
  </div>
  <!-- /.box -->
</template>

<script>

export default {
  name: "OrderList",
  data() {
    return {
      orderList: [],
    };
  },
  created() {
    //当前组件的生命周期方法，组件创建后
    this.getList();
  },
  methods: {
    getList() {
      this.axiosJSON.get("/room/list").then(result =>{
        this.orderList = result.data.list;
      });
   }
  },
  filters:{
      boolTranslate:function(value){
          return value?'是':'否'
      }
  }
};
</script>