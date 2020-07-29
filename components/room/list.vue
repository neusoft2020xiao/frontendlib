<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房间信息管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">房间id</th>
				  <th scope="col">房间号码</th>
				  <th scope="col">房间类型ID</th>
				  <th scope="col">房间类型</th>
				  <th scope="col">房间价格</th>
				  <th scope="col">房间折扣</th>
				  <th scope="col">房间状态</th>
				  <th scope="col">备注</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in roomList" v-bind:key="dm.roomId">
				  <td>{{dm.roomId}}</td>
				  <td>{{dm.roomNumber}}</td>
				  <td>{{dm.typeId}}</td>
				  <td>{{dm.roomType}}</td>
				  <td>{{dm.roomPrice}}</td>
				  <td>{{dm.roomDiscount}}</td>
				  <td>{{dm.roomStatus}}</td>
				  <td>{{dm.remark}}</td>
					<td>
					  <router-link v-bind:to="'/room/modify/'+dm.roomId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteroom(dm.roomId)"  class="btn btn-danger">删除</a> 
					  <router-link v-bind:to="'/room/view/'+dm.roomId" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<div>注:房间状态:1-可预订，0-已被预订，-1：已入住，-2：不可用</div>
		
		<p></p>
		<div class="row">
			<div class="col-md-6">
			总数:<span>{{count}}</span>	页数:<span>{{page}}</span>/<span>{{pageCount}}</span>
			</div>
			<div class="col-md-6 text-right">
				<nav>
				  <ul class="pagination justify-content-end">
					<li class="page-item"><a class="page-link" href="#" v-on:click="toFirstPage()">首页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toPreviousPage()">上页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toNextPage()">下页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toLastPage()">末页</a></li>
				  </ul>
				</nav>
			</div>
		</div> 
		<!-- /.box-body -->
		<router-link to="/room/add" class="btn btn-default">增加房间信息</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomList",
		data(){
			return {
				roomList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/room/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.roomList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteroom(roomId){
				let checkresult=confirm("您确认要删除此房间信息么");
				if(checkresult){
					axios.post("http://localhost:8200/room/delete",{roomId:roomId}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
				
				
			},
			toFirstPage(){
				this.page=1;
				this.getList();
			},
			toPreviousPage(){
				if(this.page>1){
					this.page--;
					this.getList();
				}
				
			},
			toNextPage(){
				if(this.page<this.pageCount){
					this.page++;
					this.getList();
				}
			},
			toLastPage(){
				this.page=this.pageCount;
				this.getList();
			}
		}
	}
</script>

<style>
</style>
