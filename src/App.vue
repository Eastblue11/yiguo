<template>
  <div id="app">
    <!--<img src="./assets/logo<!--.png">-->
    <!--<router-view/>-->
    <div>
    		<ul>
    			<li><router-link to='/shouye'>首页</router-link></li>
    			<li><router-link to='/fenlei'>分类</router-link></li>
    			<li><router-link to='/car'>购物车</router-link></li>
    			<li><router-link to='/mine'>我的</router-link></li>
    		</ul>
    	<router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
ul{
	width: 100%;
	background-color: #0fb37b;
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	height: 0.4rem;
	line-height: 0.4rem;
	/*margin-top: 3.5rem;*/
}
ul li{
		font-size: 0.2rem;
	list-style-type: none;
	float: left;
	width: 25%;
	text-align: center;
}
ul a{
	text-decoration: none;
	color: #fff;
}
</style>
