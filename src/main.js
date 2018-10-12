// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

//全局自定义指令
// Vue.directive('rainbow',{
// 	bind(el,bingding,vnode){
// 		el.style.color = '#' + Math.random().toString(16).slice(3,9);
// 	}
// })
Vue.directive('theme',{
	bind(el,bingding,vnode){
		if(bingding.value == 'wide'){
			el.style.maxWidth = '1200px';
		}else if(bingding.value == 'narrow'){
			el.style.maxWidth = '600px';
		}
		if(bingding.arg){
			el.style.backgroundColor = 'lightgreen';
			el.style.padding = '20px';
		}
	}
})

//全局自定义过滤器
// Vue.filter('toUpperCase',function(value){
// 	return value.toUpperCase();
// })
Vue.filter('snippet',function(value){
	return value.slice(0,100) + '...';
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
