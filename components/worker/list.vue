<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">操作员管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">操作员id</th>
				  <th scope="col">角色</th>
				  <th scope="col">用户名</th>
				  <th scope="col">密码</th>
				  <th scope="col">姓名</th>
				  <th scope="col">性别</th>
				  <th scope="col">手机号码</th>
				  <th scope="col">部门编号</th>
				  <th scope="col">邮箱地址</th>
				  <th scope="col">地址</th>		
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in workerList" v-bind:key="dm.workerId">
				  <td>{{dm.workerId}}</td>
				  <td>{{dm.role}}</td>
				  <td>{{dm.username}}</td>
				  <td>{{dm.password}}</td>
				  <td>{{dm.name}}</td>
				  <td>{{dm.gender}}</td>
				  <td>{{dm.phone}}</td>
				  <td>{{dm.department}}</td>
				  <td>{{dm.email}}</td>
				  <td>{{dm.address}}</td>
					<td>
					  <router-link v-bind:to="'/worker/modify/'+dm.workerId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteworker(dm.workerId)"  class="btn btn-danger">删除</a> 
					  <router-link v-bind:to="'/worker/view/'+dm.workerId" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
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
		<router-link to="/worker/add" class="btn btn-default">增加操作员</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"WorkerList",
		data(){
			return {
				workerList:[],
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
				axios.get("http://localhost:8200/worker/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.workerList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteworker(workerId){
				let checkresult=confirm("您确认要删除此操作员么");
				if(checkresult){
					axios.post("http://localhost:8200/worker/delete",{workerId:workerId}).then(result=>{
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
