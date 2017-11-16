<template><div>
	<div class="rollbar">
		<div class="roll_left">
			<img src="../images/news.png" /><span>|</span>
		</div>
		<div>
		<ul>
	<marquee direction='up' scrolldelay='100' vspace="5"  style="height: 30px;">

<li v-for="item in msg2">{{item.fastReportTitle}}</li>
	</marquee>
			
			<!--<li>易果生鲜部分功能迁移至易果尊享及FAQ</li>
			<li>【原箱】懒懒椰泰国椰青9个,89元</li>
			<li>【新品】福建平和红心蜜柚1个，19元</li>
			<li>【2件8折】深海大虾200g</li>-->
		</ul>
		</div>
	</div>
	
</div></template>


<script>
	export default{
		data(){
			return{
				msg2:[]
			}
		},
		
		methods:{
			getData:function(){
				this.$http.get('../../static/shouye_diyiping.json').then(function(res){
				
					this.msg2=res.data.data.template.componentList[0].fastReports
				})
				
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style>
	.rollbar{
		height: 0.3rem;
		/*border: 1px solid red;*/
		border-bottom: 0.05rem solid #f4f4f4;
		line-height: 0.3rem;
		padding: 0 0.1rem;
	}
	.roll_left img{
		height: 0.18rem;
		width: 0.7rem;
		margin-right: 0.1rem;
		vertical-align: middle;
	}
	.rollbar div{
		float: left;
	}
	.rollbar ul{
		list-style-type: none;
		height: 0.3rem;
		/*overflow: hidden;*/
		margin-left: 0.2rem;
		font-size: 0;
	}
	.rollbar li{
		font-size: 0.12rem;
		height: 0.29rem;
		
	}
	
</style>