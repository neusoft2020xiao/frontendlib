<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看部门</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">部门编码</label><p></p>
		<span>{{department.code}}</span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">部门名称</label><p></p>
		<span>{{department.name}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">创建时间</label><p></p>
	  		<span>{{department.createTime}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">更新时间</label><p></p>
	  		<span>{{department.updateTime}}</span>
	  </div>
	  <router-link to="/department/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	import axios from "axios";
	export default {
		name:"DepartmentView",
		data(){
			return {
				department:{
					code:"",
					name:"",
					no:"",
					createTime:"",
					//更新时间
					updateTime:"",
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let departmentNo=this.$route.params.no;
			this.getDepartment(departmentNo);
			
		},
		methods:{
			getDepartment(no){
				
				axios.get("http://localhost:8200/department/get?no="+no).then(result=>{
					this.department=result.data.result;
				});
			}
	},
}
</script>

<style>
</style>