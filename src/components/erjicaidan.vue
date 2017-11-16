<template>
	<div  style="overflow: hidden;border-bottom: 0.01rem solid #9e9e9e;padding-bottom: 0.1rem;">
	<dl v-for="item in msg1" class="erdan">
		<dt><img :src=item.pictureUrl /></dt>
		<dd>{{item.navName}}</dd>
	</dl>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				msg1:[]
			}
		},
		
		methods:{
			getData:function(){
				this.$http.get('../../static/shouye_diyiping.json').then(function(res){
				
					this.msg1=res.data.data.template.componentList[0].componentNavs
				})
				
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style>
	.erdan{
		float: left;
		width:0.8rem;
		margin: 0 0.0685rem;
		cursor:pointer;
	}
	.erdan dd{
		text-align: center;
	}
	.erdan dt{
		text-align: center;
	}
	.erdan img{
		width: 0.5rem;
		height: 0.5rem;
	}
</style>