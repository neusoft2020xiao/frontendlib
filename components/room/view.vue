<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看房间信息</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">房间id</label><p></p>
		<span>{{room.roomId}}</span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间号码</label><p></p>
		<span>{{room.roomNumber}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间类型ID</label><p></p>
	  		<span>{{room.typeId}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间类型</label><p></p>
	  		<span>{{room.roomType}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间价格</label><p></p>
	  		<span>{{room.roomPrice}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间折扣</label><p></p>
	  		<span>{{room.roomDiscount}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间状态</label><p></p>
	  		<span>{{room.roomStatus}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">备注</label><p></p>
	  		<span>{{room.remark}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">创建时间</label><p></p>
	  		<span>{{room.createTime}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">更新时间</label><p></p>
	  		<span>{{room.updateTime}}</span>
	  </div>

	  
	  <router-link to="/room/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//房间信息查看组件
	import axios from "axios";
	export default {
		name:"RoomView",
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
		created(){ //组件的创建生命周期函数
			let roomId=this.$route.params.no;
			
			this.getRoom(roomId);
			
		},
		methods:{
			getRoom(roomId){
				
				axios.get("http://localhost:8200/room/get?no="+roomId).then(result=>{
					this.room=result.data.result;
				});
			}
	},
}
</script>

<style>
</style>