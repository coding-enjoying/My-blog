<template>
  <div id="show-blogs" v-theme:bgc="'narrow'">
	<h2>博客总览</h2>
	<input type="text" placeholder="搜索..." v-model="search">
	<div class="single-box" v-for="blog in filterBlogs">
		<router-link v-bind:to="'/blog/' + blog.id">
			<h3 v-rainbow>{{blog.title | toUpperCase}}</h3>
		</router-link>
		<p>{{blog.body | snippet}}</p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data(){
  	return{
  		blogs: [],
  		search: ''
  	}
  },
  created(){
    //../../static/posts.json
  	this.$http.get('../../static/posts.json').then(function(data){
  			// console.log(data);
  			this.blogs = data.body.slice(0,10);
  	})
  },
  computed: {
  	filterBlogs: function(){
  		return this.blogs.filter((blog)=>{
  			return blog.title.match(this.search);
  		})
  	}
  },
  filters: {
  	// 'toUpperCase': function(value){
  	// 	return value.toUpperCase();
  	// }
  	toUpperCase(value){
  		return value.toUpperCase();
  	}
  },
  directives: {
  	'rainbow':{
  		bind(el,bingding,vnode){
  			el.style.color = '#' + Math.random().toString(16).slice(3,9);
  		}
  	}
  }
}
</script>


<style scoped>
	#show-blogs{
		max-width: 600px;
		margin: 0 auto;
	}
	#show-blogs a{
		text-decoration: none;
	}
	.single-box{
		box-sizing:border-box;
		padding: 20px;
		margin: 20px 0;
		background-color: #eee;
		border: 1px dotted #aaa;
	}
	input{
		box-sizing: border-box;
		width: 100%;
		height: 35px;
		line-height: 35px;
		padding: 0 10px;
	}
</style>
