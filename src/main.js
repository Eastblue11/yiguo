// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入axios请求数据
import Resource from "vue-resource"
Vue.use(Resource)
//引入swiper
import vueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(vueAwesomeSwiper)
import "../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css"
//引入四个底部菜单
import Shouye from '@/page/Shouye'
import Car   from '@/page/Car'
import Mine  from '@/page/Mine'
import Fenlei from '@/page/Fenlei'
//引入路由模块并全局注册
import Router from 'vue-router'
Vue.use(Router)

//路由配置规则
var routes=
	[{path:'',
		component:Shouye
	},
	{path:'/fenlei',
	component:Fenlei
	},
	{path:'/shouye',
		component:Shouye
	},
	{path:'/mine',
	component:Mine
},
{path:'/car',
	component:Car
}]
const router=new Router({
	routes
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  
})
