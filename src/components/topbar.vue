<template>
	<div class="topbar">
		<span>北京</span><img src="../images/arrow.png" />
		<div class="topbar-in">
			<input type="text" />
			<!--<img src="../images/sosuo.jpg">-->
		</div>
	</div>
</template>

<script>
</script>

<style>
	.topbar{
		width: 100%;
		height: 0.4rem;
		background-color: #0fb37b;
		position: fixed;
		top: 0;
		left: 0;
		color: #fff;
		line-height: 0.4rem;
		font-size: 0.15rem;
		padding: 0 0.1rem;
		z-index: 2;
	}
	.topbar img{
		vertical-align: middle;
		margin: 0 0.1rem 0 0.1rem;
		width: 0.1rem;
	}
	.topbar-in{
		display: inline-block;
		border-radius: 0.2rem;
		
	}
	.topbar-in input{
		border: 0;
		background-color: #4ccf99;
		border-radius: 0.2rem;
		width: 2.1rem;
		height: 0.3rem;
		background: url(../images/search.png) no-repeat 0.04rem ;
		background-size: 0.3rem 0.3rem;
		padding:0 0.3rem;background-color: #4ccf99;vertical-align: middle;
		margin-bottom: 0.05rem;
	}
</style>