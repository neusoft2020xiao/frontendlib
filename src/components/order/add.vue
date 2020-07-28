<template>
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">房客登记</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	         <form action = "add.mvc" method="post">
				  <div class="form-group">
				    <label for="exampleInputEmail1">房客姓名</label>
				    <input type="text" class="form-control" name="customerName">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房客性别</label>
				    <input type="text" class="form-control" name="sex">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房客房号</label>
				    <input type="text" class="form-control" name="room">
				  </div>
				  <button type="submit" class="btn btn-primary">添加</button>
			 </form>
	        </div>
	        <!-- /.box-body -->
	        <!-- /.box-footer-->
	      </div>
	      <!-- /.box -->
</template>

<script>
	export default{
		name:"OrderAdd",
		data(){
			return{};
		}
	}
</script>

<style>
</style>
