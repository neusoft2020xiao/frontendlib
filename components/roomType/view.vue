<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看房间类型</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">类型ID</label><p></p>
		<span>{{roomType.typeId}}</span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">类型名</label><p></p>
		<span>{{roomType.roomType}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房型备注</label><p></p>
	  		<span>{{roomType.remark}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">预定价格</label><p></p>
	  		<span>{{roomType.price}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">预定折扣</label><p></p>
	  		<span>{{roomType.discount}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间大小:m^2</label><p></p>
	  		<span>{{roomType.area}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">床位数量</label><p></p>
	  		<span>{{roomType.bedNum}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">床位大小</label><p></p>
	  		<span>{{roomType.bedSize}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">是否有窗</label><p></p>
	  		<span>{{roomType.window}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">创建时间</label><p></p>
	  		<span>{{roomType.createTime}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">更新时间</label><p></p>
	  		<span>{{roomType.updateTime}}</span>
	  </div>
	  
	  <router-link to="/roomType/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//房间类型查看组件
	import axios from "axios";
	export default {
		name:"WorkerView",
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
			this.getWorker(roomTypeId);
			
		},
		methods:{
			getWorker(roomTypeId){
				
				axios.get("http://localhost:8200/roomType/get?no="+roomTypeId).then(result=>{
					this.roomType=result.data.result;
				});
			}
	},
}
</script>

<style>
</style>