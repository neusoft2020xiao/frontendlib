<template>
	      <!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">删除房客信息</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	           <form action = "delete.do" method="post">
				  <div class="form-group">
				    <label for="exampleInputPassword1">房客性别</label>
				    <span>${customer.sex}</span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房客房号</label>
				    <span>${customer.room}</span>
				  </div>
				  <button type="submit" class="btn btn-primary">删除</button>
				  <a href="togetByAll.do" class="btn btn-primary">取消</a>
				  <input type=hidden name="customerName" value="${customer.customerName}">
			 </form>
	        </div>
	        <!-- /.box-body -->
	        <!-- /.box-footer-->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default{
		name:"OrderDelete",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
