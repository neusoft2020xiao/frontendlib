<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加房间信息</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >

	  <div class="form-group">
		<label for="exampleInputEmail1">房间id</label>
		<input type="text"  class="form-control" v-model="room.roomId"   required >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间号码</label>
	  		<input type="text" class="form-control" v-model="room.roomNumber"  required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间类型ID</label>
	  		<input type="text" class="form-control" v-model="room.typeId" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间类型</label>
	  		<input type="text" class="form-control" v-model="room.roomType" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间价格</label>
	  		<input type="text" class="form-control" v-model="room.roomPrice" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间折扣</label>
	  		<input type="text" class="form-control" v-model="room.roomDiscount" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间状态</label>
	  		<input type="text" class="form-control" v-model="room.roomStatus" required>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">备注</label>
		<input type="text" class="form-control" v-model="room.remark" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/room/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	import axios from "axios";
	
	export default {
		name:"roomAdd",
		data(){
			return {
				room:{
					//房间id
					roomId:"",
					//房间号码
					roomNumber:"",
					//房间类型ID
					typeId:"",
					//房间类型
					roomType:"",
					//房间价格
					roomPrice:"",
					//房间折扣
					roomDiscount:"",
					//房间状态
					roomStatus:"",
					//备注
					remark:"",
					//创建时间
					createTime:"",
					//更新时间
					updateTime:"",
					
				}
			};
		},
		methods:{
			add(){
				// document.write(this.room.role);
				axios.post("http://localhost:8200/room/add",this.room).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/room/list"); //编程方式跳转到房间信息列表组件
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
