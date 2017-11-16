<template>
	<div id="shouye" scroll="no">
	<!--//顶部固定搜索框-->
		<topBar></topBar>
	<!--//轮播图-->
		<swiper></swiper>
	<!--八个二级菜单-->
		<erji></erji>	
	<!--易果快报 滚动条-->
	<scroll></scroll>
	
	<!--泰风味图片-->
	<img src="../images/taifengwei.jpg" style="height: 2rem;width: 100%;"/>
	
	<!--六个手动滚动条菜单-->
	<div class="r1_out">
		<div class="r1_in">
			<dl v-for="(item,index) in msg2.componentCommoditys"  class="r1">
				<dt>
				
					<img src="../images/scroll1.jpg"/>
				</dt>
				<dd>{{item.commodityName}}</dd>
				<dd><span style="color:red" >￥{{item.commodityPrice}}</span>{{item.commoditySpec}}</dd>
			</dl>
		</div>
	</div>
	<!--新鲜水果 12- 美味即食18-->
	
	
	
	<div class="main1"  style="overflow: hidden;">
		<!--<img src="../images/scroll1.jpg" />-->
		
		<div align="center" style="margin: 0.1rem 0 0.1rem 0;font-weight: bold;">{{msg3.componentBase && msg3.componentBase.customComponentName }}</div>
		<dl v-for="item in msg3.componentCommoditys">
			<dt><img src='../images/li.jpg'/></dt>
			<dd >{{item.commodityName}}</dd>
			<dd><span style="color: red;">￥{{item.commodityPrice}}</span>{{item.commoditySpec}}</dd>
		</dl>
		
	</div>
	
	<!--回到頂部-->
	<div id="gotop" @click="goTop()">
		<img style="height: 0.7rem;position: fixed;right: 0;bottom: 1rem;" src="../images/top.png" />
	</div>
	
	<div style="height: 0.5rem;"></div>
	</div>
</template>

<script>
	import topBar from '../components/topbar'
	import swiper from '../components/swiper'
	import erji from '../components/erjicaidan'
	import scroll from '../components/zitigundong'
	export default{
		data(){
			return{
				//尝试直接把msg1传到erjicaidan.vue
				msg1:[],
				msg2:[],
				msg3:{}
			}
		},
		components:{
			topBar,
			swiper,
			erji,
			scroll
		},
		methods:{
			goTop:function(){
				var top=document.body.scrollTop
				if(document.body.scrollTop>500){
					document.body.scrollTop=0
				}
			},
			getData:function(){
				this.$http.get('../../static/shouye_diyiping.json').then(function(res){
					console.log(res.data.data.template.componentList)
					this.msg1=res.data.data.template.componentList[0].componentNavs
					this.msg2=res.data.data.template.componentList[2]
	this.msg3=res.data.data.template.componentList[12]
					console.log(this.msg3)
				})
				
			}
		},
		created(){
			this.getData()
		},
	}
</script>

<style scoped="scoped">
	#shouye{
		font-size: 0.12rem;
		
	}
	.r1 img{
		height: 1rem;
	}
	
.r1{
	float: left;
	
}

.r1_out{
	overflow: auto;height: 1.4rem;
	text-align: center;
	border-bottom: 0.05rem solid #f4f4f4;
}	
.r1_in{
	width:6.4rem;height: 1.4rem;
}
::-webkit-scrollbar {/*隐藏滚轮*/
display: none;
}



.main1 dl img{
	height: 2rem;
	width: 1.5rem;
}
.main1 dl{
	float: left;
	text-align: center;
	margin: 0 0.16rem;
	border: 0.02rem solid #F4F4F4;
}
</style>