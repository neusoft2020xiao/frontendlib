<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改房间类型</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">类型ID</label>
	  		<input type="text" class="form-control" v-model="roomType.typeId" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">类型名</label>
	  		<input type="text" class="form-control" v-model="roomType.roomType" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房型备注</label>
	  		<input type="text" class="form-control" v-model="roomType.remark" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">预定价格</label>
	  		<input type="text" class="form-control" v-model="roomType.price" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">预定折扣</label>
	  		<input type="text" class="form-control" v-model="roomType.discount" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间大小:m^2</label>
	  		<input type="text" class="form-control" v-model="roomType.area" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">床位数量</label>
	  		<input type="text" class="form-control" v-model="roomType.bedNum" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">床位大小</label>
	  		<input type="text" class="form-control" v-model="roomType.bedSize" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">是否有窗</label>
	  		<input type="text" class="form-control" v-model="roomType.window" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/roomType/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	import axios from "axios";
	//房间类型修改组件
	export default {
		name:"roomTypeModify",
		data(){
			return {
				roomType:{
					//类型ID
					typeId :"",
					//类型名
					roomType :"",
					//房型备注
					remark :"",
					//预定价格
					 price :"",
					//预定折扣
					discount :"",
					//房间大小:m^2
					area :"",
					//床位数量
					bedNum :"",
					//床位大小
					bedSize :"",
					//是否有窗
					window:"",    
					//创建时间
					createTime:"",
					//更新时间
					updateTime:"",

				}
			};
		},
		created(){ //组件的创建生命周期函数
			let roomTypeId=this.$route.params.no;
			this.getroomType(roomTypeId);
			
		},
		methods:{
			getroomType(roomTypeId){
				
				axios.get("http://localhost:8200/roomType/get?no="+roomTypeId).then(result=>{
					this.roomType=result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8200/roomType/modify",this.roomType).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/roomType/list"); //编程方式跳转到房间类型列表组件
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
