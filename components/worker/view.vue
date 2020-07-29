<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看操作员</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">操作员编码</label><p></p>
		<span>{{worker.workerId}}</span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">角色</label><p></p>
		<span>{{worker.role}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">用户名</label><p></p>
	  		<span>{{worker.username}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">密码</label><p></p>
	  		<span>{{worker.password}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">姓名</label><p></p>
	  		<span>{{worker.name}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">性别</label><p></p>
	  		<span>{{worker.gender}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">手机号码</label><p></p>
	  		<span>{{worker.phone}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">部门编码</label><p></p>
	  		<span>{{worker.department}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">邮箱地址</label><p></p>
	  		<span>{{worker.email}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">地址</label><p></p>
	  		<span>{{worker.address}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">创建时间</label><p></p>
	  		<span>{{worker.createTime}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">更新时间</label><p></p>
	  		<span>{{worker.updateTime}}</span>
	  </div>
	  
	  <router-link to="/worker/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//操作员查看组件
	import axios from "axios";
	export default {
		name:"WorkerView",
		data(){
			return {
				worker:{
					//操作员id
					workerId:"",
					//角色:worker/admin
					role:"",
					//用户名
					username:"",
					//密码
					password:"",
					//姓名
					name:"",
					//性别
					gender:"",
					//手机号码
					phone:"",
					//操作员编号
					department:"",
					//邮箱地址
					email:"",
					//地址
					address:"",
					//创建时间
					createTime:"",
					//更新时间
					updateTime:"",
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let workerId=this.$route.params.workerId;
			this.getWorker(workerId);
			
		},
		methods:{
			getWorker(workerId){
				
				axios.get("http://localhost:8200/worker/get?no="+workerId).then(result=>{
					this.worker=result.data.result;
				});
			}
	},
}
</script>

<style>
</style>