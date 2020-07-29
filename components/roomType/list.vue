<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房间类型管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">房间类型id</th>
				  <th scope="col">类型名</th>
				  <th scope="col">备注</th>
				  <th scope="col">预定价格</th>
				  <th scope="col">预定折扣</th>
				  <th scope="col">房间大小(m^2)</th>
				  <th scope="col">床位数量</th>
				  <th scope="col">床位大小</th>
				  <th scope="col">是否有窗</th>	
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in roomTypeList" v-bind:key="dm.typeId">
				  <td>{{dm.typeId}}</td>
				  <td>{{dm.roomType}}</td>
				  <td>{{dm.remark}}</td>
				  <td>{{dm.price}}</td>
				  <td>{{dm.discount}}</td>
				  <td>{{dm.area}}</td>
				  <td>{{dm.bedNum}}</td>
				  <td>{{dm.bedSize}}</td>
				  <td>{{dm.window}}</td>
					<td>
					  <router-link v-bind:to="'/roomType/modify/'+dm.typeId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteroomType(dm.typeId)"  class="btn btn-danger">删除</a> 
					  <router-link v-bind:to="'/roomType/view/'+dm.typeId" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<div>注:1表示有窗,0表示无窗</div><p></p>
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
		<router-link to="/roomType/add" class="btn btn-default">增加房间类型</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"roomTypeList",
		data(){
			return {
				roomTypeList:[],
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
				axios.get("http://localhost:8200/roomType/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.roomTypeList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteroomType(roomTypeId){
				let checkresult=confirm("您确认要删除此房间类型么");
				if(checkresult){
					axios.post("http://localhost:8200/roomType/delete",{typeId:roomTypeId}).then(result=>{
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
