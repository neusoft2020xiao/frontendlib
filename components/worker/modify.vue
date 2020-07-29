<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改操作员</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">角色</label>
	  		<input type="text" class="form-control" v-model="worker.role" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">用户名</label>
	  		<input type="text" class="form-control" v-model="worker.username" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">密码</label>
	  		<input type="text" class="form-control" v-model="worker.password" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">姓名</label>
	  		<input type="text" class="form-control" v-model="worker.name" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">性别</label>
	  		<input type="text" class="form-control" v-model="worker.gender" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">手机号</label>
	  		<input type="text" class="form-control" v-model="worker.phone" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">部门编号</label>
	  		<input type="text" class="form-control" v-model="worker.department" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">邮箱地址</label>
	  		<input type="text" class="form-control" v-model="worker.email" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/worker/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	import axios from "axios";
	//操作员修改组件
	export default {
		name:"workerModify",
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
					//部门编号
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
			this.getworker(workerId);
			
		},
		methods:{
			getworker(workerId){
				
				axios.get("http://localhost:8200/worker/get?no="+workerId).then(result=>{
					this.worker=result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8200/worker/modify",this.worker).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/worker/list"); //编程方式跳转到操作员列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
